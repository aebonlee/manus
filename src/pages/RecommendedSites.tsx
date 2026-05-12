import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const SITES = [
  {
    icon: 'fa-building',
    nameKo: 'DreamIT Biz (본사이트)',
    nameEn: 'DreamIT Biz (Main)',
    descKo: 'DreamIT Biz의 메인 포털 사이트입니다. IT 서비스, 교육, 출판, 컨설팅 등 모든 서비스를 안내합니다.',
    descEn: 'Main portal of DreamIT Biz. Covers IT services, education, publishing, consulting, and more.',
    url: 'https://www.dreamitbiz.com',
    color: '#0046C8',
  },
  {
    icon: 'fa-message',
    nameKo: 'ChatGPT 학습 플랫폼',
    nameEn: 'ChatGPT Learning Platform',
    descKo: 'ChatGPT의 모든 기능을 학습하는 종합 플랫폼입니다. 기초부터 API 개발까지 체계적으로 학습하세요.',
    descEn: 'A comprehensive platform for learning ChatGPT. From basics to API development.',
    url: 'https://chatgpt.dreamitbiz.com',
    color: '#10A37F',
  },
  {
    icon: 'fa-brain',
    nameKo: 'Claude AI 학습 플랫폼',
    nameEn: 'Claude AI Learning Platform',
    descKo: 'Anthropic의 Claude AI를 학습하는 플랫폼입니다. 프롬프트 엔지니어링, API 활용법을 배웁니다.',
    descEn: 'A platform for learning Anthropic\'s Claude AI. Prompt engineering and API usage.',
    url: 'https://claude-ai.dreamitbiz.com',
    color: '#D97706',
  },
  {
    icon: 'fa-chart-simple',
    nameKo: 'AHP 연구 플랫폼',
    nameEn: 'AHP Research Platform',
    descKo: '의사결정 분석 기법인 AHP(Analytic Hierarchy Process)를 학습하고 실습할 수 있는 플랫폼입니다.',
    descEn: 'A platform for learning and practicing AHP (Analytic Hierarchy Process) decision analysis.',
    url: 'https://ahp-basic.dreamitbiz.com',
    color: '#8B5CF6',
  },
  {
    icon: 'fa-clipboard-check',
    nameKo: '핵심역량 자가측정',
    nameEn: 'Core Competency Self-Assessment',
    descKo: '개인의 핵심역량을 자가 측정하고 발전 방향을 설정할 수 있는 온라인 도구입니다.',
    descEn: 'An online tool for self-assessing core competencies and setting development goals.',
    url: 'https://competency.dreamitbiz.com',
    color: '#EC4899',
  },
  {
    icon: 'fa-laptop-code',
    nameKo: '코딩 학습 플랫폼',
    nameEn: 'Coding Learning Platform',
    descKo: 'Python, JavaScript, React 등 다양한 프로그래밍 언어와 프레임워크를 학습하는 플랫폼입니다.',
    descEn: 'A platform for learning programming languages and frameworks like Python, JavaScript, React.',
    url: 'https://coding.dreamitbiz.com',
    color: '#10B981',
  },
];

export default function RecommendedSites() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <SEOHead
        title={isKo ? '추천 사이트 | Manus AI Master' : 'Recommended Sites | Manus AI Master'}
        description={isKo ? 'DreamIT Biz 패밀리 사이트 추천 목록' : 'DreamIT Biz family site recommendations'}
      />

      <section className="page-header">
        <div className="container">
          <h1>{isKo ? '추천 사이트' : 'Recommended Sites'}</h1>
          <p className="page-desc">
            {isKo
              ? 'DreamIT Biz의 다양한 학습 플랫폼과 서비스를 만나보세요.'
              : 'Explore various learning platforms and services by DreamIT Biz.'}
          </p>
        </div>
      </section>

      <section className="recommended-section">
        <div className="container">
          <div className="recommended-grid">
            {SITES.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="recommended-card"
              >
                <div className="recommended-card-icon" style={{ background: site.color }}>
                  <i className={`fa-solid ${site.icon}`} />
                </div>
                <h3 className="recommended-card-title">
                  {isKo ? site.nameKo : site.nameEn}
                </h3>
                <p className="recommended-card-desc">
                  {isKo ? site.descKo : site.descEn}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
