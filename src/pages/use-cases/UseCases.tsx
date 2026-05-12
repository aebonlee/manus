import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'business', icon: 'fa-building', ko: '비즈니스 & 금융', en: 'Business & Finance' },
  { id: 'marketing', icon: 'fa-bullhorn', ko: '마케팅 & SEO', en: 'Marketing & SEO' },
  { id: 'hr', icon: 'fa-users', ko: 'HR & 채용', en: 'HR & Recruitment' },
  { id: 'data', icon: 'fa-chart-line', ko: '데이터 분석', en: 'Data Analysis' },
  { id: 'research', icon: 'fa-microscope', ko: '연구 & 보고서', en: 'Research & Reports' },
  { id: 'creative', icon: 'fa-palette', ko: '창작 & 콘텐츠', en: 'Creative & Content' },
];

export default function UseCases() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('business');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={isKo ? '실전 활용 사례 | Manus AI Master' : 'Use Cases | Manus AI Master'}
        description={isKo ? 'Manus AI의 실전 활용 사례를 분야별로 알아봅니다. 비즈니스, 마케팅, HR, 데이터 분석, 연구, 창작 등 다양한 분야의 활용법을 소개합니다.' : 'Explore real-world use cases for Manus AI across various fields including business, marketing, HR, data analysis, research, and creative content.'}
      />
      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {SECTIONS.map(section => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="guide-content">
            {activeSection === 'business' && <BusinessSection isKo={isKo} />}
            {activeSection === 'marketing' && <MarketingSection isKo={isKo} />}
            {activeSection === 'hr' && <HRSection isKo={isKo} />}
            {activeSection === 'data' && <DataSection isKo={isKo} />}
            {activeSection === 'research' && <ResearchSection isKo={isKo} />}
            {activeSection === 'creative' && <CreativeSection isKo={isKo} />}

            <div className="guide-section-nav">
              <button onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                {currentIndex > 0 ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en) : ''}
              </button>
              <button onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                {currentIndex < SECTIONS.length - 1 ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en) : ''}
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  BusinessSection                                                         */
/* ────────────────────────────────────────────────────────────────────────── */
function BusinessSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '비즈니스 & 금융' : 'Business & Finance'}</h1>
        <p>{isKo ? 'Manus AI를 활용하여 비즈니스 리서치, 재무 분석, 사업 기획 등 업무를 자동화하는 방법을 알아봅니다.' : 'Learn how to automate business research, financial analysis, and business planning with Manus AI.'}</p>
      </div>

      <h2>{isKo ? '1. 시장 조사 자동화' : '1. Automated Market Research'}</h2>
      <p>{isKo ? 'Manus AI는 웹 브라우저를 직접 제어하여 대량의 시장 데이터를 자동으로 수집하고 분석합니다. 경쟁사 분석, 산업 트렌드 리서치를 몇 분 만에 완료할 수 있습니다.' : 'Manus AI directly controls web browsers to automatically collect and analyze large amounts of market data. Competitor analysis and industry trend research can be completed in minutes.'}</p>
      <div className="example-box">
        <strong>{isKo ? '주요 기능' : 'Key Features'}</strong><br />
        {isKo ? '- 경쟁사 웹사이트 분석: 제품, 가격, 포지셔닝 자동 비교' : '- Competitor website analysis: automatic product, pricing, positioning comparison'}<br />
        {isKo ? '- 산업 트렌드 리서치: 뉴스, 보고서, 논문 자동 수집 및 요약' : '- Industry trend research: automatic collection and summarization of news, reports, papers'}<br />
        {isKo ? '- SWOT 분석: 수집된 데이터 기반 자동 SWOT 매트릭스 생성' : '- SWOT analysis: automatic SWOT matrix generation based on collected data'}<br />
        {isKo ? '- 시장 규모 추정: 공개 데이터 소스에서 시장 규모 데이터 수집 및 계산' : '- Market sizing: collecting and calculating market size data from public sources'}
      </div>

      <h2>{isKo ? '2. 재무 분석' : '2. Financial Analysis'}</h2>
      <p>{isKo ? '주식 데이터 수집, 재무제표 분석, 투자 보고서 작성까지 재무 분석의 전체 파이프라인을 자동화합니다.' : 'Automate the entire financial analysis pipeline from stock data collection to financial statement analysis and investment report writing.'}</p>
      <ul>
        <li>{isKo ? '주식 데이터 수집: 실시간 주가, 거래량, 시가총액 등 자동 수집' : 'Stock data collection: automatic gathering of real-time prices, volume, market cap, etc.'}</li>
        <li>{isKo ? '재무제표 분석: 매출, 영업이익, 부채비율 등 핵심 지표 자동 계산' : 'Financial statement analysis: automatic calculation of key metrics like revenue, operating profit, debt ratio'}</li>
        <li>{isKo ? '투자 보고서 작성: 분석 결과를 기반으로 전문 투자 보고서 자동 생성' : 'Investment report writing: automatic generation of professional investment reports based on analysis'}</li>
        <li>{isKo ? '포트폴리오 분석: 자산 배분, 리스크 분석, 수익률 시뮬레이션' : 'Portfolio analysis: asset allocation, risk analysis, return simulation'}</li>
      </ul>

      <h2>{isKo ? '3. 사업 계획서 작성' : '3. Business Plan Writing'}</h2>
      <p>{isKo ? '시장 규모 조사부터 분석, 문서 자동 생성까지 사업 계획서 작성의 전 과정을 Manus AI가 지원합니다.' : 'Manus AI supports the entire business plan writing process from market sizing to analysis and automated document generation.'}</p>
      <div className="example-box">
        <strong>{isKo ? '작업 흐름' : 'Workflow'}</strong><br />
        {isKo ? 'Step 1: 시장 규모 조사 — 관련 산업 보고서 및 통계 자동 수집' : 'Step 1: Market sizing — automatic collection of industry reports and statistics'}<br />
        {isKo ? 'Step 2: 경쟁 환경 분석 — 주요 경쟁사 및 시장 포지셔닝 분석' : 'Step 2: Competitive landscape — analysis of key competitors and market positioning'}<br />
        {isKo ? 'Step 3: 수익 모델 설계 — 가격 전략, 매출 예측 모델 자동 생성' : 'Step 3: Revenue model design — automatic pricing strategy and revenue forecast generation'}<br />
        {isKo ? 'Step 4: 문서 자동 생성 — 전문 사업 계획서 형식으로 자동 포맷팅' : 'Step 4: Document generation — automatic formatting into professional business plan format'}
      </div>

      <h2>{isKo ? '4. CRM 데이터 정리' : '4. CRM Data Organization'}</h2>
      <p>{isKo ? '고객 데이터를 분석하고 세그먼테이션하여 마케팅과 영업 전략을 최적화합니다.' : 'Analyze and segment customer data to optimize marketing and sales strategies.'}</p>
      <ul>
        <li>{isKo ? '고객 데이터 클리닝: 중복 제거, 형식 표준화, 누락 데이터 보완' : 'Customer data cleaning: deduplication, format standardization, missing data completion'}</li>
        <li>{isKo ? '세그먼테이션: RFM 분석, 구매 패턴 기반 고객 분류' : 'Segmentation: RFM analysis, purchase pattern-based customer classification'}</li>
        <li>{isKo ? '고객 인사이트 리포트: 세그먼트별 특성 분석 및 전략 제안' : 'Customer insight report: segment-specific analysis and strategy recommendations'}</li>
      </ul>

      <h2>{isKo ? '5. 예시 프롬프트' : '5. Example Prompt'}</h2>
      <div className="prompt-example">{isKo
        ? `"2025년 한국 AI 시장 규모와 주요 플레이어를 분석한 보고서를 만들어줘.

포함할 내용:
1. 전체 시장 규모 및 성장률
2. 주요 플레이어 Top 10 (매출, 직원 수, 주요 제품)
3. 세부 분야별 시장 점유율 (생성AI, 머신러닝, 컴퓨터비전 등)
4. 2026-2028 시장 전망
5. 한국 시장만의 특성 및 글로벌 비교

출력 형식: PDF 보고서 (차트, 표 포함)"`
        : `"Create a report analyzing the 2025 Korean AI market size and major players.

Include:
1. Total market size and growth rate
2. Top 10 major players (revenue, employees, key products)
3. Market share by sub-segment (Generative AI, ML, Computer Vision, etc.)
4. 2026-2028 market outlook
5. Korea-specific characteristics and global comparison

Output format: PDF report (with charts and tables)"`}</div>

      <div className="tip-box">
        <strong>{isKo ? '팁' : 'Tip'}</strong>: {isKo ? '비즈니스 분석 시 Manus AI에게 출처(Source)를 명시하도록 요청하면 보고서의 신뢰도를 높일 수 있습니다. "모든 데이터에 출처 URL을 포함해줘"와 같은 지시를 추가하세요.' : 'When doing business analysis, asking Manus AI to cite sources can increase report credibility. Add instructions like "Include source URLs for all data."'}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  MarketingSection                                                        */
