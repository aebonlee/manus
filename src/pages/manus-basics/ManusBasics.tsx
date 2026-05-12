import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'intro', icon: 'fa-circle-info', ko: 'Manus AI 소개', en: 'Introduction to Manus' },
  { id: 'agent-concept', icon: 'fa-robot', ko: 'AI 에이전트 개념', en: 'AI Agent Concept' },
  { id: 'difference', icon: 'fa-code-compare', ko: '기존 AI와 차이점', en: 'Difference from Existing AI' },
  { id: 'account', icon: 'fa-user-plus', ko: '계정 생성 & 접속', en: 'Account & Access' },
  { id: 'interface', icon: 'fa-desktop', ko: '인터페이스 이해', en: 'Interface Guide' },
  { id: 'first-task', icon: 'fa-play', ko: '첫 번째 작업', en: 'First Task' },
  { id: 'workflow', icon: 'fa-diagram-project', ko: '워크플로우 기초', en: 'Workflow Basics' },
];

export default function ManusBasics() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');
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
        title={isKo ? 'Manus 소개 & 기초 | Manus 마스터' : 'Manus Introduction & Basics | Manus Master'}
        description={isKo ? 'Manus AI를 처음 시작하는 분들을 위한 완벽한 기초 가이드' : 'Complete beginner guide to getting started with Manus AI'}
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
            {activeSection === 'intro' && <IntroSection isKo={isKo} />}
            {activeSection === 'agent-concept' && <AgentConceptSection isKo={isKo} />}
            {activeSection === 'difference' && <DifferenceSection isKo={isKo} />}
            {activeSection === 'account' && <AccountSection isKo={isKo} />}
            {activeSection === 'interface' && <InterfaceSection isKo={isKo} />}
            {activeSection === 'first-task' && <FirstTaskSection isKo={isKo} />}
            {activeSection === 'workflow' && <WorkflowSection isKo={isKo} />}

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
   Section: Introduction to Manus
   =============================================== */
function IntroSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? 'Manus AI 소개' : 'Introduction to Manus AI'}</h2>

      <h3>{isKo ? 'Manus AI란?' : 'What is Manus AI?'}</h3>
      <p>
        {isKo
          ? 'Manus는 2025년 3월 중국 AI 스타트업 Monica(모니카)가 출시한 세계 최초의 범용 자율형 AI 에이전트 플랫폼입니다. 단순히 텍스트를 생성하는 기존 AI와 달리, Manus는 사용자의 목표를 이해하고 스스로 계획을 세워 실제 작업을 수행합니다. 웹 검색, 코드 실행, 파일 생성 등 다양한 작업을 자율적으로 처리할 수 있는 혁신적인 AI 플랫폼입니다.'
          : 'Manus is the world\'s first general-purpose autonomous AI agent platform, launched in March 2025 by the Chinese AI startup Monica. Unlike traditional AI that simply generates text, Manus understands user goals, creates its own plans, and executes real tasks. It is a revolutionary AI platform capable of autonomously handling diverse tasks such as web searching, code execution, and file creation.'}
      </p>

      <h3>{isKo ? 'GAIA 벤치마크 1위 달성' : 'Achieved #1 on GAIA Benchmark'}</h3>
      <p>
        {isKo
          ? 'Manus는 AI 에이전트 성능을 평가하는 국제 표준 벤치마크인 GAIA(General AI Assistants)에서 OpenAI를 제치고 1위를 달성하며 전 세계의 주목을 받았습니다. GAIA 벤치마크는 AI가 실제 세계의 복잡한 작업을 얼마나 잘 수행하는지를 측정하는 지표로, Manus의 자율 실행 능력이 현존하는 AI 중 가장 뛰어나다는 것을 입증했습니다.'
          : 'Manus gained worldwide attention by achieving the #1 position on the GAIA (General AI Assistants) benchmark, surpassing OpenAI. GAIA is an international standard benchmark that evaluates how well AI agents perform complex real-world tasks, proving that Manus\'s autonomous execution capabilities are the most advanced among existing AI systems.'}
      </p>

      <h3>{isKo ? '"Manus"의 의미' : 'The Meaning of "Manus"'}</h3>
      <p>
        {isKo
          ? '"Manus"는 라틴어로 "손(Hand)"을 의미합니다. 이 이름에는 AI의 "두뇌(Brain)"가 생성한 계획과 판단을 실제 행동으로 연결한다는 철학이 담겨 있습니다. 기존 AI가 "생각"만 했다면, Manus는 "생각하고 실행"하는 AI입니다. 마치 사람의 손이 두뇌의 명령을 받아 실제 작업을 수행하듯, Manus는 AI의 지능을 실질적인 결과물로 변환합니다.'
          : '"Manus" means "hand" in Latin. This name embodies the philosophy of connecting the AI\'s "brain" — its plans and judgments — to real actions. While existing AI only "thinks," Manus "thinks and executes." Just as human hands carry out the brain\'s commands to perform real tasks, Manus transforms AI intelligence into tangible results.'}
      </p>

      <h3>{isKo ? '주요 특징' : 'Key Features'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '자율 실행 (Autonomous Execution)' : 'Autonomous Execution'}</strong> -{' '}
          {isKo
            ? '사용자의 목표를 이해하고 스스로 계획을 수립하여 단계별로 작업을 수행합니다. 중간에 사용자의 개입 없이도 복잡한 작업을 완수할 수 있습니다.'
            : 'Understands user goals, creates its own plans, and executes tasks step by step. It can complete complex tasks without user intervention in between.'}
        </li>
        <li>
          <strong>{isKo ? '웹 자동화 (Web Automation)' : 'Web Automation'}</strong> -{' '}
          {isKo
            ? '실제 웹 브라우저를 제어하여 웹사이트를 탐색하고, 정보를 검색하며, 데이터를 수집합니다. 마치 사람이 브라우저를 사용하는 것처럼 자연스럽게 웹을 활용합니다.'
            : 'Controls a real web browser to navigate websites, search for information, and collect data. It uses the web as naturally as a human would use a browser.'}
        </li>
        <li>
          <strong>{isKo ? '코드 생성 & 실행 (Code Generation & Execution)' : 'Code Generation & Execution'}</strong> -{' '}
          {isKo
            ? 'Python, JavaScript 등 다양한 프로그래밍 언어로 코드를 작성하고 직접 실행할 수 있습니다. 데이터 분석, 차트 생성, 자동화 스크립트 등을 즉석에서 만들어 실행합니다.'
            : 'Writes and directly executes code in various programming languages like Python and JavaScript. Creates and runs data analysis, chart generation, automation scripts on the fly.'}
        </li>
        <li>
          <strong>{isKo ? '파일 생성 (File Creation)' : 'File Creation'}</strong> -{' '}
          {isKo
            ? 'Excel, PDF, Word, PowerPoint 등 다양한 형식의 파일을 자동으로 생성합니다. 작업 결과를 사용자가 바로 활용할 수 있는 형태로 제공합니다.'
            : 'Automatically creates files in various formats such as Excel, PDF, Word, PowerPoint. Delivers work results in formats immediately usable by users.'}
        </li>
        <li>
          <strong>{isKo ? '멀티모달 처리 (Multimodal Processing)' : 'Multimodal Processing'}</strong> -{' '}
          {isKo
            ? '텍스트, 이미지, 데이터 등 다양한 형태의 입력을 이해하고 처리할 수 있습니다. 이미지를 분석하거나, 복잡한 데이터셋을 해석하는 것도 가능합니다.'
            : 'Can understand and process various types of input including text, images, and data. It can analyze images and interpret complex datasets.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: AI Agent Concept
   =============================================== */
function AgentConceptSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? 'AI 에이전트 개념' : 'AI Agent Concept'}</h2>

      <h3>{isKo ? '전통적 AI vs AI 에이전트' : 'Traditional AI vs AI Agent'}</h3>
      <p>
        {isKo
          ? 'AI 에이전트를 이해하기 위해 먼저 전통적 AI와 AI 에이전트의 차이를 살펴보겠습니다. 이 차이를 이해하면 Manus가 왜 혁신적인지 명확히 알 수 있습니다.'
          : 'To understand AI agents, let\'s first examine the difference between traditional AI and AI agents. Understanding this difference will make it clear why Manus is revolutionary.'}
      </p>

      <h3>{isKo ? '전통적 AI (Chatbot 방식)' : 'Traditional AI (Chatbot Style)'}</h3>
      <p>
        {isKo
          ? '전통적 AI는 단순한 입력-출력 모델입니다. 사용자가 질문이나 요청을 입력하면, AI가 텍스트 형태의 응답을 한 번 생성하고 끝납니다. 대화는 1회성이며, AI는 실제로 어떤 행동도 수행하지 않습니다.'
          : 'Traditional AI follows a simple input-output model. When a user enters a question or request, the AI generates a text response once and that\'s it. The interaction is one-shot, and the AI doesn\'t actually perform any actions.'}
      </p>
      <ul>
        <li>
          {isKo
            ? '사용자가 입력 -> AI가 응답 생성 (1회성)'
            : 'User inputs -> AI generates response (one-shot)'}
        </li>
        <li>
          {isKo
            ? '텍스트 기반 응답만 제공'
            : 'Provides text-based responses only'}
        </li>
        <li>
          {isKo
            ? '실제 작업 수행 불가 (검색, 파일 생성 등)'
            : 'Cannot perform real tasks (searching, file creation, etc.)'}
        </li>
        <li>
          {isKo
            ? '매번 사용자가 다음 단계를 지시해야 함'
            : 'User must direct each next step every time'}
        </li>
      </ul>

      <h3>{isKo ? 'AI 에이전트 (Agent 방식)' : 'AI Agent (Agent Style)'}</h3>
      <p>
        {isKo
          ? 'AI 에이전트는 완전히 다른 패러다임입니다. 사용자가 최종 목표를 설정하면, AI가 스스로 계획을 수립하고, 필요한 도구를 활용하며, 자율적으로 작업을 실행하여 최종 결과를 전달합니다.'
          : 'AI agents represent a completely different paradigm. When a user sets a final goal, the AI creates its own plan, utilizes necessary tools, autonomously executes tasks, and delivers the final result.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '1단계: 목표 설정' : 'Step 1: Goal Setting'}</strong> -{' '}
          {isKo
            ? '사용자가 최종 목표를 자연어로 설명합니다.'
            : 'The user describes the final goal in natural language.'}
        </li>
        <li>
          <strong>{isKo ? '2단계: 계획 수립' : 'Step 2: Planning'}</strong> -{' '}
          {isKo
            ? 'AI가 목표를 분석하고 실행 가능한 단계별 계획을 스스로 수립합니다.'
            : 'The AI analyzes the goal and creates an executable step-by-step plan on its own.'}
        </li>
        <li>
          <strong>{isKo ? '3단계: 자율 실행' : 'Step 3: Autonomous Execution'}</strong> -{' '}
          {isKo
            ? 'AI가 계획에 따라 웹 검색, 코드 실행, 파일 생성 등을 자율적으로 수행합니다.'
            : 'The AI autonomously performs web searches, code execution, file creation, etc., according to the plan.'}
        </li>
        <li>
          <strong>{isKo ? '4단계: 결과 전달' : 'Step 4: Result Delivery'}</strong> -{' '}
          {isKo
            ? '완료된 작업 결과를 파일, 보고서 등의 형태로 사용자에게 전달합니다.'
            : 'Delivers completed work results to the user in the form of files, reports, etc.'}
        </li>
      </ul>

      <h3>{isKo ? 'Manus의 에이전트 구조' : 'Manus Agent Architecture'}</h3>
      <p>
        {isKo
          ? 'Manus의 에이전트 시스템은 크게 3가지 핵심 요소로 구성됩니다.'
          : 'Manus\'s agent system consists of three core components.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'LLM 기반 추론 (Reasoning)' : 'LLM-based Reasoning'}</strong> -{' '}
          {isKo
            ? '대규모 언어 모델을 활용하여 사용자의 요청을 이해하고, 논리적으로 사고하며, 최적의 실행 계획을 수립합니다. 복잡한 문제도 단계별로 분해하여 해결합니다.'
            : 'Uses large language models to understand user requests, think logically, and establish optimal execution plans. It breaks down complex problems into steps for resolution.'}
        </li>
        <li>
          <strong>{isKo ? '도구 사용 (Tool Use)' : 'Tool Use'}</strong> -{' '}
          {isKo
            ? '웹 브라우저, 코드 실행 환경, 파일 시스템 등 다양한 도구를 직접 제어합니다. 마치 사람이 컴퓨터를 사용하듯, AI가 가상 환경에서 실제 도구를 활용하여 작업을 수행합니다.'
            : 'Directly controls various tools including web browser, code execution environment, and file system. Just as a person uses a computer, the AI utilizes real tools in a virtual environment to perform tasks.'}
        </li>
        <li>
          <strong>{isKo ? '자율 판단 (Autonomous Decision)' : 'Autonomous Decision Making'}</strong> -{' '}
          {isKo
            ? '작업 중 예상치 못한 상황이 발생해도 AI가 스스로 판단하여 대안을 찾고 실행합니다. 실패한 단계를 자동으로 재시도하거나 다른 접근 방식으로 전환할 수 있습니다.'
            : 'Even when unexpected situations occur during tasks, the AI makes its own judgments to find and execute alternatives. It can automatically retry failed steps or switch to different approaches.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Difference from Existing AI
   =============================================== */
function DifferenceSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '기존 AI와 차이점' : 'Difference from Existing AI'}</h2>

      <h3>{isKo ? 'ChatGPT / Claude: 대화형 AI' : 'ChatGPT / Claude: Conversational AI'}</h3>
      <p>
        {isKo
          ? 'ChatGPT(OpenAI)와 Claude(Anthropic)는 대표적인 대화형 AI입니다. 사용자와 텍스트 기반의 대화를 통해 질문에 답변하고, 글을 작성하며, 아이디어를 제안합니다. 하지만 이들은 기본적으로 텍스트 응답만 생성할 뿐, 실제로 웹사이트를 방문하거나 코드를 실행하거나 파일을 만들지는 않습니다.'
          : 'ChatGPT (OpenAI) and Claude (Anthropic) are representative conversational AIs. They answer questions, write text, and suggest ideas through text-based conversation. However, they fundamentally only generate text responses and don\'t actually visit websites, execute code, or create files.'}
      </p>

      <h3>{isKo ? 'Manus: 실행형 AI 에이전트' : 'Manus: Execution-based AI Agent'}</h3>
      <p>
        {isKo
          ? 'Manus는 실행형 AI입니다. 단순히 "어떻게 하면 됩니다"라고 알려주는 것이 아니라, 실제로 작업을 수행합니다. 웹사이트를 직접 방문하여 정보를 수집하고, 코드를 작성하고 실행하며, Excel이나 PDF 같은 파일을 실제로 생성해 줍니다.'
          : 'Manus is an execution-based AI. Rather than simply telling you "here\'s how to do it," it actually performs the tasks. It visits websites to collect information, writes and executes code, and actually creates files like Excel or PDF documents.'}
      </p>

      <h3>{isKo ? '비교 테이블' : 'Comparison Table'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '항목' : 'Feature'}</th>
              <th>ChatGPT</th>
              <th>Claude</th>
              <th>Manus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '실행 방식' : 'Execution Mode'}</strong></td>
              <td>{isKo ? '대화형 (텍스트 응답)' : 'Conversational (text response)'}</td>
              <td>{isKo ? '대화형 (텍스트 응답)' : 'Conversational (text response)'}</td>
              <td>{isKo ? '자율 실행형 (실제 작업 수행)' : 'Autonomous (real task execution)'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '웹 접근' : 'Web Access'}</strong></td>
              <td>{isKo ? '제한적 (브라우징 플러그인)' : 'Limited (browsing plugin)'}</td>
              <td>{isKo ? '제한적' : 'Limited'}</td>
              <td>{isKo ? '완전한 웹 브라우저 제어' : 'Full web browser control'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '코드 실행' : 'Code Execution'}</strong></td>
              <td>{isKo ? 'Code Interpreter (제한적)' : 'Code Interpreter (limited)'}</td>
              <td>{isKo ? 'Artifacts (제한적)' : 'Artifacts (limited)'}</td>
              <td>{isKo ? '완전한 코드 실행 환경' : 'Full code execution environment'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '파일 생성' : 'File Creation'}</strong></td>
              <td>{isKo ? '제한적 (다운로드 형태)' : 'Limited (download format)'}</td>
              <td>{isKo ? '제한적' : 'Limited'}</td>
              <td>{isKo ? '다양한 형식 자동 생성' : 'Auto-creates various formats'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '비동기 작업' : 'Async Tasks'}</strong></td>
              <td>{isKo ? '불가' : 'No'}</td>
              <td>{isKo ? '불가' : 'No'}</td>
              <td>{isKo ? '백그라운드 실행 가능' : 'Background execution available'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '핵심 차이 요약' : 'Key Difference Summary'}</h3>
      <p>
        {isKo
          ? '쉽게 비유하면, ChatGPT와 Claude는 "매우 똑똑한 비서"처럼 조언과 정보를 제공하는 반면, Manus는 "실제로 일하는 직원"처럼 작업을 직접 수행하고 결과물을 전달합니다. 물론 각 AI에는 고유한 장점이 있으며, 사용 목적에 따라 적절한 도구를 선택하는 것이 중요합니다.'
          : 'To put it simply, ChatGPT and Claude are like "very smart advisors" who provide advice and information, while Manus is like "an actual employee" who performs tasks directly and delivers results. Of course, each AI has its own strengths, and it\'s important to choose the right tool based on your purpose.'}
      </p>
    </div>
  );
}

