import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'plans', icon: 'fa-layer-group', ko: '요금제 비교', en: 'Plan Comparison' },
  { id: 'credits', icon: 'fa-coins', ko: '크레딧 시스템', en: 'Credit System' },
  { id: 'efficient', icon: 'fa-gauge-high', ko: '효율적 활용법', en: 'Efficient Usage' },
  { id: 'strategy', icon: 'fa-chess', ko: '전략적 배분', en: 'Strategic Allocation' },
  { id: 'team', icon: 'fa-people-group', ko: '팀 협업', en: 'Team Collaboration' },
];

/* ───────────── Section Components ───────────── */

function PlansSection({ isKo }: any) {
  return (
    <section className="guide-section">
      <h2>{isKo ? '요금제 비교' : 'Plan Comparison'}</h2>

      <p>
        {isKo
          ? 'Manus AI는 사용자의 필요에 맞는 3가지 요금제를 제공합니다. 각 요금제의 특징과 혜택을 비교하여 최적의 플랜을 선택하세요.'
          : 'Manus AI offers three pricing plans tailored to your needs. Compare the features and benefits of each plan to choose the best one for you.'}
      </p>

      <div className="info-box">
        <h3><i className="fa-solid fa-gift" /> {isKo ? 'Free 플랜' : 'Free Plan'}</h3>
        <p>
          {isKo
            ? '무료로 기본 기능을 체험할 수 있습니다. 하루에 소량의 크레딧이 제공되어 간단한 작업을 수행할 수 있습니다. Manus를 처음 사용하거나 가벼운 용도로 적합합니다.'
            : 'Experience core features for free. A small amount of daily credits is provided for simple tasks. Ideal for first-time users or light usage.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-star" /> {isKo ? 'Plus 플랜' : 'Plus Plan'}</h3>
        <p>
          {isKo
            ? '월 $39 (연간 결제 시 $33.25/월). 더 많은 크레딧과 우선 처리 혜택을 제공합니다. 개인 사용자나 프리랜서에게 추천합니다.'
            : '$39/month ($33.25/month with annual billing). More credits and priority processing. Recommended for individual users and freelancers.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-crown" /> {isKo ? 'Max 플랜' : 'Max Plan'}</h3>
        <p>
          {isKo
            ? '월 $199 (연간 결제 시 $166.58/월). 대량 크레딧, 팀 기능, API 접근을 포함합니다. 전문가 및 팀 단위 사용에 최적화되어 있습니다.'
            : '$199/month ($166.58/month with annual billing). Includes large credit allowance, team features, and API access. Optimized for professionals and team usage.'}
        </p>
      </div>

      <h3>{isKo ? '요금제 비교 테이블' : 'Plan Comparison Table'}</h3>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>{isKo ? '항목' : 'Feature'}</th>
              <th>Free</th>
              <th>Plus</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '월 크레딧' : 'Monthly Credits'}</td>
              <td>{isKo ? '일일 소량 제공' : 'Small daily amount'}</td>
              <td>{isKo ? '표준 제공' : 'Standard'}</td>
              <td>{isKo ? '대량 제공' : 'Large amount'}</td>
            </tr>
            <tr>
              <td>{isKo ? '작업 동시 실행' : 'Concurrent Tasks'}</td>
              <td>1</td>
              <td>2</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Web App Builder</td>
              <td>{isKo ? '제한적' : 'Limited'}</td>
              <td><i className="fa-solid fa-check" /></td>
              <td><i className="fa-solid fa-check" /></td>
            </tr>
            <tr>
              <td>{isKo ? '우선 처리' : 'Priority Processing'}</td>
              <td><i className="fa-solid fa-xmark" /></td>
              <td><i className="fa-solid fa-check" /></td>
              <td><i className="fa-solid fa-check" /></td>
            </tr>
            <tr>
              <td>{isKo ? '팀 기능' : 'Team Features'}</td>
              <td><i className="fa-solid fa-xmark" /></td>
              <td><i className="fa-solid fa-xmark" /></td>
              <td><i className="fa-solid fa-check" /></td>
            </tr>
            <tr>
              <td>{isKo ? 'API 접근' : 'API Access'}</td>
              <td><i className="fa-solid fa-xmark" /></td>
              <td><i className="fa-solid fa-xmark" /></td>
              <td><i className="fa-solid fa-check" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-lightbulb" /> {isKo ? '추천 사용자별 적합 플랜' : 'Recommended Plans by User Type'}</h3>
        <ul>
          <li>
            <strong>{isKo ? '학생 / 입문자' : 'Students / Beginners'}:</strong>{' '}
            {isKo ? 'Free 플랜으로 시작하여 Manus의 기능을 체험해 보세요.' : 'Start with the Free plan to experience Manus features.'}
          </li>
          <li>
            <strong>{isKo ? '프리랜서 / 개인 사용자' : 'Freelancers / Individual Users'}:</strong>{' '}
            {isKo ? 'Plus 플랜으로 충분한 크레딧과 우선 처리 혜택을 누리세요.' : 'Enjoy sufficient credits and priority processing with the Plus plan.'}
          </li>
          <li>
            <strong>{isKo ? '팀 / 기업' : 'Teams / Enterprises'}:</strong>{' '}
            {isKo ? 'Max 플랜으로 팀 협업, API 접근, 대량 크레딧을 활용하세요.' : 'Leverage team collaboration, API access, and large credit allowance with the Max plan.'}
          </li>
        </ul>
      </div>
    </section>
  );
}

function CreditsSection({ isKo }: any) {
  return (
    <section className="guide-section">
      <h2>{isKo ? '크레딧 시스템' : 'Credit System'}</h2>

      <p>
        {isKo
          ? '크레딧은 Manus에서 작업을 실행하기 위한 기본 단위입니다. 모든 작업은 크레딧을 소비하며, 작업의 복잡도에 따라 소비량이 달라집니다.'
          : 'Credits are the fundamental unit for executing tasks in Manus. Every task consumes credits, and the amount varies based on task complexity.'}
      </p>

      <div className="info-box">
        <h3><i className="fa-solid fa-coins" /> {isKo ? '크레딧이란?' : 'What are Credits?'}</h3>
        <p>
          {isKo
            ? 'Manus에서 작업을 실행하기 위해 필요한 토큰 형태의 단위입니다. 작업을 요청할 때마다 해당 작업의 복잡도와 리소스 사용량에 따라 크레딧이 차감됩니다.'
            : 'Credits are token-based units required to execute tasks in Manus. Each time you request a task, credits are deducted based on the complexity and resource usage of that task.'}
        </p>
      </div>

      <h3>{isKo ? '작업별 크레딧 소비' : 'Credit Consumption by Task'}</h3>
      <ul>
        <li><strong>{isKo ? '간단한 질문' : 'Simple Questions'}:</strong> 1-2 {isKo ? '크레딧' : 'credits'}</li>
        <li><strong>{isKo ? '웹 리서치' : 'Web Research'}:</strong> 3-5 {isKo ? '크레딧' : 'credits'}</li>
        <li><strong>{isKo ? '코드 작성' : 'Code Writing'}:</strong> 5-10 {isKo ? '크레딧' : 'credits'}</li>
        <li><strong>{isKo ? 'Web App 생성' : 'Web App Creation'}:</strong> 10-20 {isKo ? '크레딧' : 'credits'}</li>
      </ul>

      <div className="info-box">
        <h3><i className="fa-solid fa-rotate" /> {isKo ? '크레딧 충전' : 'Credit Recharge'}</h3>
        <p>
          {isKo
            ? '크레딧은 매월 초에 리셋됩니다. 월 할당량을 모두 사용한 경우 추가 크레딧을 구매할 수 있습니다. 미사용 크레딧은 다음 달로 이월되지 않습니다.'
            : 'Credits reset at the beginning of each month. If you exhaust your monthly allowance, you can purchase additional credits. Unused credits do not roll over to the next month.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-chart-line" /> {isKo ? '크레딧 잔량 확인' : 'Checking Credit Balance'}</h3>
        <p>
          {isKo
            ? '대시보드에서 현재 크레딧 잔량을 실시간으로 확인할 수 있습니다. 사용 내역과 소비 패턴도 함께 제공되어 효율적인 크레딧 관리가 가능합니다.'
            : 'You can check your current credit balance in real-time on the dashboard. Usage history and consumption patterns are also available for efficient credit management.'}
        </p>
      </div>

      <div className="info-box warning">
        <h3><i className="fa-solid fa-triangle-exclamation" /> {isKo ? '초과 사용 시' : 'When Credits Run Out'}</h3>
        <p>
          {isKo
            ? '크레딧을 모두 소진하면 새로운 작업은 대기열에 추가됩니다. 다음 달 크레딧이 리셋될 때까지 대기하거나 추가 크레딧을 구매하여 즉시 이용할 수 있습니다.'
            : 'When all credits are exhausted, new tasks are added to a queue. You can wait until credits reset next month or purchase additional credits for immediate use.'}
        </p>
      </div>
    </section>
  );
}

function EfficientSection({ isKo }: any) {
  return (
    <section className="guide-section">
      <h2>{isKo ? '효율적 활용법' : 'Efficient Usage Tips'}</h2>

      <p>
        {isKo
          ? '한정된 크레딧을 최대한 활용하기 위한 실전 팁을 소개합니다. 작은 습관의 변화로 크레딧 효율을 크게 높일 수 있습니다.'
          : 'Here are practical tips for maximizing your limited credits. Small changes in habits can significantly improve credit efficiency.'}
      </p>

      <div className="info-box">
        <h3><i className="fa-solid fa-pen-fancy" /> {isKo ? '명확한 프롬프트 작성' : 'Write Clear Prompts'}</h3>
        <p>
          {isKo
            ? '프롬프트가 구체적일수록 Manus가 정확하게 작업을 수행하여 크레딧을 절약할 수 있습니다. 모호한 지시는 재시도를 유발하여 크레딧 낭비로 이어집니다.'
            : 'The more specific your prompt, the more accurately Manus performs the task, saving credits. Vague instructions lead to retries and wasted credits.'}
        </p>
        <ul>
          <li>{isKo ? '원하는 결과물의 형식, 길이, 언어를 명시하세요' : 'Specify the format, length, and language of the desired output'}</li>
          <li>{isKo ? '필요한 참고 자료나 컨텍스트를 함께 제공하세요' : 'Provide relevant references or context along with your request'}</li>
          <li>{isKo ? '단계별 지시사항을 작성하면 더 정확한 결과를 얻을 수 있습니다' : 'Step-by-step instructions yield more accurate results'}</li>
        </ul>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-scissors" /> {isKo ? '작업 범위 최적화' : 'Optimize Task Scope'}</h3>
        <p>
          {isKo
            ? '너무 큰 작업은 분할하여 실행하세요. 한 번에 모든 것을 요청하면 오류 발생 시 전체를 재실행해야 합니다. 작은 단위로 나누면 실패한 부분만 재시도할 수 있습니다.'
            : 'Break large tasks into smaller pieces. Requesting everything at once means re-running the entire task on error. Smaller units allow retrying only the failed portion.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-recycle" /> {isKo ? '결과물 재사용' : 'Reuse Results'}</h3>
        <p>
          {isKo
            ? '이전 작업의 결과를 참조하여 후속 작업을 수행하면 크레딧을 절약할 수 있습니다. Manus는 대화 히스토리를 활용하므로 동일 세션에서 후속 작업을 요청하세요.'
            : 'Reference previous task results for follow-up work to save credits. Manus leverages conversation history, so request follow-up tasks within the same session.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-bookmark" /> {isKo ? '템플릿 활용' : 'Use Templates'}</h3>
        <p>
          {isKo
            ? '반복적인 작업은 템플릿으로 저장하여 재사용하세요. 매번 같은 지시를 처음부터 작성할 필요 없이 템플릿에서 필요한 부분만 수정하면 됩니다.'
            : 'Save repetitive tasks as templates for reuse. Instead of writing the same instructions from scratch every time, just modify the necessary parts of a template.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-wrench" /> {isKo ? '적절한 도구 선택' : 'Choose the Right Tool'}</h3>
        <p>
          {isKo
            ? '모든 작업에 Manus를 사용할 필요는 없습니다. 간단한 질의응답은 ChatGPT로, 복잡한 자율 실행이 필요한 작업만 Manus로 처리하면 크레딧을 효율적으로 사용할 수 있습니다.'
            : 'You don\'t need to use Manus for everything. Use ChatGPT for simple Q&A and reserve Manus for complex autonomous tasks to use credits efficiently.'}
        </p>
      </div>
    </section>
  );
}

function StrategySection({ isKo }: any) {
  return (
    <section className="guide-section">
      <h2>{isKo ? '전략적 크레딧 배분' : 'Strategic Credit Allocation'}</h2>

      <p>
        {isKo
          ? '크레딧을 전략적으로 배분하면 같은 비용으로 더 많은 가치를 창출할 수 있습니다. 월간 계획을 세우고 우선순위에 따라 크레딧을 할당하세요.'
          : 'Strategic credit allocation allows you to create more value with the same cost. Plan monthly and allocate credits based on priorities.'}
      </p>

      <div className="info-box">
        <h3><i className="fa-solid fa-calendar-days" /> {isKo ? '월간 크레딧 예산 계획' : 'Monthly Credit Budget Planning'}</h3>
        <p>
          {isKo
            ? '월 초에 업무별로 크레딧을 미리 할당하세요. 리서치, 코드 작성, 문서 생성 등 카테고리별로 예산을 배분하면 월말에 크레딧이 부족해지는 상황을 방지할 수 있습니다.'
            : 'Allocate credits by task category at the beginning of each month. Distributing budgets across research, coding, document generation, etc. prevents credit shortages at month-end.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-arrow-up-right-dots" /> {isKo ? '고가치 작업 우선' : 'Prioritize High-Value Tasks'}</h3>
        <p>
          {isKo
            ? 'ROI가 높은 작업에 크레딧을 집중 투자하세요. 자동화로 많은 시간을 절약할 수 있는 작업, 수동으로 하기 어려운 복잡한 작업에 크레딧을 우선 배분합니다.'
            : 'Focus credits on high-ROI tasks. Prioritize tasks where automation saves significant time and complex tasks that are difficult to do manually.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-boxes-stacked" /> {isKo ? '배치 처리' : 'Batch Processing'}</h3>
        <p>
          {isKo
            ? '유사한 작업을 묶어서 한 번에 처리하면 효율이 올라갑니다. 예를 들어 여러 개의 블로그 글 초안을 한 세션에서 연속으로 생성하면 컨텍스트 공유로 크레딧을 절약할 수 있습니다.'
            : 'Grouping similar tasks for batch processing improves efficiency. For example, generating multiple blog post drafts in a single session saves credits through shared context.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-hand-holding-heart" /> {isKo ? '무료 플랜 활용 전략' : 'Free Plan Strategy'}</h3>
        <p>
          {isKo
            ? '매일 주어지는 무료 크레딧을 최대한 활용하세요. 급하지 않은 작업은 무료 크레딧으로 처리하고, 유료 크레딧은 긴급하거나 대규모 작업에 집중합니다.'
            : 'Maximize your daily free credits. Handle non-urgent tasks with free credits and reserve paid credits for urgent or large-scale tasks.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-robot" /> {isKo ? 'Pro 사용자 전략' : 'Pro User Strategy'}</h3>
        <p>
          {isKo
            ? '자동화 파이프라인을 구축하여 반복 작업을 배치로 처리하세요. API를 활용하면 수동 작업 없이 정기적으로 작업을 실행할 수 있어 크레딧 대비 최대 효율을 달성할 수 있습니다.'
            : 'Build automation pipelines to batch-process repetitive tasks. Using the API enables scheduled task execution without manual intervention, achieving maximum efficiency per credit.'}
        </p>
      </div>
    </section>
  );
}

function TeamSection({ isKo }: any) {
  return (
    <section className="guide-section">
      <h2>{isKo ? '팀 협업' : 'Team Collaboration'}</h2>

      <p>
        {isKo
          ? 'Manus Max 플랜에서는 팀 단위 협업 기능을 제공합니다. 크레딧 공유, 역할 관리, 작업 공유 등을 통해 팀의 생산성을 극대화할 수 있습니다.'
          : 'The Manus Max plan provides team collaboration features. Maximize team productivity through credit sharing, role management, and task sharing.'}
      </p>

      <div className="info-box">
        <h3><i className="fa-solid fa-people-group" /> {isKo ? 'Team 플랜 기능' : 'Team Plan Features'}</h3>
        <p>
          {isKo
            ? '팀 크레딧 풀을 공유하여 팀원 간 유연하게 크레딧을 사용할 수 있습니다. 프로젝트별 전용 공간을 생성하여 작업을 체계적으로 관리하세요.'
            : 'Share a team credit pool for flexible credit usage among members. Create dedicated project spaces to manage work systematically.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-user-shield" /> {isKo ? '역할 관리' : 'Role Management'}</h3>
        <p>
          {isKo
            ? '관리자와 멤버 권한을 설정하여 팀의 크레딧 사용을 통제할 수 있습니다. 관리자는 크레딧 할당, 멤버 초대, 사용량 제한 등을 관리합니다.'
            : 'Set administrator and member permissions to control team credit usage. Administrators manage credit allocation, member invitations, and usage limits.'}
        </p>
        <ul>
          <li><strong>{isKo ? '관리자' : 'Administrator'}:</strong> {isKo ? '크레딧 배분, 멤버 관리, 사용량 모니터링' : 'Credit distribution, member management, usage monitoring'}</li>
          <li><strong>{isKo ? '멤버' : 'Member'}:</strong> {isKo ? '할당된 크레딧 내에서 작업 수행, 결과물 공유' : 'Execute tasks within allocated credits, share results'}</li>
        </ul>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-share-nodes" /> {isKo ? '작업 공유' : 'Task Sharing'}</h3>
        <p>
          {isKo
            ? '팀원 간 작업 결과물을 손쉽게 공유할 수 있습니다. 다른 팀원이 만든 결과물을 기반으로 후속 작업을 진행하면 중복 작업을 줄이고 크레딧을 절약할 수 있습니다.'
            : 'Easily share task results among team members. Building on results created by other members reduces duplicate work and saves credits.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-building" /> {isKo ? '워크스페이스' : 'Workspace'}</h3>
        <p>
          {isKo
            ? '팀별 전용 작업 공간을 통해 프로젝트를 분리하고 체계적으로 관리할 수 있습니다. 각 워크스페이스는 독립된 설정과 접근 권한을 가집니다.'
            : 'Dedicated team workspaces allow you to separate and systematically manage projects. Each workspace has independent settings and access permissions.'}
        </p>
      </div>

      <div className="info-box">
        <h3><i className="fa-solid fa-chart-pie" /> {isKo ? '사용량 모니터링' : 'Usage Monitoring'}</h3>
        <p>
          {isKo
            ? '팀원별 크레딧 사용 현황을 실시간으로 추적할 수 있습니다. 대시보드에서 전체 팀의 크레딧 소비 패턴을 분석하고 최적의 배분 전략을 수립하세요.'
            : 'Track credit usage per team member in real-time. Analyze the entire team\'s credit consumption patterns on the dashboard and develop optimal allocation strategies.'}
        </p>
      </div>
    </section>
  );
}

/* ───────────── Main Component ───────────── */

export default function PricingStart() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('plans');
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
        title={isKo ? '요금제 & 시작하기 | Manus AI Master' : 'Pricing & Getting Started | Manus AI Master'}
        description={isKo ? 'Manus AI 요금제와 크레딧 시스템, 효율적 활용 전략' : 'Manus AI pricing plans, credit system, and efficient usage strategies'}
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
            {activeSection === 'plans' && <PlansSection isKo={isKo} />}
            {activeSection === 'credits' && <CreditsSection isKo={isKo} />}
            {activeSection === 'efficient' && <EfficientSection isKo={isKo} />}
            {activeSection === 'strategy' && <StrategySection isKo={isKo} />}
            {activeSection === 'team' && <TeamSection isKo={isKo} />}

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