/* ────────────────────────────────────────────────────────────────────────── */
function MarketingSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '마케팅 & SEO' : 'Marketing & SEO'}</h1>
        <p>{isKo ? 'Manus AI를 활용한 마케팅 전략 수립, SEO 최적화, 콘텐츠 마케팅 자동화 방법을 알아봅니다.' : 'Learn how to build marketing strategies, optimize SEO, and automate content marketing with Manus AI.'}</p>
      </div>

      <h2>{isKo ? '1. SEO 키워드 리서치' : '1. SEO Keyword Research'}</h2>
      <p>{isKo ? 'Manus AI가 검색 엔진 데이터를 분석하여 최적의 키워드 전략을 수립합니다.' : 'Manus AI analyzes search engine data to establish optimal keyword strategies.'}</p>
      <ul>
        <li>{isKo ? '검색량 분석: 타겟 키워드의 월간 검색량 및 트렌드 파악' : 'Search volume analysis: monthly search volume and trend identification for target keywords'}</li>
        <li>{isKo ? '경쟁도 분석: 키워드별 경쟁 강도 및 상위 랭킹 사이트 분석' : 'Competition analysis: keyword competition intensity and top-ranking site analysis'}</li>
        <li>{isKo ? '관련 키워드 확장: 시드 키워드에서 롱테일 키워드 자동 도출' : 'Related keyword expansion: automatic long-tail keyword derivation from seed keywords'}</li>
        <li>{isKo ? '키워드 클러스터링: 의미적으로 유사한 키워드 그룹핑 및 우선순위 설정' : 'Keyword clustering: semantic grouping and prioritization of similar keywords'}</li>
      </ul>

      <h2>{isKo ? '2. 콘텐츠 마케팅' : '2. Content Marketing'}</h2>
      <p>{isKo ? '블로그 포스트 자동 생성부터 SNS 콘텐츠 기획까지 콘텐츠 마케팅 전반을 자동화합니다.' : 'Automate the entire content marketing process from blog post generation to social media content planning.'}</p>
      <div className="example-box">
        <strong>{isKo ? '블로그 포스트 자동 생성' : 'Automated Blog Post Generation'}</strong><br />
        {isKo ? '- 키워드 리서치 결과를 기반으로 SEO 최적화된 글 작성' : '- Write SEO-optimized articles based on keyword research results'}<br />
        {isKo ? '- 메타 디스크립션, 제목 태그, 헤딩 구조 자동 최적화' : '- Automatic optimization of meta descriptions, title tags, heading structure'}<br />
        {isKo ? '- 내부 링크 구조 제안' : '- Internal link structure suggestions'}<br /><br />
        <strong>{isKo ? 'SNS 콘텐츠 기획' : 'Social Media Content Planning'}</strong><br />
        {isKo ? '- 플랫폼별(인스타그램, 트위터, 링크드인) 맞춤 콘텐츠 생성' : '- Platform-specific content creation (Instagram, Twitter, LinkedIn)'}<br />
        {isKo ? '- 해시태그 리서치 및 추천' : '- Hashtag research and recommendations'}<br />
        {isKo ? '- 콘텐츠 캘린더 자동 생성' : '- Automatic content calendar generation'}
      </div>

      <h2>{isKo ? '3. 경쟁사 마케팅 분석' : '3. Competitor Marketing Analysis'}</h2>
      <p>{isKo ? '경쟁사의 마케팅 전략을 체계적으로 분석하여 차별화 포인트를 발견합니다.' : 'Systematically analyze competitor marketing strategies to discover differentiation points.'}</p>
      <ul>
        <li>{isKo ? '웹사이트 분석: UI/UX, 콘텐츠 전략, 기술 스택 분석' : 'Website analysis: UI/UX, content strategy, tech stack analysis'}</li>
        <li>{isKo ? '광고 전략 파악: 검색 광고, 디스플레이 광고, 소셜 광고 모니터링' : 'Ad strategy identification: search ads, display ads, social ads monitoring'}</li>
        <li>{isKo ? '소셜 미디어 분석: 팔로워 수, 참여율, 콘텐츠 유형 비교' : 'Social media analysis: follower count, engagement rate, content type comparison'}</li>
        <li>{isKo ? '차별화 전략 도출: 분석 결과 기반 자사 마케팅 전략 제안' : 'Differentiation strategy: marketing strategy recommendations based on analysis'}</li>
      </ul>

      <h2>{isKo ? '4. 이메일 마케팅 캠페인' : '4. Email Marketing Campaigns'}</h2>
      <p>{isKo ? '대상자 세그멘테이션부터 이메일 템플릿 생성까지 이메일 마케팅 전 과정을 지원합니다.' : 'Support the entire email marketing process from audience segmentation to email template creation.'}</p>
      <div className="example-box">
        <strong>{isKo ? '작업 흐름' : 'Workflow'}</strong><br />
        {isKo ? '1. 대상자 세그멘테이션: 행동 데이터 기반 타겟 그룹 분류' : '1. Audience segmentation: target group classification based on behavioral data'}<br />
        {isKo ? '2. 이메일 템플릿 생성: 세그먼트별 맞춤 이메일 디자인 및 카피' : '2. Email template creation: segment-specific custom email design and copy'}<br />
        {isKo ? '3. 제목 라인 최적화: A/B 테스트용 제목 라인 다양하게 생성' : '3. Subject line optimization: generate diverse subject lines for A/B testing'}<br />
        {isKo ? '4. 발송 시점 최적화: 세그먼트별 최적 발송 시간 분석' : '4. Send time optimization: analyze optimal send times per segment'}
      </div>

      <h2>{isKo ? '5. A/B 테스트 설계' : '5. A/B Test Design'}</h2>
      <p>{isKo ? 'Manus AI가 실험 설계부터 결과 분석까지 A/B 테스트의 전 과정을 자동화합니다.' : 'Manus AI automates the entire A/B testing process from experiment design to result analysis.'}</p>
      <ul>
        <li>{isKo ? '실험 설계: 가설 수립, 변수 정의, 샘플 사이즈 계산' : 'Experiment design: hypothesis formulation, variable definition, sample size calculation'}</li>
        <li>{isKo ? '변이 생성: 랜딩 페이지, CTA, 카피 등 다양한 변이 자동 생성' : 'Variation generation: automatic creation of landing page, CTA, copy variations'}</li>
        <li>{isKo ? '결과 분석: 통계적 유의성 검증, 승자 판정, 인사이트 도출' : 'Result analysis: statistical significance testing, winner determination, insight extraction'}</li>
      </ul>

      <div className="tip-box">
        <strong>{isKo ? '팁' : 'Tip'}</strong>: {isKo ? 'SEO 키워드 리서치 시 "검색량 상위 20개 키워드를 표로 정리하고 각각의 경쟁도, 예상 트래픽, 추천 콘텐츠 유형을 함께 분석해줘"와 같이 구체적인 형식을 지정하면 더 실용적인 결과를 얻을 수 있습니다.' : 'For SEO keyword research, specifying a concrete format like "Organize the top 20 keywords by search volume in a table with competition level, estimated traffic, and recommended content type" yields more practical results.'}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  HRSection                                                               */
