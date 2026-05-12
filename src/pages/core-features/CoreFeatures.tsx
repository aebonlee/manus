import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'autonomous', icon: 'fa-bolt', ko: '자율 실행 엔진', en: 'Autonomous Execution Engine' },
  { id: 'web-automation', icon: 'fa-globe', ko: '웹 자동화', en: 'Web Automation' },
  { id: 'code-gen', icon: 'fa-code', ko: '코드 생성 & 실행', en: 'Code Generation & Execution' },
  { id: 'multimodal', icon: 'fa-images', ko: '멀티모달 처리', en: 'Multimodal Processing' },
  { id: 'transparent', icon: 'fa-eye', ko: '투명 인터페이스', en: 'Transparent Interface' },
  { id: 'async', icon: 'fa-clock', ko: '비동기 작업 처리', en: 'Async Task Processing' },
];

export default function CoreFeatures() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('autonomous');
  const isKo = language === 'ko';

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

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
        title={isKo ? '핵심 기능 & 작동 원리 | Manus AI Master' : 'Core Features & How It Works | Manus AI Master'}
        description={isKo ? 'Manus AI의 핵심 기능과 작동 원리를 깊이 있게 알아봅니다' : 'Deep dive into core features and how Manus AI works'}
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '목차' : 'Contents'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
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

          {/* Content */}
          <main className="guide-content">
            {activeSection === 'autonomous' && <AutonomousSection isKo={isKo} />}
            {activeSection === 'web-automation' && <WebAutomationSection isKo={isKo} />}
            {activeSection === 'code-gen' && <CodeGenSection isKo={isKo} />}
            {activeSection === 'multimodal' && <MultimodalSection isKo={isKo} />}
            {activeSection === 'transparent' && <TransparentSection isKo={isKo} />}
            {activeSection === 'async' && <AsyncSection isKo={isKo} />}

            {/* Section Navigation */}
            <div className="guide-section-nav">
              <button
                className="guide-nav-btn prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en
                    : isKo ? '이전' : 'Previous'}
                </span>
              </button>
              <button
                className="guide-nav-btn next"
                onClick={handleNext}
                disabled={currentIndex === SECTIONS.length - 1}
              >
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en
                    : isKo ? '다음' : 'Next'}
                </span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

/* ===============================================
   Section: Autonomous Execution Engine
   =============================================== */
function AutonomousSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '자율 실행 엔진' : 'Autonomous Execution Engine'}</h2>

      <h3>{isKo ? 'Manus의 핵심 작동 방식' : 'How Manus Works at Its Core'}</h3>
      <p>
        {isKo
          ? 'Manus의 가장 핵심적인 특징은 자율 실행 엔진입니다. 사용자가 지시를 내리면, AI가 스스로 계획을 수립하고, 단계별로 실행하며, 최종 결과물을 생성합니다. 단순한 질문-응답 방식의 챗봇과 달리, Manus는 복잡한 작업을 처음부터 끝까지 독립적으로 완수할 수 있습니다.'
          : 'The core feature of Manus is its Autonomous Execution Engine. When a user gives an instruction, the AI independently creates a plan, executes it step by step, and produces the final result. Unlike simple Q&A chatbots, Manus can independently complete complex tasks from start to finish.'}
      </p>

      <h3>{isKo ? 'LLM 기반 추론 엔진' : 'LLM-Based Reasoning Engine'}</h3>
      <p>
        {isKo
          ? 'Manus의 자율 실행은 대규모 언어 모델(LLM) 기반의 추론 엔진에 의해 구동됩니다. 이 엔진은 사용자의 요청을 분석하여 작업을 하위 태스크로 분할하고, 각 태스크를 순차적으로 실행합니다.'
          : 'The autonomous execution of Manus is powered by an LLM-based reasoning engine. This engine analyzes user requests, breaks tasks into subtasks, and executes each one sequentially.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '작업 분석' : 'Task Analysis'}</strong> -{' '}
          {isKo
            ? '사용자의 지시를 이해하고, 목표를 달성하기 위해 필요한 단계들을 파악합니다.'
            : 'Understands user instructions and identifies the steps needed to achieve the goal.'}
        </li>
        <li>
          <strong>{isKo ? '하위 작업 분할' : 'Subtask Decomposition'}</strong> -{' '}
          {isKo
            ? '복잡한 작업을 관리 가능한 작은 단위로 쪼개어 실행 계획을 수립합니다.'
            : 'Breaks complex tasks into manageable smaller units and creates an execution plan.'}
        </li>
        <li>
          <strong>{isKo ? '순차 실행' : 'Sequential Execution'}</strong> -{' '}
          {isKo
            ? '각 하위 작업을 순서대로 실행하며, 이전 단계의 결과를 다음 단계에 활용합니다.'
            : 'Executes each subtask in order, using results from previous steps in subsequent ones.'}
        </li>
      </ul>

      <h3>{isKo ? '실행 도구' : 'Execution Tools'}</h3>
      <p>
        {isKo
          ? 'Manus는 계획을 실행하기 위해 다양한 도구들을 활용합니다. 이 도구들이 Manus를 단순 대화형 AI와 차별화하는 핵심 요소입니다.'
          : 'Manus leverages various tools to execute its plans. These tools are what differentiate Manus from simple conversational AI.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '브라우저 제어' : 'Browser Control'}</strong> -{' '}
          {isKo
            ? '실제 웹 브라우저를 열고, 페이지를 탐색하고, 클릭하고, 입력하는 등의 조작을 수행합니다.'
            : 'Opens a real web browser, navigates pages, clicks, types, and performs other browser interactions.'}
        </li>
        <li>
          <strong>{isKo ? '터미널 (코드 실행)' : 'Terminal (Code Execution)'}</strong> -{' '}
          {isKo
            ? '가상 환경에서 코드를 직접 작성하고 실행합니다. Python, JavaScript, SQL 등 다양한 언어를 지원합니다.'
            : 'Writes and executes code directly in a virtual environment. Supports various languages including Python, JavaScript, and SQL.'}
        </li>
        <li>
          <strong>{isKo ? '파일 시스템' : 'File System'}</strong> -{' '}
          {isKo
            ? '파일을 생성, 읽기, 수정, 삭제할 수 있으며, 결과물을 파일로 저장하여 사용자에게 전달합니다.'
            : 'Can create, read, modify, and delete files, saving results as files to deliver to users.'}
        </li>
      </ul>

      <h3>{isKo ? '자동 오류 복구' : 'Automatic Error Recovery'}</h3>
      <p>
        {isKo
          ? 'Manus는 실행 중 오류가 발생하면 자동으로 대안을 탐색합니다. 웹 페이지가 로드되지 않으면 다른 소스를 시도하고, 코드 실행이 실패하면 오류를 분석하여 수정한 후 다시 실행합니다. 이러한 자동 복구 능력 덕분에 사용자가 중간에 개입하지 않아도 작업을 완수할 수 있습니다.'
          : 'When errors occur during execution, Manus automatically explores alternatives. If a web page fails to load, it tries other sources. If code execution fails, it analyzes the error, fixes it, and retries. This automatic recovery capability allows tasks to be completed without user intervention.'}
      </p>

      <h3>{isKo ? '실제 예시: 경쟁사 분석 보고서' : 'Real Example: Competitive Analysis Report'}</h3>
      <p>
        {isKo
          ? '사용자가 "경쟁사 분석 보고서를 작성해 줘"라고 요청하면, Manus는 다음과 같이 자율적으로 작업을 수행합니다.'
          : 'When a user requests "Create a competitive analysis report," Manus autonomously performs the following steps.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '1단계: 웹 검색' : 'Step 1: Web Search'}</strong> -{' '}
          {isKo
            ? '브라우저를 열고 경쟁사 관련 정보를 검색하여 최신 데이터를 수집합니다.'
            : 'Opens a browser, searches for competitor information, and gathers the latest data.'}
        </li>
        <li>
          <strong>{isKo ? '2단계: 데이터 수집' : 'Step 2: Data Collection'}</strong> -{' '}
          {isKo
            ? '여러 웹사이트에서 매출, 제품, 시장 점유율 등의 데이터를 체계적으로 수집합니다.'
            : 'Systematically collects data such as revenue, products, and market share from multiple websites.'}
        </li>
        <li>
          <strong>{isKo ? '3단계: 분석' : 'Step 3: Analysis'}</strong> -{' '}
          {isKo
            ? '수집된 데이터를 Python으로 분석하고, 차트와 그래프를 생성합니다.'
            : 'Analyzes collected data using Python and generates charts and graphs.'}
        </li>
        <li>
          <strong>{isKo ? '4단계: 보고서 작성' : 'Step 4: Report Generation'}</strong> -{' '}
          {isKo
            ? '분석 결과를 종합하여 전문적인 보고서를 작성하고, 파일로 저장하여 사용자에게 전달합니다.'
            : 'Compiles the analysis results into a professional report, saves it as a file, and delivers it to the user.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Web Automation
   =============================================== */
function WebAutomationSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '웹 자동화' : 'Web Automation'}</h2>

      <h3>{isKo ? '실제 브라우저 조작' : 'Real Browser Control'}</h3>
      <p>
        {isKo
          ? 'Manus는 Chromium 기반의 가상 브라우저를 사용하여 실제 웹 환경에서 작업합니다. 단순히 API를 호출하는 것이 아니라, 사람이 브라우저를 사용하는 것과 동일한 방식으로 웹사이트와 상호작용합니다. 이를 통해 거의 모든 웹 기반 작업을 자동화할 수 있습니다.'
          : 'Manus uses a Chromium-based virtual browser to work in a real web environment. Rather than simply calling APIs, it interacts with websites the same way a human uses a browser. This enables automation of virtually any web-based task.'}
      </p>

      <h3>{isKo ? '주요 웹 자동화 기능' : 'Key Web Automation Features'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '웹사이트 탐색' : 'Website Navigation'}</strong> -{' '}
          {isKo
            ? 'URL 방문, 링크 클릭, 페이지 간 이동 등 자유로운 웹 탐색이 가능합니다. 검색 엔진을 활용한 정보 수집도 포함됩니다.'
            : 'Freely navigates the web including visiting URLs, clicking links, and moving between pages. Includes information gathering via search engines.'}
        </li>
        <li>
          <strong>{isKo ? '양식 작성' : 'Form Filling'}</strong> -{' '}
          {isKo
            ? '텍스트 입력, 드롭다운 선택, 체크박스 클릭, 라디오 버튼 선택 등 웹 양식의 모든 요소를 조작할 수 있습니다.'
            : 'Manipulates all web form elements including text input, dropdown selection, checkbox clicking, and radio button selection.'}
        </li>
        <li>
          <strong>{isKo ? '데이터 스크래핑' : 'Data Scraping'}</strong> -{' '}
          {isKo
            ? '웹 페이지에서 필요한 데이터를 추출하여 구조화된 형태(표, JSON, CSV 등)로 정리합니다.'
            : 'Extracts required data from web pages and organizes it into structured formats (tables, JSON, CSV, etc.).'}
        </li>
        <li>
          <strong>{isKo ? '스크린샷 캡처' : 'Screenshot Capture'}</strong> -{' '}
          {isKo
            ? '웹 페이지의 스크린샷을 캡처하여 시각적 기록을 남기거나, 이미지 분석에 활용합니다.'
            : 'Captures screenshots of web pages for visual records or image analysis.'}
        </li>
      </ul>

      <h3>{isKo ? '인증이 필요한 사이트 처리' : 'Handling Authenticated Sites'}</h3>
      <p>
        {isKo
          ? 'Manus는 인증이 필요한 사이트도 처리할 수 있습니다. 사용자가 로그인 정보를 제공하면, Manus가 자동으로 로그인하여 인증된 상태에서 작업을 수행합니다. 이를 통해 내부 시스템, 관리자 패널, 구독 서비스 등에 접근하여 작업할 수 있습니다.'
          : 'Manus can handle sites that require authentication. When users provide login credentials, Manus automatically logs in and performs tasks in an authenticated state. This enables access to internal systems, admin panels, subscription services, and more.'}
      </p>

      <h3>{isKo ? '복잡한 웹 워크플로우 자동화 예시' : 'Complex Web Workflow Automation Examples'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '가격 비교' : 'Price Comparison'}</strong> -{' '}
          {isKo
            ? '여러 쇼핑몰을 순회하며 특정 제품의 가격을 수집하고, 비교 표를 생성합니다.'
            : 'Visits multiple shopping sites to collect prices for specific products and generates a comparison table.'}
        </li>
        <li>
          <strong>{isKo ? '부동산 리서치' : 'Real Estate Research'}</strong> -{' '}
          {isKo
            ? '부동산 사이트에서 조건에 맞는 매물을 검색하고, 가격 추이 데이터를 수집하여 분석합니다.'
            : 'Searches real estate sites for listings matching criteria, collects price trend data, and analyzes it.'}
        </li>
        <li>
          <strong>{isKo ? '소셜 미디어 모니터링' : 'Social Media Monitoring'}</strong> -{' '}
          {isKo
            ? '특정 키워드나 브랜드에 대한 소셜 미디어 언급을 수집하고 감성 분석을 수행합니다.'
            : 'Collects social media mentions for specific keywords or brands and performs sentiment analysis.'}
        </li>
        <li>
          <strong>{isKo ? '채용 공고 수집' : 'Job Posting Collection'}</strong> -{' '}
          {isKo
            ? '여러 구인구직 사이트에서 특정 직무의 채용 공고를 수집하고, 요구 조건을 비교 분석합니다.'
            : 'Collects job postings for specific roles from multiple job sites and compares requirements.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Code Generation & Execution
   =============================================== */
function CodeGenSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '코드 생성 & 실행' : 'Code Generation & Execution'}</h2>

      <h3>{isKo ? '다양한 언어 지원' : 'Multi-Language Support'}</h3>
      <p>
        {isKo
          ? 'Manus는 다양한 프로그래밍 언어를 지원하며, 사용자의 요구에 맞는 코드를 자동으로 생성합니다. 단순히 코드를 보여주는 것이 아니라, 가상 환경에서 직접 실행하여 결과를 확인할 수 있습니다.'
          : 'Manus supports various programming languages and automatically generates code tailored to user needs. Rather than just showing code, it executes it directly in a virtual environment to verify results.'}
      </p>
      <ul>
        <li>
          <strong>Python</strong> -{' '}
          {isKo
            ? '데이터 분석, 머신러닝, 웹 스크래핑, 자동화 스크립트 등 가장 폭넓게 활용됩니다.'
            : 'Most widely used for data analysis, machine learning, web scraping, automation scripts, and more.'}
        </li>
        <li>
          <strong>JavaScript / TypeScript</strong> -{' '}
          {isKo
            ? '웹 애플리케이션 개발, Node.js 서버 개발, 프론트엔드 인터랙션 구현에 사용됩니다.'
            : 'Used for web application development, Node.js server development, and frontend interaction implementation.'}
        </li>
        <li>
          <strong>SQL</strong> -{' '}
          {isKo
            ? '데이터베이스 쿼리 작성, 데이터 조회 및 분석에 활용됩니다.'
            : 'Used for writing database queries, data retrieval, and analysis.'}
        </li>
        <li>
          <strong>HTML / CSS</strong> -{' '}
          {isKo
            ? '웹 페이지 구조 설계 및 스타일링에 사용되며, 완성된 웹 페이지를 미리볼 수 있습니다.'
            : 'Used for web page structure and styling, with the ability to preview completed pages.'}
        </li>
      </ul>

      <h3>{isKo ? '코드 생성뿐만 아니라 실행까지' : 'Not Just Generation, But Execution Too'}</h3>
      <p>
        {isKo
          ? 'Manus의 가장 큰 장점 중 하나는 코드를 생성할 뿐만 아니라 가상 환경에서 직접 실행한다는 것입니다. 코드 실행 결과를 즉시 확인할 수 있으며, 오류가 발생하면 자동으로 디버깅하고 수정합니다.'
          : 'One of Manus\'s greatest strengths is that it not only generates code but also executes it directly in a virtual environment. You can immediately see execution results, and if errors occur, it automatically debugs and fixes them.'}
      </p>

      <h3>{isKo ? '패키지 자동 설치' : 'Automatic Package Installation'}</h3>
      <p>
        {isKo
          ? '코드 실행에 필요한 패키지가 없으면 Manus가 자동으로 설치합니다. pip install, npm install 등의 명령어를 자동으로 실행하여 필요한 라이브러리를 갖추고 코드를 실행합니다.'
          : 'If packages required for code execution are missing, Manus automatically installs them. It runs commands like pip install and npm install automatically to set up required libraries before executing code.'}
      </p>
      <ul>
        <li>
          <strong>Python</strong> -{' '}
          {isKo
            ? 'pip install을 통해 pandas, numpy, matplotlib, scikit-learn 등 필요한 라이브러리를 자동 설치합니다.'
            : 'Automatically installs required libraries like pandas, numpy, matplotlib, scikit-learn via pip install.'}
        </li>
        <li>
          <strong>Node.js</strong> -{' '}
          {isKo
            ? 'npm install을 통해 express, axios, cheerio 등 필요한 패키지를 자동 설치합니다.'
            : 'Automatically installs required packages like express, axios, cheerio via npm install.'}
        </li>
      </ul>

      <h3>{isKo ? '데이터 분석 & 시각화' : 'Data Analysis & Visualization'}</h3>
      <p>
        {isKo
          ? 'Manus는 pandas, matplotlib, seaborn 등의 라이브러리를 활용하여 데이터를 분석하고, 차트와 그래프를 생성합니다. CSV, Excel 파일을 읽어 데이터를 처리하고, 인사이트를 도출하며, 시각적으로 보기 좋은 결과물을 만들어 냅니다.'
          : 'Manus leverages libraries like pandas, matplotlib, and seaborn to analyze data and generate charts and graphs. It reads CSV and Excel files, processes data, derives insights, and creates visually appealing results.'}
      </p>

      <h3>{isKo ? '웹 앱 개발' : 'Web App Development'}</h3>
      <p>
        {isKo
          ? 'Manus는 프론트엔드부터 백엔드, 데이터베이스까지 웹 애플리케이션의 전체 스택을 한 번에 개발할 수 있습니다. React, Vue 등의 프론트엔드 프레임워크와 Express, Flask 등의 백엔드 프레임워크를 활용하여 완성된 웹 앱을 생성합니다.'
          : 'Manus can develop the entire stack of a web application at once, from frontend to backend to database. It creates complete web apps using frontend frameworks like React and Vue, along with backend frameworks like Express and Flask.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '프론트엔드' : 'Frontend'}</strong> -{' '}
          {isKo
            ? 'HTML, CSS, JavaScript로 사용자 인터페이스를 설계하고 구현합니다.'
            : 'Designs and implements user interfaces with HTML, CSS, and JavaScript.'}
        </li>
        <li>
          <strong>{isKo ? '백엔드' : 'Backend'}</strong> -{' '}
          {isKo
            ? 'API 서버를 구축하고, 비즈니스 로직을 구현합니다.'
            : 'Builds API servers and implements business logic.'}
        </li>
        <li>
          <strong>{isKo ? '데이터베이스' : 'Database'}</strong> -{' '}
          {isKo
            ? 'SQLite, PostgreSQL 등의 데이터베이스를 설정하고, 스키마를 설계하며, CRUD 기능을 구현합니다.'
            : 'Sets up databases like SQLite and PostgreSQL, designs schemas, and implements CRUD operations.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Multimodal Processing
   =============================================== */
function MultimodalSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '멀티모달 처리' : 'Multimodal Processing'}</h2>

      <h3>{isKo ? '이미지 분석' : 'Image Analysis'}</h3>
      <p>
        {isKo
          ? 'Manus는 업로드된 이미지를 인식하고 분석할 수 있습니다. 사진, 스크린샷, 다이어그램, 차트 등 다양한 유형의 이미지를 이해하고, 그 내용을 설명하거나 데이터를 추출할 수 있습니다.'
          : 'Manus can recognize and analyze uploaded images. It understands various types of images including photos, screenshots, diagrams, and charts, and can describe their content or extract data from them.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '사진 분석' : 'Photo Analysis'}</strong> -{' '}
          {isKo
            ? '사진 속 객체, 텍스트, 장면을 인식하고 설명합니다.'
            : 'Recognizes and describes objects, text, and scenes in photos.'}
        </li>
        <li>
          <strong>{isKo ? '차트 해석' : 'Chart Interpretation'}</strong> -{' '}
          {isKo
            ? '차트나 그래프의 데이터를 읽고, 추세와 인사이트를 분석합니다.'
            : 'Reads chart and graph data, analyzing trends and insights.'}
        </li>
        <li>
          <strong>{isKo ? '디자인 참고' : 'Design Reference'}</strong> -{' '}
          {isKo
            ? '디자인 이미지를 참고하여 유사한 웹 페이지나 UI를 구현할 수 있습니다.'
            : 'Can implement similar web pages or UIs using design images as references.'}
        </li>
      </ul>

      <h3>{isKo ? '문서 처리' : 'Document Processing'}</h3>
      <p>
        {isKo
          ? 'Manus는 다양한 형식의 문서를 읽고 처리할 수 있습니다. PDF, Excel, Word 파일을 열어 내용을 분석하고, 필요한 데이터를 추출하거나 다른 형식으로 변환할 수 있습니다.'
          : 'Manus can read and process documents in various formats. It opens PDF, Excel, and Word files to analyze content, extract required data, or convert to other formats.'}
      </p>
      <ul>
        <li>
          <strong>PDF</strong> -{' '}
          {isKo
            ? 'PDF 문서를 읽고, 텍스트를 추출하며, 내용을 요약하거나 분석합니다.'
            : 'Reads PDF documents, extracts text, and summarizes or analyzes content.'}
        </li>
        <li>
          <strong>Excel</strong> -{' '}
          {isKo
            ? '스프레드시트 데이터를 읽고, 수식을 분석하며, 차트를 생성합니다.'
            : 'Reads spreadsheet data, analyzes formulas, and generates charts.'}
        </li>
        <li>
          <strong>Word</strong> -{' '}
          {isKo
            ? 'Word 문서의 내용을 읽고, 편집하거나 다른 형식으로 변환합니다.'
            : 'Reads Word document content, edits it, or converts to other formats.'}
        </li>
      </ul>

      <h3>{isKo ? '데이터 시각화' : 'Data Visualization'}</h3>
      <p>
        {isKo
          ? 'Manus는 데이터를 시각적으로 표현하는 차트, 그래프, 인포그래픽을 생성할 수 있습니다. matplotlib, plotly 등의 라이브러리를 활용하여 막대 차트, 원형 차트, 선 그래프, 히트맵 등 다양한 시각화를 제작합니다.'
          : 'Manus can create charts, graphs, and infographics to visually represent data. It produces various visualizations such as bar charts, pie charts, line graphs, and heatmaps using libraries like matplotlib and plotly.'}
      </p>

      <h3>{isKo ? '형식 간 변환' : 'Cross-Format Conversion'}</h3>
      <p>
        {isKo
          ? 'Manus는 여러 파일 형식 간의 변환을 지원합니다. 데이터나 문서를 필요한 형식으로 자유롭게 변환할 수 있습니다.'
          : 'Manus supports conversion between multiple file formats. You can freely convert data and documents to the format you need.'}
      </p>
      <ul>
        <li>
          <strong>PDF → Excel</strong> -{' '}
          {isKo
            ? 'PDF 내 표 데이터를 Excel 스프레드시트로 변환합니다.'
            : 'Converts table data within PDFs to Excel spreadsheets.'}
        </li>
        <li>
          <strong>{isKo ? '이미지 → 텍스트 (OCR)' : 'Image → Text (OCR)'}</strong> -{' '}
          {isKo
            ? '이미지에 포함된 텍스트를 인식하여 편집 가능한 텍스트로 변환합니다.'
            : 'Recognizes text in images and converts it to editable text.'}
        </li>
        <li>
          <strong>CSV → JSON</strong> -{' '}
          {isKo
            ? 'CSV 데이터를 JSON 형식으로 변환하여 API 연동에 활용합니다.'
            : 'Converts CSV data to JSON format for API integration.'}
        </li>
        <li>
          <strong>Markdown → HTML</strong> -{' '}
          {isKo
            ? 'Markdown 문서를 HTML로 변환하여 웹 페이지로 활용합니다.'
            : 'Converts Markdown documents to HTML for use as web pages.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Transparent Interface
   =============================================== */
function TransparentSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '투명 인터페이스' : 'Transparent Interface'}</h2>

      <h3>{isKo ? '실시간 작업 과정 관찰' : 'Real-Time Task Observation'}</h3>
      <p>
        {isKo
          ? 'Manus의 독특한 특징 중 하나는 AI의 모든 작업 과정을 실시간으로 관찰할 수 있다는 것입니다. 오른쪽 패널에서 AI가 어떤 작업을 수행하고 있는지, 어떤 웹사이트를 방문하고 있는지, 어떤 코드를 실행하고 있는지를 실시간으로 확인할 수 있습니다.'
          : 'One of Manus\'s unique features is the ability to observe all of the AI\'s work processes in real time. In the right panel, you can see in real time what tasks the AI is performing, which websites it\'s visiting, and what code it\'s executing.'}
      </p>

      <h3>{isKo ? '가상 데스크톱' : 'Virtual Desktop'}</h3>
      <p>
        {isKo
          ? 'Manus는 가상 데스크톱 환경에서 작업하며, 사용자는 이 환경을 실시간으로 볼 수 있습니다. AI가 실제로 브라우저를 열고, 타이핑하고, 클릭하는 모습을 화면으로 관찰할 수 있어, AI의 작업 방식을 직관적으로 이해할 수 있습니다.'
          : 'Manus works in a virtual desktop environment that users can view in real time. You can observe the AI actually opening browsers, typing, and clicking on screen, providing an intuitive understanding of how the AI works.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '브라우저 화면' : 'Browser View'}</strong> -{' '}
          {isKo
            ? 'AI가 방문하는 웹 페이지와 상호작용하는 모습을 실시간으로 볼 수 있습니다.'
            : 'See web pages the AI visits and its interactions in real time.'}
        </li>
        <li>
          <strong>{isKo ? '터미널 화면' : 'Terminal View'}</strong> -{' '}
          {isKo
            ? '코드 실행 과정과 출력 결과를 실시간으로 확인할 수 있습니다.'
            : 'View code execution processes and output results in real time.'}
        </li>
        <li>
          <strong>{isKo ? '파일 탐색기' : 'File Explorer'}</strong> -{' '}
          {isKo
            ? 'AI가 생성하고 수정하는 파일들을 실시간으로 확인할 수 있습니다.'
            : 'See files the AI creates and modifies in real time.'}
        </li>
      </ul>

      <h3>{isKo ? '중간 개입 가능' : 'Mid-Task Intervention'}</h3>
      <p>
        {isKo
          ? '작업 중 언제든 AI의 작업에 개입할 수 있습니다. 방향을 수정하거나, 추가 지시를 내리거나, 작업을 중단시킬 수 있습니다. 이를 통해 AI의 자율성을 유지하면서도 사용자가 최종 통제권을 갖습니다.'
          : 'You can intervene in the AI\'s work at any time during a task. You can redirect, give additional instructions, or stop the task. This maintains AI autonomy while keeping the user in ultimate control.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '방향 수정' : 'Redirect'}</strong> -{' '}
          {isKo
            ? '"다른 방식으로 접근해 줘" 또는 "이 부분은 건너뛰어"와 같은 지시로 작업 방향을 변경할 수 있습니다.'
            : 'Change the work direction with instructions like "try a different approach" or "skip this part."'}
        </li>
        <li>
          <strong>{isKo ? '추가 지시' : 'Additional Instructions'}</strong> -{' '}
          {isKo
            ? '진행 중인 작업에 추가 요구사항이나 제약 조건을 전달할 수 있습니다.'
            : 'Provide additional requirements or constraints to ongoing tasks.'}
        </li>
        <li>
          <strong>{isKo ? '작업 중단' : 'Task Cancellation'}</strong> -{' '}
          {isKo
            ? '원하지 않는 방향으로 진행되는 경우 즉시 작업을 중단할 수 있습니다.'
            : 'Immediately stop tasks that are progressing in an undesired direction.'}
        </li>
      </ul>

      <h3>{isKo ? '유리 상자(Glass Box) 접근법' : 'Glass Box Approach'}</h3>
      <p>
        {isKo
          ? 'Manus는 "블랙박스"가 아닌 "유리 상자(Glass Box)" 접근법을 지향합니다. 많은 AI 서비스가 입력과 출력만 보여주는 반면, Manus는 중간 과정 전체를 투명하게 공개합니다. 이를 통해 사용자는 AI가 어떻게 결론에 도달했는지를 이해할 수 있고, 결과에 대한 신뢰도를 높일 수 있습니다.'
          : 'Manus embraces a "Glass Box" approach rather than a "Black Box" one. While many AI services only show input and output, Manus transparently reveals the entire intermediate process. This allows users to understand how the AI reached its conclusions and increases confidence in the results.'}
      </p>
    </div>
  );
}

/* ===============================================
   Section: Async Task Processing
   =============================================== */
function AsyncSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '비동기 작업 처리' : 'Async Task Processing'}</h2>

      <h3>{isKo ? '백그라운드 실행' : 'Background Execution'}</h3>
      <p>
        {isKo
          ? '복잡하고 시간이 오래 걸리는 작업은 백그라운드에서 실행됩니다. 대규모 데이터 분석, 긴 리서치 작업, 복잡한 코드 프로젝트 등을 Manus에게 맡기고, 사용자는 다른 일을 하면서 완료를 기다릴 수 있습니다.'
          : 'Complex, time-consuming tasks run in the background. You can delegate large-scale data analysis, lengthy research tasks, and complex code projects to Manus and wait for completion while doing other things.'}
      </p>

      <h3>{isKo ? '브라우저를 닫아도 계속 진행' : 'Continues Even When Browser Is Closed'}</h3>
      <p>
        {isKo
          ? 'Manus의 작업은 서버 측에서 실행되기 때문에, 브라우저를 닫거나 컴퓨터를 종료해도 작업이 계속 진행됩니다. 나중에 다시 접속하면 진행 상황을 확인하고, 완료된 결과물을 다운로드할 수 있습니다.'
          : 'Since Manus tasks run server-side, they continue even if you close the browser or shut down your computer. You can check progress and download completed results when you reconnect later.'}
      </p>

      <h3>{isKo ? '완료 알림' : 'Completion Notifications'}</h3>
      <p>
        {isKo
          ? '작업이 완료되면 이메일이나 푸시 알림을 통해 사용자에게 알려줍니다. 오랜 시간이 걸리는 작업도 완료 즉시 확인할 수 있어 효율적입니다.'
          : 'When tasks complete, users are notified via email or push notifications. Even tasks that take a long time can be reviewed immediately upon completion, making the process efficient.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '이메일 알림' : 'Email Notifications'}</strong> -{' '}
          {isKo
            ? '작업 완료 시 등록된 이메일로 알림과 함께 결과 요약을 받습니다.'
            : 'Receive notifications with result summaries via registered email upon task completion.'}
        </li>
        <li>
          <strong>{isKo ? '푸시 알림' : 'Push Notifications'}</strong> -{' '}
          {isKo
            ? '브라우저 또는 모바일 앱 푸시 알림으로 실시간 완료 알림을 받습니다.'
            : 'Receive real-time completion notifications via browser or mobile app push notifications.'}
        </li>
      </ul>

      <h3>{isKo ? '여러 작업 동시 실행' : 'Concurrent Task Execution'}</h3>
      <p>
        {isKo
          ? 'Manus는 여러 작업을 동시에 실행할 수 있습니다. 한 작업이 진행되는 동안 새로운 작업을 시작할 수 있으며, 각 작업은 독립적으로 실행됩니다. 이를 통해 생산성을 극대화할 수 있습니다.'
          : 'Manus can execute multiple tasks simultaneously. You can start new tasks while another is in progress, and each task runs independently. This maximizes productivity.'}
      </p>

      <h3>{isKo ? '작업 큐 관리' : 'Task Queue Management'}</h3>
      <p>
        {isKo
          ? 'Manus는 작업 큐를 통해 여러 작업을 체계적으로 관리합니다. 사용자는 작업의 우선순위를 설정하고, 필요에 따라 작업을 일시정지하거나 재시작할 수 있습니다.'
          : 'Manus systematically manages multiple tasks through a task queue. Users can set task priorities and pause or restart tasks as needed.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '우선순위 설정' : 'Priority Setting'}</strong> -{' '}
          {isKo
            ? '긴급한 작업에 높은 우선순위를 부여하여 먼저 처리되도록 합니다.'
            : 'Assign high priority to urgent tasks so they are processed first.'}
        </li>
        <li>
          <strong>{isKo ? '일시정지' : 'Pause'}</strong> -{' '}
          {isKo
            ? '진행 중인 작업을 일시적으로 멈추고, 나중에 이어서 진행할 수 있습니다.'
            : 'Temporarily pause an in-progress task and resume it later.'}
        </li>
        <li>
          <strong>{isKo ? '재시작' : 'Restart'}</strong> -{' '}
          {isKo
            ? '실패하거나 일시정지된 작업을 처음부터 또는 중단된 지점부터 다시 시작합니다.'
            : 'Restart failed or paused tasks from the beginning or from the point of interruption.'}
        </li>
      </ul>
    </div>
  );
}