/* ===============================================
   Section: Account & Access
   =============================================== */
function AccountSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '계정 생성 & 접속' : 'Account & Access'}</h2>

      <h3>{isKo ? 'manus.app 접속' : 'Access manus.app'}</h3>
      <p>
        {isKo
          ? 'Manus를 사용하려면 먼저 공식 웹사이트인 manus.app에 접속해야 합니다. 웹 브라우저에서 manus.app을 입력하면 Manus의 메인 페이지로 이동합니다.'
          : 'To use Manus, you first need to visit the official website at manus.app. Enter manus.app in your web browser to navigate to the Manus main page.'}
      </p>

      <h3>{isKo ? '계정 생성 방법' : 'How to Create an Account'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '1. Google 계정으로 가입' : '1. Sign up with Google'}</strong> -{' '}
          {isKo
            ? '가장 빠른 방법으로, "Sign up with Google" 버튼을 클릭하면 기존 Google 계정을 사용하여 즉시 가입할 수 있습니다. 별도의 비밀번호 설정이 필요 없어 편리합니다.'
            : 'The fastest method — click "Sign up with Google" to instantly register using your existing Google account. No separate password setup is needed.'}
        </li>
        <li>
          <strong>{isKo ? '2. 이메일로 가입' : '2. Sign up with Email'}</strong> -{' '}
          {isKo
            ? 'Google 계정을 사용하지 않으려면, 이메일 주소를 입력하고 비밀번호를 설정하여 가입할 수 있습니다. 가입 후 이메일 인증이 필요할 수 있습니다.'
            : 'If you prefer not to use a Google account, you can register by entering your email address and setting a password. Email verification may be required after registration.'}
        </li>
      </ul>

      <h3>{isKo ? '초대 코드 시스템' : 'Invitation Code System'}</h3>
      <p>
        {isKo
          ? 'Manus는 출시 초기에 초대 코드(Invite Code) 시스템을 운영했습니다. 폭발적인 관심으로 인해 서비스 안정성을 확보하기 위해 대기열(Waitlist) 방식을 도입했으며, 초대 코드를 가진 사용자만 우선 접속할 수 있었습니다. 현재는 점차 접근이 확대되고 있으나, 가입 시 대기열에 등록되는 경우가 있을 수 있습니다.'
          : 'Manus initially operated an Invitation Code system. Due to overwhelming interest, a waitlist system was introduced to ensure service stability, allowing only users with invite codes to access the platform first. Access is gradually expanding, but you may still be placed on a waitlist upon registration.'}
      </p>

      <h3>{isKo ? '무료 플랜 vs Pro 플랜' : 'Free Plan vs Pro Plan'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '무료 플랜 (Free)' : 'Free Plan'}</strong> -{' '}
          {isKo
            ? '기본적인 Manus 기능을 사용할 수 있습니다. 일일 작업 횟수에 제한이 있으며, 실행 시간과 리소스에 제약이 있을 수 있습니다. Manus를 처음 체험해보기에 적합합니다.'
            : 'Access to basic Manus features. There are daily task limits, and execution time and resources may be constrained. Suitable for trying out Manus for the first time.'}
        </li>
        <li>
          <strong>{isKo ? 'Pro 플랜 (유료)' : 'Pro Plan (Paid)'}</strong> -{' '}
          {isKo
            ? '더 많은 일일 작업 횟수, 더 긴 실행 시간, 우선 처리, 고급 기능 접근 등의 혜택을 제공합니다. 업무에 Manus를 본격적으로 활용하려는 사용자에게 추천합니다.'
            : 'Offers more daily task allowances, longer execution times, priority processing, and access to advanced features. Recommended for users who want to seriously utilize Manus for work.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Interface Guide
   =============================================== */
function InterfaceSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '인터페이스 이해' : 'Interface Guide'}</h2>

      <h3>{isKo ? '대시보드 구조' : 'Dashboard Structure'}</h3>
      <p>
        {isKo
          ? 'Manus에 로그인하면 대시보드가 표시됩니다. 대시보드는 크게 3가지 영역으로 구성됩니다.'
          : 'When you log into Manus, you\'ll see the dashboard. The dashboard is organized into three main areas.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '작업 목록 (Task List)' : 'Task List'}</strong> -{' '}
          {isKo
            ? '진행 중인 작업과 완료된 작업을 한눈에 확인할 수 있습니다. 각 작업의 상태(진행 중, 완료, 실패)가 아이콘으로 표시됩니다.'
            : 'View ongoing and completed tasks at a glance. Each task\'s status (in progress, completed, failed) is displayed with icons.'}
        </li>
        <li>
          <strong>{isKo ? '새 작업 시작 (New Task)' : 'New Task'}</strong> -{' '}
          {isKo
            ? '"New Task" 또는 "+" 버튼을 클릭하여 새로운 작업을 시작할 수 있습니다. 작업 입력 창이 열리면 원하는 작업을 자연어로 입력합니다.'
            : 'Click "New Task" or the "+" button to start a new task. When the task input window opens, describe your desired task in natural language.'}
        </li>
        <li>
          <strong>{isKo ? '작업 히스토리 (Task History)' : 'Task History'}</strong> -{' '}
          {isKo
            ? '이전에 수행한 모든 작업의 기록을 확인할 수 있습니다. 과거 작업을 다시 열어 결과를 확인하거나, 비슷한 작업을 다시 실행할 수 있습니다.'
            : 'View records of all previously performed tasks. You can reopen past tasks to check results or re-run similar tasks.'}
        </li>
      </ul>

      <h3>{isKo ? '작업 입력 창' : 'Task Input Window'}</h3>
      <p>
        {isKo
          ? '작업 입력 창은 Manus에게 작업을 요청하는 핵심 인터페이스입니다. 일반 채팅처럼 자연어로 원하는 작업을 입력하면 됩니다. 예를 들어 "서울 3일 여행 일정을 만들어줘" 또는 "이 데이터를 분석해서 보고서로 만들어줘"와 같이 구체적으로 요청합니다.'
          : 'The task input window is the core interface for requesting tasks from Manus. Simply describe your desired task in natural language, just like chatting. For example, "Create a 3-day Seoul travel itinerary" or "Analyze this data and create a report."'}
      </p>

      <h3>{isKo ? '실행 화면' : 'Execution Screen'}</h3>
      <p>
        {isKo
          ? '작업이 시작되면 실행 화면이 나타납니다. 이 화면은 두 개의 패널로 구성됩니다.'
          : 'When a task starts, the execution screen appears. This screen consists of two panels.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '왼쪽: 대화 패널 (Chat Panel)' : 'Left: Chat Panel'}</strong> -{' '}
          {isKo
            ? 'Manus가 현재 어떤 작업을 수행하고 있는지 텍스트로 설명합니다. 사고 과정, 계획, 현재 단계 등을 실시간으로 확인할 수 있습니다.'
            : 'Manus explains in text what task it\'s currently performing. You can view the thinking process, plans, and current steps in real time.'}
        </li>
        <li>
          <strong>{isKo ? '오른쪽: 실행 화면 (Virtual Computer)' : 'Right: Execution Screen (Virtual Computer)'}</strong> -{' '}
          {isKo
            ? 'Manus가 실제로 작업하는 가상 컴퓨터 화면이 표시됩니다. 웹 브라우저가 열리고, 검색하고, 코드를 실행하는 모습을 실시간으로 관찰할 수 있습니다.'
            : 'Shows the virtual computer screen where Manus is actually working. You can observe in real time as it opens web browsers, searches, and executes code.'}
        </li>
      </ul>

      <h3>{isKo ? '투명한 작업 과정' : 'Transparent Work Process'}</h3>
      <p>
        {isKo
          ? 'Manus의 가장 큰 특징 중 하나는 투명성입니다. 사용자는 AI의 모든 실행 과정을 실시간으로 관찰할 수 있습니다. AI가 어떤 웹사이트를 방문했는지, 어떤 코드를 실행했는지, 어떤 파일을 생성했는지를 모두 확인할 수 있어, 결과에 대한 신뢰도를 높일 수 있습니다.'
          : 'One of Manus\'s biggest features is transparency. Users can observe all of the AI\'s execution processes in real time. You can verify which websites the AI visited, what code it executed, and what files it created, increasing trust in the results.'}
      </p>
    </div>
  );
}