/* ────────────────────────────────────────────────────────────────────────── */
function HRSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'HR & 채용' : 'HR & Recruitment'}</h1>
        <p>{isKo ? 'Manus AI를 활용하여 채용, 인사관리, 조직 운영의 효율성을 극대화하는 방법을 소개합니다.' : 'Learn how to maximize efficiency in recruitment, HR management, and organizational operations with Manus AI.'}</p>
      </div>

      <h2>{isKo ? '1. 채용 프로세스 자동화' : '1. Recruitment Process Automation'}</h2>
      <p>{isKo ? '채용 공고 작성부터 이력서 스크리닝 기준 설정까지 채용 프로세스를 체계적으로 자동화합니다.' : 'Systematically automate the recruitment process from job posting creation to resume screening criteria setup.'}</p>
      <div className="example-box">
        <strong>{isKo ? '채용 공고 자동 작성' : 'Automated Job Posting'}</strong><br />
        {isKo ? '- 직무 분석 기반 JD(Job Description) 자동 생성' : '- Automatic JD (Job Description) generation based on job analysis'}<br />
        {isKo ? '- 필수/우대 자격요건 체계적 정리' : '- Systematic organization of required/preferred qualifications'}<br />
        {isKo ? '- 경쟁사 채용 공고 벤치마킹 및 차별화 포인트 반영' : '- Competitor job posting benchmarking and differentiation'}<br /><br />
        <strong>{isKo ? '이력서 스크리닝 기준 설정' : 'Resume Screening Criteria'}</strong><br />
        {isKo ? '- 직무별 핵심 역량 기반 평가 매트릭스 자동 생성' : '- Automatic evaluation matrix generation based on core competencies per role'}<br />
        {isKo ? '- 스크리닝 체크리스트 및 점수 산정 기준 제공' : '- Screening checklist and scoring criteria generation'}<br />
        {isKo ? '- 블라인드 채용 가이드라인 적용' : '- Blind recruitment guideline application'}
      </div>

      <h2>{isKo ? '2. 면접 질문 생성' : '2. Interview Question Generation'}</h2>
      <p>{isKo ? '직무별 맞춤 면접 질문 리스트를 자동으로 생성합니다.' : 'Automatically generate role-specific customized interview question lists.'}</p>
      <ul>
        <li>{isKo ? '기술 면접: 직무 관련 기술 역량을 평가하는 질문 세트' : 'Technical interview: question sets evaluating job-related technical competencies'}</li>
        <li>{isKo ? '인성 면접: STAR 기법 기반 행동 면접 질문' : 'Behavioral interview: STAR method-based behavioral interview questions'}</li>
        <li>{isKo ? '상황 면접: 직무 관련 시나리오 기반 문제 해결 능력 평가' : 'Situational interview: scenario-based problem-solving assessment'}</li>
        <li>{isKo ? '컬처핏 면접: 조직 문화 적합성을 평가하는 질문' : 'Culture fit interview: questions assessing organizational culture fit'}</li>
        <li>{isKo ? '평가 루브릭: 각 질문에 대한 채점 기준 및 모범 답변 가이드' : 'Evaluation rubric: scoring criteria and model answer guide for each question'}</li>
      </ul>

      <h2>{isKo ? '3. 급여 벤치마킹' : '3. Salary Benchmarking'}</h2>
      <p>{isKo ? '시장 급여 데이터를 조사하고 비교 분석 보고서를 자동 생성합니다.' : 'Research market salary data and automatically generate comparative analysis reports.'}</p>
      <ul>
        <li>{isKo ? '시장 급여 조사: 직무별, 경력별, 지역별 급여 데이터 수집' : 'Market salary research: salary data collection by role, experience, and region'}</li>
        <li>{isKo ? '비교 분석: 자사 급여 수준과 시장 평균/상위 기업 비교' : 'Comparative analysis: compare company salary levels with market average/top companies'}</li>
        <li>{isKo ? '보상 패키지 설계: 기본급, 성과급, 복리후생 포함 종합 패키지 제안' : 'Compensation package design: comprehensive package proposal including base pay, bonuses, benefits'}</li>
      </ul>

      <h2>{isKo ? '4. 직원 온보딩 자료' : '4. Employee Onboarding Materials'}</h2>
      <p>{isKo ? '신입 직원을 위한 교육 자료, 체크리스트, 가이드 문서를 자동으로 생성합니다.' : 'Automatically generate training materials, checklists, and guide documents for new employees.'}</p>
      <div className="example-box">
        <strong>{isKo ? '온보딩 자료 구성' : 'Onboarding Material Structure'}</strong><br />
        {isKo ? '- 교육 자료: 회사 소개, 조직 구조, 주요 시스템 사용법 가이드' : '- Training materials: company introduction, organizational structure, key system usage guides'}<br />
        {isKo ? '- 체크리스트: 첫 주/첫 달/3개월 온보딩 체크리스트' : '- Checklists: first week/first month/3-month onboarding checklists'}<br />
        {isKo ? '- 가이드 문서: 부서별 업무 프로세스, 커뮤니케이션 가이드라인' : '- Guide documents: departmental work processes, communication guidelines'}<br />
        {isKo ? '- 멘토링 매칭: 신입 직원-멘토 매칭 기준 및 프로그램 설계' : '- Mentoring matching: new employee-mentor matching criteria and program design'}
      </div>

      <h2>{isKo ? '5. 조직문화 서베이 분석' : '5. Organizational Culture Survey Analysis'}</h2>
      <p>{isKo ? '설문 결과 데이터를 분석하고 실행 가능한 인사이트를 도출합니다.' : 'Analyze survey result data and derive actionable insights.'}</p>
      <ul>
        <li>{isKo ? '데이터 분석: 설문 응답 데이터 정리, 통계 분석, 트렌드 파악' : 'Data analysis: survey response data organization, statistical analysis, trend identification'}</li>
        <li>{isKo ? '인사이트 도출: 핵심 이슈 식별, 부서별/직급별 비교 분석' : 'Insight extraction: key issue identification, department/level comparative analysis'}</li>
        <li>{isKo ? '개선 제안: 데이터 기반 구체적 개선 방안 및 실행 로드맵 제시' : 'Improvement suggestions: data-driven specific improvement plans and execution roadmap'}</li>
        <li>{isKo ? '보고서 생성: 경영진용 요약 보고서 및 상세 분석 보고서 자동 작성' : 'Report generation: automatic executive summary and detailed analysis report creation'}</li>
      </ul>

      <div className="tip-box">
        <strong>{isKo ? '팁' : 'Tip'}</strong>: {isKo ? '채용 관련 자료 생성 시 "노동법 및 채용 관련 법규를 준수하는 내용으로 작성해줘"라는 조건을 추가하면 법적 리스크를 줄일 수 있습니다.' : 'When generating recruitment materials, adding the condition "Write in compliance with labor laws and recruitment regulations" can reduce legal risks.'}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  DataSection                                                             */
