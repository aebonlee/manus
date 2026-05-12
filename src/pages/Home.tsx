import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LEARNING_PATHS } from '../config/site';
import SEOHead from '../components/SEOHead';
import HeroBackground from '../components/HeroBackground';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  const carouselSlides = [
    {
      title: isKo ? '세계 최초 자율형 AI 에이전트' : "World's First Autonomous AI Agent",
      description: isKo
        ? 'Manus AI는 사용자의 지시만으로 웹 검색, 코드 작성, 데이터 분석까지 스스로 판단하고 실행하는 자율형 AI 에이전트입니다.'
        : 'Manus AI is an autonomous AI agent that independently searches the web, writes code, and analyzes data based on your instructions.',
    },
    {
      title: isKo ? 'Web App Builder로 앱 개발' : 'Build Apps with Web App Builder',
      description: isKo
        ? '코딩 없이 웹사이트와 데이터베이스를 생성하고, Stripe 결제까지 연동하세요. Manus가 전체 개발 과정을 자동화합니다.'
        : 'Create websites and databases without coding, integrate Stripe payments. Manus automates the entire development process.',
    },
    {
      title: isKo ? 'ChatGPT, Claude와의 차별점' : 'How Manus Differs from ChatGPT & Claude',
      description: isKo
        ? '대화형 AI와 달리 Manus는 실제 작업을 자율적으로 수행합니다. 브라우저 조작, 파일 생성, 코드 실행까지 직접 처리합니다.'
        : 'Unlike conversational AI, Manus autonomously performs real tasks — browser control, file creation, and code execution.',
    },
  ];

  return (
    <>
      <SEOHead path="/" />

      {/* Hero */}
      <section className="hero">
        <HeroBackground />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-robot" />
            {t('hero.badge')}
          </div>
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Link to="/manus-basics" className="btn btn-primary-large">{t('hero.cta')}</Link>
            <Link to="/core-features" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              {t('hero.ctaSecondary')}
            </Link>
          </div>
          <HeroCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="features-grid">
            <FeatureCard icon="fa-bolt" title={t('features.autonomous.title')} description={t('features.autonomous.desc')} />
            <FeatureCard icon="fa-globe" title={t('features.web.title')} description={t('features.web.desc')} />
            <FeatureCard icon="fa-code" title={t('features.code.title')} description={t('features.code.desc')} />
            <FeatureCard icon="fa-images" title={t('features.multimodal.title')} description={t('features.multimodal.desc')} />
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="paths-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.pathsTitle')}</h2>
            <p className="section-subtitle">{t('home.pathsSubtitle')}</p>
          </div>
          <div className="paths-grid">
            {LEARNING_PATHS.map(path => (
              <Link key={path.id} to={path.path} className="path-card">
                <div className="path-card-header">
                  <div className="path-icon" style={{ background: path.color }}>
                    <i className={`fa-solid ${path.icon}`} />
                  </div>
                  <h3 className="path-name">{isKo ? path.nameKo : path.nameEn}</h3>
                </div>
                <p className="path-desc">{isKo ? path.descKo : path.descEn}</p>
                <div className="path-topics">
                  {path.topics.map((topic, i) => (
                    <span key={i} className="path-topic">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">{t('stats.guides')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">{t('stats.topics')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">{t('stats.categories')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.workflowTitle')}</h2>
            <p className="section-subtitle">{t('home.workflowSubtitle')}</p>
          </div>
          <div className="workflow-grid">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="workflow-step">
                <div className="workflow-number">{n}</div>
                <h3 className="workflow-title">{t(`home.step${n}`)}</h3>
                <p className="workflow-desc">{t(`home.step${n}desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-description">{t('cta.description')}</p>
          <Link to="/manus-basics" className="btn btn-primary-large">{t('cta.button')}</Link>
        </div>
      </section>
    </>
  );
}