/* ===============================================
   Section: First Task
   =============================================== */
function FirstTaskSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '첫 번째 작업' : 'First Task'}</h2>

      <h3>{isKo ? '간단한 예시: 여행 일정 만들기' : 'Simple Example: Create a Travel Itinerary'}</h3>
      <p>
        {isKo
          ? 'Manus를 처음 사용한다면, 간단한 작업부터 시작해 보겠습니다. 작업 입력 창에 다음과 같이 입력해 보세요.'
          : 'If you\'re using Manus for the first time, let\'s start with a simple task. Try entering the following in the task input window.'}
      </p>
      <div className="guide-example-box">
        <p><strong>{isKo ? '예시 프롬프트:' : 'Example Prompt:'}</strong></p>
        <p className="guide-example-text">
          {isKo
            ? '"서울 3일 여행 일정을 만들어줘. 주요 관광지, 맛집, 이동 경로를 포함하고, Excel 파일로 정리해줘."'
            : '"Create a 3-day Seoul travel itinerary. Include major tourist spots, restaurants, and travel routes, and organize it in an Excel file."'}
        </p>
      </div>

      <h3>{isKo ? 'Manus가 하는 일' : 'What Manus Does'}</h3>
      <p>
        {isKo
          ? '위 프롬프트를 입력하면, Manus는 다음과 같은 작업을 자율적으로 수행합니다.'
          : 'When you enter the above prompt, Manus autonomously performs the following tasks.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '1. 웹에서 관광지 검색' : '1. Search Tourist Spots on the Web'}</strong> -{' '}
          {isKo
            ? '실제 웹 브라우저를 열고 서울의 인기 관광지, 맛집, 교통 정보를 검색합니다. 여러 웹사이트를 탐색하며 최신 정보를 수집합니다.'
            : 'Opens a real web browser and searches for popular tourist spots, restaurants, and transportation info in Seoul. Browses multiple websites to collect up-to-date information.'}
        </li>
        <li>
          <strong>{isKo ? '2. 일정표 작성' : '2. Create the Itinerary'}</strong> -{' '}
          {isKo
            ? '수집한 정보를 바탕으로 3일간의 상세한 여행 일정을 작성합니다. 시간대별 일정, 이동 시간, 비용 예상 등을 포함합니다.'
            : 'Based on collected information, creates a detailed 3-day travel itinerary. Includes time-based schedules, travel times, and estimated costs.'}
        </li>
        <li>
          <strong>{isKo ? '3. Excel/PDF 파일 생성' : '3. Generate Excel/PDF Files'}</strong> -{' '}
          {isKo
            ? '작성한 일정을 요청한 형식(Excel, PDF 등)으로 파일을 자동 생성합니다. 보기 좋게 서식이 적용된 완성된 파일을 제공합니다.'
            : 'Automatically generates files in the requested format (Excel, PDF, etc.) from the created itinerary. Provides a finished file with proper formatting applied.'}
        </li>
      </ul>

      <h3>{isKo ? '작업 결과 확인' : 'Checking Task Results'}</h3>
      <p>
        {isKo
          ? '작업이 완료되면 Manus가 생성한 파일을 다운로드할 수 있습니다. 대화 패널에서 "다운로드" 링크를 클릭하거나, 작업 히스토리에서 해당 작업을 선택하여 결과 파일을 확인할 수 있습니다.'
          : 'When the task is complete, you can download the files Manus created. Click the "Download" link in the chat panel, or select the task from the task history to view the result files.'}
      </p>

      <h3>{isKo ? '좋은 프롬프트 작성 팁' : 'Tips for Writing Good Prompts'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '구체적인 요구사항 명시' : 'Specify Concrete Requirements'}</strong> -{' '}
          {isKo
            ? '"여행 일정 만들어줘"보다 "서울 3일 여행 일정을 만들어줘. 예산은 50만원 이내로"처럼 구체적으로 요청하세요. 목적지, 기간, 예산, 취향 등을 포함하면 더 좋은 결과를 얻을 수 있습니다.'
            : 'Instead of "Create a travel itinerary," be specific like "Create a 3-day Seoul travel itinerary within a 500,000 KRW budget." Including destination, duration, budget, and preferences leads to better results.'}
        </li>
        <li>
          <strong>{isKo ? '출력 형식 지정' : 'Specify Output Format'}</strong> -{' '}
          {isKo
            ? '"Excel로 정리해줘", "PDF 보고서로 만들어줘", "PowerPoint 프레젠테이션으로 만들어줘" 등 원하는 출력 형식을 명확히 지정하면, Manus가 해당 형식의 파일을 생성합니다.'
            : 'Clearly specify your desired output format: "Organize in Excel," "Create as a PDF report," "Make a PowerPoint presentation," etc. Manus will generate files in the specified format.'}
        </li>
        <li>
          <strong>{isKo ? '단계별 요청' : 'Step-by-step Requests'}</strong> -{' '}
          {isKo
            ? '복잡한 작업은 한 번에 모든 것을 요청하기보다, 단계별로 나누어 요청하면 더 정확한 결과를 얻을 수 있습니다.'
            : 'For complex tasks, breaking the request into steps rather than asking for everything at once can yield more accurate results.'}
        </li>
        <li>
          <strong>{isKo ? '참고 자료 제공' : 'Provide Reference Materials'}</strong> -{' '}
          {isKo
            ? '관련 파일이나 URL을 함께 제공하면, Manus가 해당 자료를 참고하여 더 정확한 결과물을 만들어 냅니다.'
            : 'Providing related files or URLs allows Manus to reference these materials and produce more accurate results.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Workflow Basics
   =============================================== */
function WorkflowSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '워크플로우 기초' : 'Workflow Basics'}</h2>

      <h3>{isKo ? 'Manus 작업의 4단계' : 'The 4 Stages of Manus Tasks'}</h3>
      <p>
        {isKo
          ? 'Manus의 모든 작업은 4단계의 워크플로우를 따릅니다. 각 단계를 이해하면 Manus를 더 효과적으로 활용할 수 있습니다.'
          : 'Every Manus task follows a 4-stage workflow. Understanding each stage helps you use Manus more effectively.'}
      </p>

      <h4>{isKo ? '1단계: 작업 요청 (Request)' : 'Stage 1: Request'}</h4>
      <p>
        {isKo
          ? '사용자가 작업 입력 창에 원하는 작업을 자연어로 입력합니다. 이 단계에서 Manus는 사용자의 요청을 분석하여 의도를 파악합니다. 모호한 부분이 있으면 추가 질문을 할 수도 있습니다.'
          : 'The user enters the desired task in natural language in the task input window. In this stage, Manus analyzes the user\'s request to understand the intent. If there are ambiguous parts, it may ask additional questions.'}
      </p>

      <h4>{isKo ? '2단계: 계획 수립 (Planning)' : 'Stage 2: Planning'}</h4>
      <p>
        {isKo
          ? 'Manus가 작업을 완수하기 위한 단계별 계획을 수립합니다. 어떤 도구를 사용할지, 어떤 순서로 작업할지, 어떤 정보가 필요한지를 결정합니다. 이 계획은 대화 패널에서 실시간으로 확인할 수 있습니다.'
          : 'Manus creates a step-by-step plan to complete the task. It determines which tools to use, the order of operations, and what information is needed. You can view this plan in real time through the chat panel.'}
      </p>

      <h4>{isKo ? '3단계: 실행 (Execution)' : 'Stage 3: Execution'}</h4>
      <p>
        {isKo
          ? '수립한 계획에 따라 Manus가 실제 작업을 수행합니다. 웹 브라우저를 열고 검색하고, 코드를 작성하고 실행하며, 파일을 생성합니다. 가상 컴퓨터 화면에서 이 모든 과정을 실시간으로 관찰할 수 있습니다.'
          : 'Manus performs the actual tasks according to the plan. It opens web browsers, searches, writes and executes code, and creates files. You can observe the entire process in real time on the virtual computer screen.'}
      </p>

      <h4>{isKo ? '4단계: 결과 전달 (Delivery)' : 'Stage 4: Delivery'}</h4>
      <p>
        {isKo
          ? '모든 작업이 완료되면 Manus가 결과를 정리하여 사용자에게 전달합니다. 생성된 파일은 다운로드 링크로 제공되며, 작업 과정 요약과 함께 결과물을 설명합니다.'
          : 'Once all tasks are complete, Manus organizes the results and delivers them to the user. Generated files are provided via download links, along with a summary of the work process and explanation of the deliverables.'}
      </p>

      <h3>{isKo ? '작업이 오래 걸릴 때: 비동기 처리' : 'When Tasks Take Long: Asynchronous Processing'}</h3>
      <p>
        {isKo
          ? '복잡한 작업은 수 분에서 수십 분까지 걸릴 수 있습니다. Manus는 비동기 처리를 지원하므로, 작업을 요청한 후 브라우저를 닫거나 다른 일을 해도 됩니다. 작업은 백그라운드에서 계속 실행되며, 완료되면 알림을 받을 수 있습니다.'
          : 'Complex tasks can take from several minutes to tens of minutes. Manus supports asynchronous processing, so you can close the browser or do other things after requesting a task. The task continues running in the background, and you\'ll be notified when it\'s complete.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '백그라운드 실행' : 'Background Execution'}</strong> -{' '}
          {isKo
            ? '작업을 시작한 후 페이지를 닫아도 Manus가 계속 작업합니다. 나중에 다시 접속하면 작업 히스토리에서 진행 상황을 확인할 수 있습니다.'
            : 'Manus continues working even if you close the page after starting a task. When you reconnect later, you can check progress in the task history.'}
        </li>
        <li>
          <strong>{isKo ? '완료 알림' : 'Completion Notification'}</strong> -{' '}
          {isKo
            ? '작업이 완료되면 이메일 또는 브라우저 알림으로 통보를 받을 수 있습니다. 긴 작업을 기다리지 않아도 됩니다.'
            : 'You can receive notifications via email or browser alerts when a task is complete. No need to wait for lengthy tasks.'}
        </li>
      </ul>

      <h3>{isKo ? '실패 시 대처법' : 'How to Handle Failures'}</h3>
      <p>
        {isKo
          ? '간혹 Manus가 작업을 완료하지 못하거나 예상과 다른 결과를 제공할 수 있습니다. 이런 경우 다음 방법을 시도해 보세요.'
          : 'Occasionally, Manus may fail to complete a task or provide unexpected results. In such cases, try the following methods.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '프롬프트 수정' : 'Modify the Prompt'}</strong> -{' '}
          {isKo
            ? '요청이 너무 모호하거나 광범위했을 수 있습니다. 더 구체적이고 명확한 요청으로 다시 시도해 보세요. 원하는 결과물의 형태, 포함해야 할 내용, 제외할 내용 등을 상세히 기술합니다.'
            : 'The request may have been too vague or broad. Try again with a more specific and clear request. Describe in detail the desired output format, content to include, and content to exclude.'}
        </li>
        <li>
          <strong>{isKo ? '작업 분할' : 'Split the Task'}</strong> -{' '}
          {isKo
            ? '하나의 큰 작업을 여러 작은 작업으로 나누어 요청해 보세요. 예를 들어, "시장 조사 보고서를 만들어줘" 대신 "1) 경쟁사 목록을 조사해줘" → "2) 각 경쟁사의 시장 점유율을 분석해줘" → "3) 분석 결과를 보고서로 정리해줘"로 나누어 요청하면 더 정확한 결과를 얻을 수 있습니다.'
            : 'Try dividing one large task into several smaller tasks. For example, instead of "Create a market research report," try: "1) Research a list of competitors" -> "2) Analyze each competitor\'s market share" -> "3) Organize the analysis into a report." Breaking it down yields more accurate results.'}
        </li>
      </ul>
    </div>
  );
}