/* ────────────────────────────────────────────────────────────────────────── */
function DataSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '데이터 분석' : 'Data Analysis'}</h1>
        <p>{isKo ? 'Manus AI의 코드 실행 능력을 활용하여 대량 데이터 처리, 통계 분석, 시각화, 보고서 자동화를 수행하는 방법을 알아봅니다.' : 'Learn how to leverage Manus AI\'s code execution capabilities for large-scale data processing, statistical analysis, visualization, and report automation.'}</p>
      </div>

      <h2>{isKo ? '1. 대량 데이터 정리' : '1. Large-scale Data Organization'}</h2>
      <p>{isKo ? 'CSV, Excel 등 다양한 형식의 데이터 파일을 자동으로 처리하고 정리합니다.' : 'Automatically process and organize data files in various formats such as CSV and Excel.'}</p>
      <ul>
        <li>{isKo ? 'CSV/Excel 파일 처리: 대용량 파일 읽기, 병합, 분할' : 'CSV/Excel file processing: reading, merging, splitting large files'}</li>
        <li>{isKo ? '데이터 클리닝: 중복 제거, 결측값 처리, 이상치 탐지 및 제거' : 'Data cleaning: deduplication, missing value handling, outlier detection and removal'}</li>
        <li>{isKo ? '형식 변환: 데이터 타입 변환, 날짜 형식 표준화, 인코딩 처리' : 'Format conversion: data type conversion, date format standardization, encoding handling'}</li>
        <li>{isKo ? '데이터 통합: 여러 소스의 데이터를 키 기반으로 병합 및 정리' : 'Data integration: key-based merging and organization of data from multiple sources'}</li>
      </ul>

      <h2>{isKo ? '2. 통계 분석' : '2. Statistical Analysis'}</h2>
      <p>{isKo ? 'Python 코드를 직접 실행하여 다양한 통계 분석을 자동으로 수행합니다.' : 'Automatically perform various statistical analyses by directly executing Python code.'}</p>
      <div className="example-box">
        <strong>{isKo ? '지원하는 분석 유형' : 'Supported Analysis Types'}</strong><br />
        {isKo ? '- 기술통계: 평균, 중앙값, 표준편차, 분포 분석' : '- Descriptive statistics: mean, median, standard deviation, distribution analysis'}<br />
        {isKo ? '- 상관분석: 변수 간 관계 파악, 상관 매트릭스 생성' : '- Correlation analysis: identifying variable relationships, correlation matrix generation'}<br />
        {isKo ? '- 회귀분석: 선형/다중 회귀, 예측 모델 구축' : '- Regression analysis: linear/multiple regression, predictive model building'}<br />
        {isKo ? '- 가설 검정: t-test, ANOVA, 카이제곱 검정 등' : '- Hypothesis testing: t-test, ANOVA, chi-square test, etc.'}<br />
        {isKo ? '- 시계열 분석: 트렌드, 계절성, 예측 분석' : '- Time series analysis: trend, seasonality, forecasting'}
      </div>

      <h2>{isKo ? '3. 시각화' : '3. Visualization'}</h2>
      <p>{isKo ? '분석 결과를 직관적인 차트, 대시보드, 인포그래픽으로 자동 변환합니다.' : 'Automatically convert analysis results into intuitive charts, dashboards, and infographics.'}</p>
      <ul>
        <li>{isKo ? '차트 생성: 막대, 라인, 파이, 산점도, 히트맵 등 다양한 차트' : 'Chart creation: bar, line, pie, scatter, heatmap and various chart types'}</li>
        <li>{isKo ? '대시보드: 여러 지표를 한 눈에 볼 수 있는 종합 대시보드 생성' : 'Dashboards: comprehensive dashboard creation showing multiple metrics at a glance'}</li>
        <li>{isKo ? '인포그래픽: 데이터 스토리텔링을 위한 시각적 인포그래픽 자동 생성' : 'Infographics: automatic visual infographic generation for data storytelling'}</li>
        <li>{isKo ? '인터랙티브 차트: HTML 기반 인터랙티브 시각화 (Plotly, D3.js)' : 'Interactive charts: HTML-based interactive visualizations (Plotly, D3.js)'}</li>
      </ul>

      <h2>{isKo ? '4. 웹 스크래핑' : '4. Web Scraping'}</h2>
      <p>{isKo ? 'Manus AI가 웹 브라우저를 직접 제어하여 대량의 데이터를 자동으로 수집하고 정리합니다.' : 'Manus AI directly controls web browsers to automatically collect and organize large amounts of data.'}</p>
      <div className="example-box">
        <strong>{isKo ? '주요 기능' : 'Key Features'}</strong><br />
        {isKo ? '- 구조화된 데이터 수집: 테이블, 리스트, 제품 정보 등 자동 추출' : '- Structured data collection: automatic extraction of tables, lists, product info, etc.'}<br />
        {isKo ? '- 멀티 페이지 크롤링: 페이지네이션 자동 처리하여 전체 데이터 수집' : '- Multi-page crawling: automatic pagination handling for complete data collection'}<br />
        {isKo ? '- 데이터 정규화: 수집된 데이터를 일관된 형식으로 자동 변환' : '- Data normalization: automatic conversion of collected data into consistent format'}<br />
        {isKo ? '- 결과 내보내기: CSV, Excel, JSON 등 원하는 형식으로 출력' : '- Export results: output in desired format such as CSV, Excel, JSON'}
      </div>

      <h2>{isKo ? '5. 보고서 자동화' : '5. Report Automation'}</h2>
      <p>{isKo ? '데이터 수집부터 분석, 시각화, 최종 보고서(PDF) 생성까지 원스톱으로 자동화합니다.' : 'Automate the entire pipeline from data collection to analysis, visualization, and final report (PDF) generation in one stop.'}</p>
      <div className="example-box">
        <strong>{isKo ? '원스톱 파이프라인' : 'One-stop Pipeline'}</strong><br />
        {isKo ? 'Step 1: 데이터 수집 — 웹 스크래핑 또는 파일 업로드' : 'Step 1: Data collection — web scraping or file upload'}<br />
        {isKo ? 'Step 2: 데이터 클리닝 — 자동 전처리 및 정제' : 'Step 2: Data cleaning — automatic preprocessing and refinement'}<br />
        {isKo ? 'Step 3: 분석 — 통계 분석 및 인사이트 도출' : 'Step 3: Analysis — statistical analysis and insight extraction'}<br />
        {isKo ? 'Step 4: 시각화 — 차트 및 그래프 자동 생성' : 'Step 4: Visualization — automatic chart and graph generation'}<br />
        {isKo ? 'Step 5: 보고서 — PDF 형식의 전문 보고서 자동 생성' : 'Step 5: Report — automatic professional PDF report generation'}
      </div>

      <div className="tip-box">
        <strong>{isKo ? '팁' : 'Tip'}</strong>: {isKo ? '데이터 분석 요청 시 "Python 코드로 분석하고 결과를 시각화해줘"라고 명시하면 Manus AI가 코드를 직접 실행하여 정확한 결과를 제공합니다. 단순 텍스트 응답보다 훨씬 신뢰도 높은 결과를 얻을 수 있습니다.' : 'When requesting data analysis, specifying "Analyze with Python code and visualize the results" prompts Manus AI to execute code directly for accurate results, far more reliable than simple text responses.'}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  ResearchSection                                                         */
