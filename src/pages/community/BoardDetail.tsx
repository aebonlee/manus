import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import SEOHead from '../../components/SEOHead';
import { getPostById, createComment, deleteComment, deletePost, type Post, type Comment } from '../../utils/posts';

export default function BoardDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !user) return;
    setSubmitting(true);
    try {
      const authorName = user?.user_metadata?.display_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Anonymous';
      const newComment = await createComment({ postId: Number(id), body: commentText.trim(), authorId: user.id, authorName });
      setPost(prev => prev ? { ...prev, comments: [...(prev.comments || []), newComment] } : prev);
      setCommentText('');
      showToast(isKo ? '댓글이 등록되었습니다.' : 'Comment posted.', 'success');
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    if (!confirm(isKo ? '댓글을 삭제하시겠습니까?' : 'Delete this comment?')) return;
    try {
      await deleteComment(commentId);
      setPost(prev => prev ? { ...prev, comments: (prev.comments || []).filter((c: Comment) => c.id !== commentId) } : prev);
      showToast(isKo ? '댓글이 삭제되었습니다.' : 'Comment deleted.', 'success');
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error', 'error');
    }
  };

  const handleDeletePost = async () => {
    if (!confirm(isKo ? '게시글을 삭제하시겠습니까?' : 'Delete this post?')) return;
    try {
      await deletePost(Number(id));
      showToast(isKo ? '게시글이 삭제되었습니다.' : 'Post deleted.', 'success');
      navigate('/community/board');
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error', 'error');
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  const canDelete = post && user && (user.id === post.author_id || isAdmin);

  if (loading) return <div className="community-page"><div className="container"><p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-light)' }}>{isKo ? '로딩 중...' : 'Loading...'}</p></div></div>;
  if (error || !post) return <div className="community-page"><div className="container"><p style={{ textAlign: 'center', padding: '60px 0', color: '#EF4444' }}>{error || (isKo ? '게시글을 찾을 수 없습니다.' : 'Post not found.')}</p><div style={{ textAlign: 'center' }}><Link to="/community/board" className="btn btn-secondary btn-sm">{isKo ? '목록으로' : 'Back to List'}</Link></div></div></div>;

  return (
    <div className="community-page">
      <SEOHead title={post.title} path={`/community/board/${id}`} />
      <div className="container">
        <div className="post-detail">
          <div className="post-detail-header">
            <h1 className="post-detail-title">{post.title}</h1>
            <div className="post-detail-info">
              <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
              <span>{formatDate(post.created_at)}</span>
              <span><i className="fa-solid fa-eye" /> {post.view_count || 0}</span>
            </div>
          </div>

          <div className="post-detail-body">
            {(post.content || '').split('\n').map((line: string, i: number) => <p key={i}>{line || <br />}</p>)}
          </div>

          <div className="post-detail-actions">
            <Link to="/community/board" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-arrow-left" /> {isKo ? '목록으로' : 'Back to List'}
            </Link>
            {canDelete && (
              <button className="btn btn-sm" style={{ background: '#EF4444', color: '#fff', borderColor: '#EF4444' }} onClick={handleDeletePost}>
                <i className="fa-solid fa-trash" /> {isKo ? '삭제' : 'Delete'}
              </button>
            )}
          </div>

          <div className="comments-section">
            <h3 className="comments-title">{isKo ? `댓글 ${post.comments?.length || 0}개` : `${post.comments?.length || 0} Comments`}</h3>

            {(post.comments || []).map((comment: Comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{comment.author_name || 'Anonymous'}</span>
                  <span className="comment-date">{formatDate(comment.created_at)}</span>
                  {user && (user.id === comment.author_id || isAdmin) && (
                    <button style={{ marginLeft: 8, background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: 12 }} onClick={() => handleDeleteComment(comment.id)}>
                      <i className="fa-solid fa-trash" />
                    </button>
                  )}
                </div>
                <div className="comment-body">{comment.body}</div>
              </div>
            ))}

            {user ? (
              <form className="comment-form" onSubmit={handleCommentSubmit}>
                <textarea placeholder={isKo ? '댓글을 입력하세요...' : 'Write a comment...'} value={commentText} onChange={e => setCommentText(e.target.value)} />
                <button type="submit" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-end' }} disabled={!commentText.trim() || submitting}>
                  {submitting ? (isKo ? '등록 중...' : 'Posting...') : (isKo ? '등록' : 'Post')}
                </button>
              </form>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '16px 0' }}>
                <Link to="/login" style={{ color: 'var(--primary)' }}>{isKo ? '로그인' : 'Login'}</Link>
                {isKo ? ' 후 댓글을 작성할 수 있습니다.' : ' to write a comment.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
