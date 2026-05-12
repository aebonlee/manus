import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import { getPosts, type Post } from '../../utils/posts';

const categoryTabs = [
  { key: 'all', label: '전체', labelEn: 'All' },
  { key: 'notice', label: '공지', labelEn: 'Notice' },
  { key: 'resource', label: '자료', labelEn: 'Resource' },
  { key: 'question', label: '질문', labelEn: 'Question' },
  { key: 'free', label: '자유', labelEn: 'Free' },
];

export default function Board() {
  const { language } = useLanguage();
  const { isLoggedIn } = useAuth();
  const isKo = language === 'ko';
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getPosts({ category: activeCategory, search });
      setPosts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [activeCategory, search]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    });
  };

  return (
    <div className="community-page">
      <SEOHead title={isKo ? '커뮤니티' : 'Community'} path="/community/board" />
      <div className="container">
        <div className="community-header">
          <h1 style={{ fontSize: '28px', fontWeight: 800 }}>{isKo ? '커뮤니티' : 'Community'}</h1>
          {isLoggedIn && (
            <Link to="/community/board/write" className="btn btn-primary btn-sm">
              <i className="fa-solid fa-pen" /> {isKo ? '글쓰기' : 'Write'}
            </Link>
          )}
        </div>

        <div className="community-tabs">
          {categoryTabs.map(tab => (
            <button
              key={tab.key}
              className={`chip${activeCategory === tab.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(tab.key)}
            >
              {isKo ? tab.label : tab.labelEn}
            </button>
          ))}
        </div>

        <div className="community-search">
          <input
            type="text"
            placeholder={isKo ? '제목, 작성자 검색...' : 'Search title, author...'}
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="post-list">
          {loading && <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>{isKo ? '로딩 중...' : 'Loading...'}</p>}
          {error && <p style={{ textAlign: 'center', color: '#EF4444', padding: '40px 0' }}>{error}</p>}
          {!loading && !error && posts.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>
              {isKo ? '게시글이 없습니다.' : 'No posts found.'}
              {!isLoggedIn && (
                <><br /><Link to="/login" style={{ color: 'var(--primary)' }}>{isKo ? '로그인하고 첫 글을 작성해보세요!' : 'Login and write the first post!'}</Link></>
              )}
            </p>
          )}
          {!loading && posts.map(post => (
            <Link key={post.id} to={`/community/board/${post.id}`} className="post-item">
              <span className={`post-category ${post.category}`}>
                {isKo ? categoryTabs.find(c => c.key === post.category)?.label : categoryTabs.find(c => c.key === post.category)?.labelEn}
              </span>
              <span className="post-title">{post.title}</span>
              <div className="post-meta">
                <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
                <span>{formatDate(post.created_at)}</span>
                <span><i className="fa-solid fa-eye" /> {post.view_count || 0}</span>
                <span><i className="fa-solid fa-comment" /> {post.comment_count || 0}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