/* ────────────────────────────────────────────────────────────────────────── */
function ResearchSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '연구 & 보고서' : 'Research & Reports'}</h1>
        <p>{isKo ? 'Manus AI를 활용하여 학술 리서치, 산업 보고서, 기술 보고서 등 다양한 연구 작업을 자동화하는 방법을 알아봅니다.' : 'Learn how to automate various research tasks including academic research, industry reports, and technical reports with Manus AI.'}</p>
      </div>

      <h2>{isKo ? '1. 학술 리서치' : '1. Academic Research'}</h2>
      <p>{isKo ? '논문 검색부터 문헌 리뷰 요약까지 학술 연구의 기초 작업을 자동화합니다.' : 'Automate foundational academic research tasks from paper search to literature review summarization.'}</p>
      <ul>
        <li>{isKo ? '논문 검색: 키워드 기반 관련 논문 자동 검색 및 메타데이터 수집' : 'Paper search: automatic keyword-based paper search and metadata collection'}</li>
        <li>{isKo ? '문헌 리뷰 요약: 다수의 논문을 읽고 핵심 내용을 구조적으로 요약' : 'Literature review summary: reading multiple papers and structurally summarizing key content'}</li>
        <li>{isKo ? '연구 동향 분석: 특정 분야의 연구 트렌드, 주요 연구 그룹, 핫 토픽 파악' : 'Research trend analysis: identifying research trends, major research groups, hot topics in specific fields'}</li>
        <li>{isKo ? '참고문헌 정리: APA, IEEE, MLA 등 다양한 인용 형식으로 자동 정리' : 'Reference management: automatic formatting in various citation styles (APA, IEEE, MLA, etc.)'}</li>
      </ul>

      <h2>{isKo ? '2. 산업 보고서' : '2. Industry Reports'}</h2>
      <p>{isKo ? '시장 조사, 트렌드 분석, 전망 보고서를 전문적인 형식으로 자동 생성합니다.' : 'Automatically generate market research, trend analysis, and outlook reports in professional format.'}</p>
      <div className="example-box">
        <strong>{isKo ? '보고서 구성 요소' : 'Report Components'}</strong><br />
        {isKo ? '- Executive Summary: 핵심 요약 (1-2페이지)' : '- Executive Summary: key highlights (1-2 pages)'}<br />
        {isKo ? '- 시장 규모 및 성장률: 과거 데이터 + 미래 전망' : '- Market size and growth rate: historical data + future outlook'}<br />
        {isKo ? '- 주요 플레이어 분석: 시장 점유율, 전략, 강약점' : '- Key player analysis: market share, strategy, strengths/weaknesses'}<br />
        {isKo ? '- 트렌드 분석: 기술, 규제, 소비자 행동 변화' : '- Trend analysis: technology, regulation, consumer behavior changes'}<br />
        {isKo ? '- 전망 및 제언: 데이터 기반 미래 시나리오 및 전략 제안' : '- Outlook and recommendations: data-driven future scenarios and strategy proposals'}
      </div>

      <h2>{isKo ? '3. 기술 보고서' : '3. Technical Reports'}</h2>
      <p>{isKo ? '기술 스택 비교, 벤치마크 테스트 결과 정리 등 기술적 의사결정을 지원하는 보고서를 생성합니다.' : 'Generate reports supporting technical decision-making including tech stack comparison and benchmark test result organization.'}</p>
      <ul>
        <li>{isKo ? '기술 스택 비교: 프레임워크, 라이브러리, 클라우드 서비스 등 객관적 비교' : 'Tech stack comparison: objective comparison of frameworks, libraries, cloud services'}</li>
        <li>{isKo ? '벤치마크 테스트: 성능, 확장성, 비용 등 다각도 비교 분석' : 'Benchmark testing: multi-dimensional comparison of performance, scalability, cost'}</li>
        <li>{isKo ? '기술 도입 제안서: 도입 배경, 비교 분석, ROI 분석 포함 제안서 생성' : 'Technology adoption proposal: proposal generation including background, comparison, ROI analysis'}</li>
        <li>{isKo ? 'PoC 결과 보고서: 개념 증명 테스트 결과 정리 및 Go/No-Go 판단 근거' : 'PoC result report: proof of concept test result organization and Go/No-Go decision basis'}</li>
      </ul>

      <h2>{isKo ? '4. 여행/이벤트 기획' : '4. Travel/Event Planning'}</h2>
      <p>{isKo ? 'Manus AI가 웹에서 실시간 정보를 수집하여 상세한 일정표, 예산, 가이드북을 자동 생성합니다.' : 'Manus AI collects real-time information from the web to automatically generate detailed itineraries, budgets, and guidebooks.'}</p>
      <div className="example-box">
        <strong>{isKo ? '자동 생성 항목' : 'Auto-generated Items'}</strong><br />
        {isKo ? '- 일정표: 시간대별 상세 일정, 이동 경로, 대안 플랜' : '- Itinerary: detailed time-based schedule, routes, alternative plans'}<br />
        {isKo ? '- 예산: 항목별 비용 추정, 환율 반영, 예비비 포함' : '- Budget: itemized cost estimation, exchange rate reflection, contingency included'}<br />
        {isKo ? '- 가이드북: 현지 정보, 추천 맛집, 관광지, 주의사항 등' : '- Guidebook: local information, restaurant recommendations, attractions, precautions'}<br />
        {isKo ? '- 체크리스트: 출발 전/여행 중/귀국 후 체크리스트' : '- Checklist: pre-departure/during travel/post-return checklists'}
      </div>

      <h2>{isKo ? '5. 특허 분석' : '5. Patent Analysis'}</h2>
      <p>{isKo ? '특허 검색 및 기술 동향 분석을 통해 R&D 전략 수립을 지원합니다.' : 'Support R&D strategy development through patent search and technology trend analysis.'}</p>
      <ul>
        <li>{isKo ? '특허 검색: 키워드/분류코드 기반 관련 특허 자동 검색 및 목록화' : 'Patent search: automatic search and listing of related patents by keyword/classification code'}</li>
        <li>{isKo ? '기술 동향 분석: 출원 추이, 주요 출원인, 기술 분야 매핑' : 'Technology trend analysis: filing trends, major applicants, technology area mapping'}</li>
        <li>{isKo ? '특허 맵 생성: 기술-시장 매트릭스, 공백 분석' : 'Patent map generation: technology-market matrix, gap analysis'}</li>
        <li>{isKo ? '침해 분석 기초자료: 청구항 분석, 기술 비교표 자동 생성' : 'Infringement analysis basics: claims analysis, automatic technology comparison table generation'}</li>
      </ul>

      <div className="tip-box">
        <strong>{isKo ? '팁' : 'Tip'}</strong>: {isKo ? '학술 리서치 시 "최근 3년 이내 발표된 논문 중심으로 검색하고, 각 논문의 핵심 기여(contribution)를 한 문장으로 요약해줘"와 같이 시간 범위와 요약 형식을 지정하면 더 유용한 결과를 얻을 수 있습니다.' : 'For academic research, specifying time range and summary format like "Search papers published within the last 3 years and summarize each paper\'s key contribution in one sentence" yields more useful results.'}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  CreativeSection                                                         */
