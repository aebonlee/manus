import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'chatgpt-vs', icon: 'fa-message', ko: 'ChatGPT vs Manus', en: 'ChatGPT vs Manus' },
  { id: 'claude-vs', icon: 'fa-brain', ko: 'Claude vs Manus', en: 'Claude vs Manus' },
  { id: 'scenarios', icon: 'fa-list-check', ko: '사용 시나리오별 비교', en: 'Scenario Comparison' },
  { id: 'strengths', icon: 'fa-scale-balanced', ko: '강점 & 약점', en: 'Strengths & Weaknesses' },
  { id: 'guide', icon: 'fa-compass', ko: '선택 가이드', en: 'Selection Guide' },
];

function ChatGPTvsSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-message" />
        ChatGPT vs Manus
      </h2>

      <div className="guide-card">
        <h3>{isKo ? 'ChatGPT 개요' : 'ChatGPT Overview'}</h3>
        <p>
          {isKo
            ? 'ChatGPT는 OpenAI가 개발한 대화형 AI로, GPT-4o 모델을 기반으로 합니다. 세계에서 가장 널리 사용되는 AI 도구로, 자연어를 통한 대화, 질문 답변, 글쓰기, 코드 작성 등 다양한 작업을 수행합니다. 직관적인 대화 인터페이스로 누구나 쉽게 사용할 수 있습니다.'
            : 'ChatGPT is a conversational AI developed by OpenAI, based on the GPT-4o model. As the most widely used AI tool in the world, it performs various tasks such as conversations, Q&A, writing, and coding through natural language. Its intuitive conversational interface makes it accessible to anyone.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Manus 개요' : 'Manus Overview'}</h3>
        <p>
          {isKo
            ? 'Manus는 자율형 AI 에이전트로, 단순한 대화를 넘어 실제 작업을 수행할 수 있습니다. 웹 브라우저를 직접 조작하고, 코드를 실행하고, 파일을 생성하며, 복잡한 멀티스텝 워크플로우를 자율적으로 처리합니다. 사용자는 목표만 설정하면 Manus가 나머지를 수행합니다.'
            : 'Manus is an autonomous AI agent that goes beyond simple conversation to perform real tasks. It directly controls web browsers, executes code, creates files, and autonomously handles complex multi-step workflows. Users simply set the goal and Manus handles the rest.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '핵심 차이점' : 'Key Differences'}</h3>
        <p>
          {isKo
            ? 'ChatGPT와 Manus의 가장 근본적인 차이는 작동 방식에 있습니다:'
            : 'The most fundamental difference between ChatGPT and Manus lies in how they operate:'}
        </p>
        <ul>
          <li>
            <strong>ChatGPT:</strong>{' '}
            {isKo
              ? '대화 기반으로 동작하며, 텍스트 응답을 생성합니다. 사용자가 각 단계를 직접 지시해야 합니다.'
              : 'Operates on a conversation basis, generating text responses. Users must direct each step manually.'}
          </li>
          <li>
            <strong>Manus:</strong>{' '}
            {isKo
              ? '목표 기반으로 동작하며, 실제 실행(브라우저, 코드, 파일)을 수행합니다. 자율적으로 여러 단계를 계획하고 수행합니다.'
              : 'Operates on a goal basis, performing actual execution (browser, code, files). Autonomously plans and executes multiple steps.'}
          </li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '상세 비교' : 'Detailed Comparison'}</h3>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{isKo ? '항목' : 'Category'}</th>
                <th>ChatGPT</th>
                <th>Manus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '작동 방식' : 'Operation Mode'}</td>
                <td>{isKo ? '대화형' : 'Conversational'}</td>
                <td>{isKo ? '자율 실행' : 'Autonomous Execution'}</td>
              </tr>
              <tr>
                <td>{isKo ? '웹 접근' : 'Web Access'}</td>
                <td>{isKo ? '제한적 (Browsing)' : 'Limited (Browsing)'}</td>
                <td>{isKo ? '완전한 브라우저 제어' : 'Full Browser Control'}</td>
              </tr>
              <tr>
                <td>{isKo ? '코드 실행' : 'Code Execution'}</td>
                <td>{isKo ? '코드 인터프리터' : 'Code Interpreter'}</td>
                <td>{isKo ? '가상환경 직접 실행' : 'Direct Virtual Env Execution'}</td>
              </tr>
              <tr>
                <td>{isKo ? '파일 생성' : 'File Creation'}</td>
                <td>{isKo ? '제한적' : 'Limited'}</td>
                <td>{isKo ? '다양한 형식' : 'Various Formats'}</td>
              </tr>
              <tr>
                <td>{isKo ? '비동기 작업' : 'Async Tasks'}</td>
                <td>{isKo ? '불가' : 'Not Available'}</td>
                <td>{isKo ? '지원' : 'Supported'}</td>
              </tr>
              <tr>
                <td>{isKo ? '플러그인/도구' : 'Plugins/Tools'}</td>
                <td>{isKo ? 'GPTs/플러그인' : 'GPTs/Plugins'}</td>
                <td>{isKo ? '내장 도구' : 'Built-in Tools'}</td>
              </tr>
              <tr>
                <td>{isKo ? '가격' : 'Pricing'}</td>
                <td>$20/{isKo ? '월' : 'mo'}</td>
                <td>$39/{isKo ? '월~' : 'mo+'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'ChatGPT가 더 나은 경우' : 'When ChatGPT is Better'}</h3>
        <ul>
          <li>{isKo ? '빠른 질문과 답변이 필요할 때' : 'When you need quick Q&A'}</li>
          <li>{isKo ? '자연스러운 대화를 통한 아이디어 브레인스토밍' : 'Brainstorming ideas through natural conversation'}</li>
          <li>{isKo ? '간단한 글쓰기 및 번역 작업' : 'Simple writing and translation tasks'}</li>
          <li>{isKo ? 'GPTs 생태계의 다양한 커스텀 도구 활용' : 'Leveraging various custom tools in the GPTs ecosystem'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Manus가 더 나은 경우' : 'When Manus is Better'}</h3>
        <ul>
          <li>{isKo ? '여러 단계의 복잡한 작업을 자동화해야 할 때' : 'When you need to automate complex multi-step tasks'}</li>
          <li>{isKo ? '실제 웹 브라우저 조작이 필요한 작업' : 'Tasks requiring actual web browser manipulation'}</li>
          <li>{isKo ? '리서치 보고서 자동 생성' : 'Automatic research report generation'}</li>
          <li>{isKo ? '코드를 작성하고 바로 실행하여 결과물을 생성해야 할 때' : 'When you need to write code and execute it immediately to produce results'}</li>
        </ul>
      </div>
    </div>
  );
}

function ClaudevsSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-brain" />
        Claude vs Manus
      </h2>

      <div className="guide-card">
        <h3>{isKo ? 'Claude 개요' : 'Claude Overview'}</h3>
        <p>
          {isKo
            ? 'Claude는 Anthropic이 개발한 AI 어시스턴트로, 200K 토큰의 긴 컨텍스트 윈도우와 안전성을 중시하는 설계가 특징입니다. 긴 문서 분석, 코드 리뷰, 전문적인 글쓰기에 뛰어난 성능을 보이며, Artifacts 기능을 통해 코드와 문서를 실시간으로 생성할 수 있습니다.'
            : 'Claude is an AI assistant developed by Anthropic, featuring a 200K token long context window and safety-focused design. It excels in long document analysis, code review, and professional writing, with the ability to generate code and documents in real-time through Artifacts.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Manus와의 핵심 차이' : 'Key Differences from Manus'}</h3>
        <ul>
          <li>
            <strong>Claude:</strong>{' '}
            {isKo
              ? '대화형 AI로, 긴 문서 분석에 강점이 있습니다. Artifacts 기능으로 코드와 문서를 생성할 수 있지만, 실제 실행은 제한적입니다.'
              : 'A conversational AI with strengths in long document analysis. Can generate code and documents through Artifacts, but actual execution is limited.'}
          </li>
          <li>
            <strong>Manus:</strong>{' '}
            {isKo
              ? '자율 실행형 에이전트로, 실제 웹 작업과 멀티스텝 워크플로우를 자동으로 수행합니다. 브라우저 조작, 파일 생성, 코드 실행까지 직접 처리합니다.'
              : 'An autonomous execution agent that automatically performs real web tasks and multi-step workflows. Directly handles browser manipulation, file creation, and code execution.'}
          </li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '상세 비교' : 'Detailed Comparison'}</h3>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{isKo ? '항목' : 'Category'}</th>
                <th>Claude</th>
                <th>Manus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '컨텍스트 길이' : 'Context Length'}</td>
                <td>{isKo ? '200K 토큰' : '200K Tokens'}</td>
                <td>{isKo ? '표준' : 'Standard'}</td>
              </tr>
              <tr>
                <td>{isKo ? '코드 실행' : 'Code Execution'}</td>
                <td>Artifacts</td>
                <td>{isKo ? '가상환경 직접 실행' : 'Direct Virtual Env Execution'}</td>
              </tr>
              <tr>
                <td>{isKo ? '웹 접근' : 'Web Access'}</td>
                <td>{isKo ? 'MCP 도구' : 'MCP Tools'}</td>
                <td>{isKo ? '완전한 브라우저' : 'Full Browser'}</td>
              </tr>
              <tr>
                <td>{isKo ? '파일 처리' : 'File Handling'}</td>
                <td>{isKo ? '업로드/분석' : 'Upload/Analysis'}</td>
                <td>{isKo ? '생성/변환/다운로드' : 'Create/Convert/Download'}</td>
              </tr>
              <tr>
                <td>{isKo ? '자율 실행' : 'Autonomous Execution'}</td>
                <td>{isKo ? '제한적' : 'Limited'}</td>
                <td>{isKo ? '완전 자율' : 'Fully Autonomous'}</td>
              </tr>
              <tr>
                <td>{isKo ? '안전성' : 'Safety'}</td>
                <td>{isKo ? '매우 높음' : 'Very High'}</td>
                <td>{isKo ? '높음' : 'High'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Claude가 더 나은 경우' : 'When Claude is Better'}</h3>
        <ul>
          <li>{isKo ? '긴 문서(논문, 보고서, 계약서)의 분석 및 요약' : 'Analysis and summarization of long documents (papers, reports, contracts)'}</li>
          <li>{isKo ? '안전하고 신뢰할 수 있는 응답이 중요할 때' : 'When safe and reliable responses are important'}</li>
          <li>{isKo ? '코드 리뷰 및 기존 코드 분석' : 'Code review and existing code analysis'}</li>
          <li>{isKo ? 'Artifacts를 활용한 실시간 프로토타이핑' : 'Real-time prototyping using Artifacts'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Manus가 더 나은 경우' : 'When Manus is Better'}</h3>
        <ul>
          <li>{isKo ? '복잡한 웹 작업 자동화 (데이터 수집, 양식 작성 등)' : 'Complex web task automation (data collection, form filling, etc.)'}</li>
          <li>{isKo ? '멀티스텝 프로젝트의 자동 실행' : 'Automatic execution of multi-step projects'}</li>
          <li>{isKo ? '실제 파일을 생성하고 다운로드해야 할 때' : 'When you need to create and download actual files'}</li>
          <li>{isKo ? '비동기적으로 장시간 작업을 실행해야 할 때' : 'When you need to run long tasks asynchronously'}</li>
        </ul>
      </div>
    </div>
  );
}

function ScenariosSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-list-check" />
        {isKo ? '사용 시나리오별 비교' : 'Scenario-based Comparison'}
      </h2>

      <div className="guide-card">
        <h3>{isKo ? '시나리오별 최적의 도구' : 'Best Tool for Each Scenario'}</h3>
        <p>
          {isKo
            ? '각 사용 시나리오에 따라 가장 적합한 AI 도구가 다릅니다. 아래에서 상황별로 어떤 도구를 선택해야 하는지 확인하세요.'
            : 'The most suitable AI tool varies by scenario. Check below to see which tool to choose for each situation.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>1. {isKo ? '간단한 질문/대화' : 'Simple Q&A / Conversation'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} ChatGPT</strong> ✅
        </p>
        <p>
          {isKo
            ? '빠르고 자연스러운 대화에 가장 적합합니다. 일상적인 질문, 번역, 요약 등 간단한 작업에서 ChatGPT의 응답 속도와 자연스러움이 돋보입니다.'
            : 'Best suited for fast, natural conversation. ChatGPT excels in response speed and naturalness for everyday questions, translations, and summaries.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>2. {isKo ? '긴 문서 요약/분석' : 'Long Document Summarization / Analysis'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} Claude</strong> ✅
        </p>
        <p>
          {isKo
            ? '200K 토큰 컨텍스트 윈도우 덕분에 논문, 보고서, 법률 문서 등 긴 문서를 한 번에 분석하고 요약할 수 있습니다. 문서의 핵심을 정확하게 파악합니다.'
            : 'Thanks to its 200K token context window, it can analyze and summarize long documents such as papers, reports, and legal documents at once. It accurately identifies the core of documents.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>3. {isKo ? '경쟁사 리서치 보고서' : 'Competitor Research Report'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} Manus</strong> ✅
        </p>
        <p>
          {isKo
            ? '웹 검색부터 데이터 수집, 분석, 보고서 자동 생성까지 전 과정을 자율적으로 수행합니다. 여러 웹사이트를 탐색하고 정보를 종합하여 완성된 보고서를 제공합니다.'
            : 'Autonomously performs the entire process from web search to data collection, analysis, and automatic report generation. Explores multiple websites and synthesizes information to deliver a complete report.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>4. {isKo ? '코드 작성/디버깅' : 'Code Writing / Debugging'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} ChatGPT / Claude</strong>
        </p>
        <p>
          {isKo
            ? '대화형 코드 지원에서는 ChatGPT와 Claude가 뛰어납니다. 코드 설명, 리팩토링, 버그 찾기 등 개발자와의 상호작용이 중요한 작업에 적합합니다.'
            : 'ChatGPT and Claude excel at interactive code assistance. They are suitable for tasks where developer interaction is important, such as code explanation, refactoring, and bug finding.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>5. {isKo ? '웹사이트 제작' : 'Website Creation'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} Manus</strong> ✅
        </p>
        <p>
          {isKo
            ? 'Web App Builder를 통해 자연어 명령만으로 완전한 웹사이트를 생성, 배포까지 할 수 있습니다. 데이터베이스, 결제 시스템까지 풀스택 앱을 자동으로 구축합니다.'
            : 'Through Web App Builder, you can create and deploy complete websites with just natural language commands. Automatically builds full-stack apps including databases and payment systems.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>6. {isKo ? '데이터 수집/스크래핑' : 'Data Collection / Scraping'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} Manus</strong> ✅
        </p>
        <p>
          {isKo
            ? '실제 브라우저를 직접 조작하여 웹 데이터를 수집합니다. 로그인이 필요한 사이트, 동적 페이지, 페이지네이션 등 복잡한 스크래핑도 자동으로 처리합니다.'
            : 'Collects web data by directly controlling a real browser. Automatically handles complex scraping including sites requiring login, dynamic pages, and pagination.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>7. {isKo ? '창의적 글쓰기' : 'Creative Writing'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} ChatGPT / Claude</strong>
        </p>
        <p>
          {isKo
            ? '소설, 시, 마케팅 카피 등 창의적 글쓰기에서는 대화형 AI가 더 유연합니다. 실시간으로 피드백을 주고받으며 글을 다듬을 수 있습니다.'
            : 'For creative writing such as novels, poetry, and marketing copy, conversational AI is more flexible. You can refine text through real-time feedback exchange.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>8. {isKo ? '자동화 워크플로우' : 'Automated Workflows'}</h3>
        <p>
          <strong>{isKo ? '추천:' : 'Recommended:'} Manus</strong> ✅
        </p>
        <p>
          {isKo
            ? '여러 단계에 걸친 복잡한 작업을 자율적으로 실행합니다. 데이터 수집 → 분석 → 시각화 → 보고서 생성과 같은 연쇄 작업을 중간 개입 없이 완료합니다.'
            : 'Autonomously executes complex tasks spanning multiple steps. Completes chain tasks like data collection, analysis, visualization, and report generation without intermediate intervention.'}
        </p>
      </div>
    </div>
  );
}

function StrengthsSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-scale-balanced" />
        {isKo ? '강점 & 약점 분석' : 'Strengths & Weaknesses'}
      </h2>

      <div className="guide-card">
        <h3>{isKo ? 'ChatGPT 강점' : 'ChatGPT Strengths'}</h3>
        <ul>
          <li>{isKo ? '가장 큰 사용자 커뮤니티와 풍부한 사용 사례' : 'Largest user community with abundant use cases'}</li>
          <li>{isKo ? 'GPTs 생태계를 통한 수천 개의 커스텀 도구' : 'Thousands of custom tools through the GPTs ecosystem'}</li>
          <li>{isKo ? '빠른 응답 속도와 자연스러운 대화' : 'Fast response speed and natural conversation'}</li>
          <li>{isKo ? '다양한 플러그인과 통합 기능 (DALL-E, Browsing 등)' : 'Various plugins and integrations (DALL-E, Browsing, etc.)'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'ChatGPT 약점' : 'ChatGPT Weaknesses'}</h3>
        <ul>
          <li>{isKo ? '자율적인 작업 실행이 불가능 (항상 사용자 지시 필요)' : 'Cannot execute tasks autonomously (always requires user direction)'}</li>
          <li>{isKo ? '실시간 웹 접근이 제한적' : 'Limited real-time web access'}</li>
          <li>{isKo ? '할루시네이션 (잘못된 정보를 자신있게 제시하는 현상)' : 'Hallucination (confidently presenting incorrect information)'}</li>
          <li>{isKo ? '복잡한 멀티스텝 작업에 부적합' : 'Unsuitable for complex multi-step tasks'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Claude 강점' : 'Claude Strengths'}</h3>
        <ul>
          <li>{isKo ? '200K 토큰의 매우 긴 컨텍스트 윈도우' : 'Very long 200K token context window'}</li>
          <li>{isKo ? '안전성과 정직함을 중시하는 응답' : 'Responses prioritizing safety and honesty'}</li>
          <li>{isKo ? '코드 분석 및 리뷰에서 우수한 성능' : 'Excellent performance in code analysis and review'}</li>
          <li>{isKo ? 'Artifacts 기능으로 실시간 코드/문서 프리뷰' : 'Real-time code/document preview with Artifacts'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Claude 약점' : 'Claude Weaknesses'}</h3>
        <ul>
          <li>{isKo ? '자율적인 작업 실행이 불가능' : 'Cannot execute tasks autonomously'}</li>
          <li>{isKo ? 'ChatGPT 대비 작은 생태계와 커뮤니티' : 'Smaller ecosystem and community compared to ChatGPT'}</li>
          <li>{isKo ? '웹 접근이 제한적 (MCP 도구 필요)' : 'Limited web access (requires MCP tools)'}</li>
          <li>{isKo ? '때때로 과도하게 신중한 응답' : 'Sometimes overly cautious responses'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Manus 강점' : 'Manus Strengths'}</h3>
        <ul>
          <li>{isKo ? '완전한 자율 실행 — 목표만 설정하면 나머지를 자동으로 수행' : 'Fully autonomous execution — set the goal and it handles the rest'}</li>
          <li>{isKo ? '실제 웹 브라우저 조작 (클릭, 입력, 스크롤 등)' : 'Real web browser manipulation (click, type, scroll, etc.)'}</li>
          <li>{isKo ? '가상환경에서 코드를 직접 실행하고 결과 확인' : 'Directly executes code in virtual environment and verifies results'}</li>
          <li>{isKo ? '다양한 형식의 파일 생성 및 다운로드' : 'Creating and downloading files in various formats'}</li>
          <li>{isKo ? '비동기 처리 — 작업을 맡기고 나중에 결과 확인' : 'Async processing — delegate tasks and check results later'}</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? 'Manus 약점' : 'Manus Weaknesses'}</h3>
        <ul>
          <li>{isKo ? '높은 가격 ($39/월 이상)' : 'Higher pricing ($39/mo and above)'}</li>
          <li>{isKo ? '크레딧 기반 사용량 제한' : 'Credit-based usage limits'}</li>
          <li>{isKo ? '간단한 질문이나 대화에는 과도한 도구' : 'Overkill for simple questions or conversations'}</li>
          <li>{isKo ? '초기 학습 곡선이 있음 (프롬프트 설계 등)' : 'Initial learning curve (prompt design, etc.)'}</li>
          <li>{isKo ? '작업 실행 시간이 상대적으로 김' : 'Relatively longer task execution time'}</li>
        </ul>
      </div>
    </div>
  );
}

function GuideSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-compass" />
        {isKo ? 'AI 도구 선택 가이드' : 'AI Tool Selection Guide'}
      </h2>

      <div className="guide-card">
        <h3>{isKo ? '이런 경우 이 도구를 선택하세요' : 'Choose This Tool for These Situations'}</h3>
        <p>
          {isKo
            ? '각 AI 도구는 고유한 강점을 가지고 있습니다. 목적에 맞는 도구를 선택하는 것이 가장 중요합니다.'
            : 'Each AI tool has unique strengths. Choosing the right tool for your purpose is most important.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '일상적인 질문/대화' : 'Everyday Questions / Conversation'}</h3>
        <p>
          <strong>ChatGPT (Free {isKo ? '또는' : 'or'} Plus)</strong>
        </p>
        <p>
          {isKo
            ? '일상적인 궁금증, 번역, 간단한 요약 등에는 ChatGPT가 가장 빠르고 효율적입니다. 무료 버전으로도 충분히 활용 가능합니다.'
            : 'ChatGPT is the fastest and most efficient for everyday curiosities, translations, and simple summaries. The free version is sufficient for most use cases.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '전문적인 글쓰기/분석' : 'Professional Writing / Analysis'}</h3>
        <p>
          <strong>Claude</strong>
        </p>
        <p>
          {isKo
            ? '논문 분석, 기술 문서 작성, 코드 리뷰 등 전문적인 작업에서 Claude의 긴 컨텍스트와 정확한 분석 능력이 빛납니다.'
            : "Claude's long context and accurate analysis capabilities shine in professional tasks such as paper analysis, technical document writing, and code review."}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '복잡한 자동화 작업' : 'Complex Automation Tasks'}</h3>
        <p>
          <strong>Manus</strong>
        </p>
        <p>
          {isKo
            ? '여러 단계를 거치는 복잡한 작업, 웹 자동화, 데이터 수집 및 분석 등에서 Manus의 자율 실행 능력이 압도적입니다.'
            : "Manus's autonomous execution capability is overwhelming for complex multi-step tasks, web automation, and data collection and analysis."}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '웹 앱 개발' : 'Web App Development'}</h3>
        <p>
          <strong>Manus Web App Builder</strong>
        </p>
        <p>
          {isKo
            ? '코딩 없이 완전한 웹 애플리케이션을 만들어야 한다면 Manus의 Web App Builder가 최적의 선택입니다.'
            : 'If you need to create a complete web application without coding, Manus Web App Builder is the optimal choice.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '팀 협업' : 'Team Collaboration'}</h3>
        <p>
          {isKo
            ? '팀의 목적에 따라 도구를 선택하세요. 아이디어 회의에는 ChatGPT, 문서 작업에는 Claude, 실행 자동화에는 Manus가 적합합니다.'
            : 'Choose tools based on your team\'s purpose. ChatGPT for brainstorming, Claude for documentation, and Manus for execution automation.'}
        </p>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '복합 전략: 하이브리드 접근법' : 'Combined Strategy: Hybrid Approach'}</h3>
        <p>
          {isKo
            ? '실제로 여러 AI 도구를 함께 사용하는 것이 가장 효과적인 전략입니다. 각 도구의 강점을 활용하면 시너지 효과를 얻을 수 있습니다.'
            : 'In practice, using multiple AI tools together is the most effective strategy. Leveraging the strengths of each tool creates synergy.'}
        </p>
        <ul>
          <li>
            <strong>1{isKo ? '단계' : '. Phase'}:</strong>{' '}
            {isKo
              ? 'ChatGPT로 아이디어 구상 및 브레인스토밍'
              : 'Brainstorm and ideate with ChatGPT'}
          </li>
          <li>
            <strong>2{isKo ? '단계' : '. Phase'}:</strong>{' '}
            {isKo
              ? 'Claude로 심층 분석 및 전문 문서 작성'
              : 'Deep analysis and professional document writing with Claude'}
          </li>
          <li>
            <strong>3{isKo ? '단계' : '. Phase'}:</strong>{' '}
            {isKo
              ? 'Manus로 실행 및 자동화 (리서치, 웹 앱 개발, 데이터 수집 등)'
              : 'Execute and automate with Manus (research, web app development, data collection, etc.)'}
          </li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>{isKo ? '최종 추천' : 'Final Recommendation'}</h3>
        <p>
          {isKo
            ? '하나의 AI 도구에 의존하지 마세요. ChatGPT, Claude, Manus는 각각 고유한 강점을 가지고 있으며, 상황에 따라 최적의 도구가 다릅니다. 각 도구의 특성을 이해하고 목적에 맞게 활용하는 하이브리드 전략이 가장 효과적입니다. AI 도구는 경쟁 관계가 아니라, 함께 사용했을 때 가장 큰 가치를 발휘합니다.'
            : 'Don\'t rely on a single AI tool. ChatGPT, Claude, and Manus each have unique strengths, and the optimal tool varies by situation. A hybrid strategy that understands each tool\'s characteristics and uses them according to purpose is most effective. AI tools are not in competition — they deliver the greatest value when used together.'}
        </p>
      </div>
    </div>
  );
}

export default function Comparison() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('chatgpt-vs');
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
        title={isKo ? 'AI 도구 비교 분석 | Manus AI Master' : 'AI Tool Comparison | Manus AI Master'}
        description={isKo ? 'ChatGPT, Claude, Manus AI 비교 분석 및 선택 가이드' : 'Compare ChatGPT, Claude, and Manus AI with selection guide'}
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
            {activeSection === 'chatgpt-vs' && <ChatGPTvsSection isKo={isKo} />}
            {activeSection === 'claude-vs' && <ClaudevsSection isKo={isKo} />}
            {activeSection === 'scenarios' && <ScenariosSection isKo={isKo} />}
            {activeSection === 'strengths' && <StrengthsSection isKo={isKo} />}
            {activeSection === 'guide' && <GuideSection isKo={isKo} />}
            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en)
                    : (isKo ? '이전' : 'Previous')}
                </span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en)
                    : (isKo ? '다음' : 'Next')}
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