/* ────────────────────────────────────────────────────────────────────────── */
function CreativeSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '창작 & 콘텐츠' : 'Creative & Content'}</h1>
        <p>{isKo ? 'Manus AI의 Web App Builder와 콘텐츠 생성 능력을 활용하여 웹사이트, 프레젠테이션, 다양한 콘텐츠를 제작하는 방법을 알아봅니다.' : 'Learn how to create websites, presentations, and various content using Manus AI\'s Web App Builder and content generation capabilities.'}</p>
      </div>

      <h2>{isKo ? '1. 웹사이트 제작' : '1. Website Creation'}</h2>
      <p>{isKo ? 'Manus AI의 Web App Builder를 활용하면 완전한 웹사이트를 디자인부터 개발까지 자동으로 생성할 수 있습니다.' : 'With Manus AI\'s Web App Builder, you can automatically generate complete websites from design to development.'}</p>
      <div className="example-box">
        <strong>{isKo ? '주요 기능' : 'Key Features'}</strong><br />
        {isKo ? '- 완전한 웹사이트: HTML/CSS/JavaScript 코드 자동 생성' : '- Complete websites: automatic HTML/CSS/JavaScript code generation'}<br />
        {isKo ? '- 반응형 디자인: 모바일/태블릿/데스크톱 자동 대응' : '- Responsive design: automatic mobile/tablet/desktop adaptation'}<br />
        {isKo ? '- 인터랙티브 기능: 폼, 애니메이션, 동적 콘텐츠 포함' : '- Interactive features: forms, animations, dynamic content included'}<br />
        {isKo ? '- 즉시 배포: 생성된 사이트를 바로 미리보기 및 다운로드 가능' : '- Instant deployment: preview and download generated sites immediately'}
      </div>

      <h2>{isKo ? '2. 프레젠테이션' : '2. Presentations'}</h2>
      <p>{isKo ? '주제만 입력하면 구조, 디자인, 콘텐츠가 완성된 프레젠테이션 슬라이드를 자동으로 생성합니다.' : 'Simply input a topic and automatically generate presentation slides with complete structure, design, and content.'}</p>
      <ul>
        <li>{isKo ? '슬라이드 구조: 도입-본론-결론 구조의 논리적 슬라이드 구성' : 'Slide structure: logical slide composition with intro-body-conclusion structure'}</li>
        <li>{isKo ? '디자인: 전문적인 레이아웃, 색상 배합, 타이포그래피 자동 적용' : 'Design: professional layout, color schemes, typography automatically applied'}</li>
        <li>{isKo ? '콘텐츠: 핵심 메시지 도출, 데이터 시각화, 스피커 노트 생성' : 'Content: key message extraction, data visualization, speaker notes generation'}</li>
        <li>{isKo ? '형식 지원: HTML 슬라이드, PDF 등 다양한 형식으로 출력' : 'Format support: output in various formats including HTML slides, PDF'}</li>
      </ul>

      <h2>{isKo ? '3. 소셜 미디어' : '3. Social Media'}</h2>
      <p>{isKo ? '소셜 미디어 마케팅의 전체 워크플로우를 자동화합니다.' : 'Automate the entire social media marketing workflow.'}</p>
      <div className="example-box">
        <strong>{isKo ? '소셜 미디어 자동화' : 'Social Media Automation'}</strong><br />
        {isKo ? '- 콘텐츠 캘린더: 월간/주간 게시 일정 자동 생성 및 관리' : '- Content calendar: automatic monthly/weekly posting schedule generation and management'}<br />
        {isKo ? '- 포스트 초안: 플랫폼별 최적화된 게시물 초안 작성' : '- Post drafts: platform-optimized post draft creation'}<br />
        {isKo ? '- 해시태그 분석: 트렌딩 해시태그 리서치, 최적 해시태그 조합 추천' : '- Hashtag analysis: trending hashtag research, optimal hashtag combination recommendations'}<br />
        {isKo ? '- 성과 분석: 게시물 참여율, 도달률, 성장 추세 분석' : '- Performance analysis: post engagement, reach, growth trend analysis'}
      </div>

      <h2>{isKo ? '4. 뉴스레터' : '4. Newsletters'}</h2>
      <p>{isKo ? '주간 또는 월간 뉴스레터의 콘텐츠를 자동으로 수집하고 작성합니다.' : 'Automatically collect and write content for weekly or monthly newsletters.'}</p>
      <ul>
        <li>{isKo ? '콘텐츠 수집: 지정된 주제/키워드 기반으로 최신 뉴스, 트렌드 자동 수집' : 'Content collection: automatic collection of latest news and trends based on specified topics/keywords'}</li>
        <li>{isKo ? '큐레이션: 수집된 콘텐츠 중 가치 있는 항목 선별 및 요약' : 'Curation: selecting and summarizing valuable items from collected content'}</li>
        <li>{isKo ? '뉴스레터 작성: 인트로, 섹션별 콘텐츠, CTA 포함 완성본 생성' : 'Newsletter writing: complete creation including intro, section content, CTAs'}</li>
        <li>{isKo ? 'HTML 템플릿: 이메일 클라이언트 호환 HTML 뉴스레터 자동 생성' : 'HTML template: automatic email client-compatible HTML newsletter generation'}</li>
      </ul>

      <h2>{isKo ? '5. 교육 자료' : '5. Educational Materials'}</h2>
      <p>{isKo ? '강의 자료, 퀴즈, 핸드아웃 등 교육에 필요한 다양한 자료를 자동으로 생성합니다.' : 'Automatically generate various educational materials including lecture materials, quizzes, and handouts.'}</p>
      <div className="example-box">
        <strong>{isKo ? '교육 자료 유형' : 'Educational Material Types'}</strong><br />
        {isKo ? '- 강의 자료: 주제별 구조화된 강의 슬라이드 및 노트' : '- Lecture materials: topic-structured lecture slides and notes'}<br />
        {isKo ? '- 퀴즈: 객관식, 주관식, 코딩 문제 등 다양한 유형의 평가 문항' : '- Quizzes: various assessment items including multiple choice, short answer, coding problems'}<br />
        {isKo ? '- 핸드아웃: 수업 요약, 참고 자료, 실습 가이드 자동 생성' : '- Handouts: automatic generation of class summaries, reference materials, practice guides'}<br />
        {isKo ? '- 루브릭: 과제/프로젝트 평가를 위한 채점 기준표 생성' : '- Rubrics: scoring criteria table generation for assignment/project evaluation'}<br />
        {isKo ? '- 커리큘럼 설계: 학습 목표 기반 주차별 교육 과정 자동 설계' : '- Curriculum design: automatic weekly curriculum design based on learning objectives'}
      </div>

      <div className="tip-box">
        <strong>{isKo ? '팁' : 'Tip'}</strong>: {isKo ? '웹사이트 제작 시 "모바일 우선 반응형 디자인으로 만들고, 다크모드도 지원해줘"와 같이 구체적인 디자인 요구사항을 명시하면 더 완성도 높은 결과물을 얻을 수 있습니다.' : 'When creating websites, specifying concrete design requirements like "Make it mobile-first responsive with dark mode support" yields higher quality results.'}
      </div>
    </div>
  );
}
