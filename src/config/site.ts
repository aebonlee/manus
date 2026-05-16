import type { SiteConfig } from '../types';

export interface LearningPath {
  id: string;
  icon: string;
  nameKo: string;
  nameEn: string;
  descKo: string;
  descEn: string;
  color: string;
  path: string;
  topics: string[];
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'manus-basics',
    icon: 'fa-robot',
    nameKo: 'Manus 소개 & 기초',
    nameEn: 'Manus Intro & Basics',
    descKo: 'Manus AI의 개념부터 계정 생성, 인터페이스 이해, 첫 번째 작업까지 학습합니다.',
    descEn: 'Learn Manus AI from concepts to account setup, interface understanding, and your first task.',
    color: '#6366F1',
    path: '/manus-basics',
    topics: ['AI 에이전트 개념', '기존 AI와 차이', '계정 & 접속', '인터페이스 이해', '첫 번째 작업', '워크플로우 기초', '결과 확인'],
  },
  {
    id: 'core-features',
    icon: 'fa-microchip',
    nameKo: '핵심 기능 & 작동 원리',
    nameEn: 'Core Features & How It Works',
    descKo: '자율 실행, 웹 자동화, 코드 생성, 멀티모달 처리 등 Manus의 핵심 기능을 학습합니다.',
    descEn: 'Learn autonomous execution, web automation, code generation, and multimodal processing.',
    color: '#8B5CF6',
    path: '/core-features',
    topics: ['자율 실행 엔진', '웹 자동화', '코드 생성/실행', '멀티모달 처리', '투명 인터페이스', '비동기 작업'],
  },
  {
    id: 'use-cases',
    icon: 'fa-briefcase',
    nameKo: '실전 활용 사례',
    nameEn: 'Real-world Use Cases',
    descKo: '비즈니스, 마케팅, 데이터 분석, 연구 등 다양한 분야에서의 Manus 활용법을 배웁니다.',
    descEn: 'Learn how to use Manus across business, marketing, data analysis, research, and more.',
    color: '#EC4899',
    path: '/use-cases',
    topics: ['비즈니스 & 금융', '마케팅 & SEO', 'HR & 채용', '데이터 분석', '연구 & 보고서', '창작 & 콘텐츠'],
  },
  {
    id: 'web-app-builder',
    icon: 'fa-globe',
    nameKo: 'Web App Builder',
    nameEn: 'Web App Builder',
    descKo: 'Manus의 웹 앱 빌더로 웹사이트 생성, 데이터베이스, 결제 연동, 배포까지 학습합니다.',
    descEn: 'Build websites, databases, payment integration, and deploy with Manus Web App Builder.',
    color: '#F59E0B',
    path: '/web-app-builder',
    topics: ['웹사이트 생성', '데이터베이스 연동', 'Stripe 결제', 'SEO 최적화', '배포 & 호스팅'],
  },
  {
    id: 'pricing-start',
    icon: 'fa-tags',
    nameKo: '요금제 & 시작하기',
    nameEn: 'Pricing & Getting Started',
    descKo: 'Free, Pro, Team 요금제와 크레딧 시스템, 효율적 활용 전략을 안내합니다.',
    descEn: 'Understand Free, Pro, Team plans, credit system, and efficient usage strategies.',
    color: '#10B981',
    path: '/pricing-start',
    topics: ['Free / Pro / Team', '크레딧 시스템', '효율적 활용법', '전략적 배분', '팀 협업'],
  },
  {
    id: 'comparison',
    icon: 'fa-chart-bar',
    nameKo: 'AI 도구 비교 분석',
    nameEn: 'AI Tool Comparison',
    descKo: 'ChatGPT, Claude, Manus를 비교하고 상황별 최적의 AI 도구 선택 가이드를 제공합니다.',
    descEn: 'Compare ChatGPT, Claude, and Manus with a guide for choosing the best AI tool.',
    color: '#EF4444',
    path: '/comparison',
    topics: ['ChatGPT vs Manus', 'Claude vs Manus', '사용 시나리오별 비교', '강점 & 약점', '선택 가이드'],
  },
];

const site: SiteConfig = {
  id: 'manus',
  name: 'Manus AI Master',
  nameKo: 'Manus AI 학습 플랫폼',
  description: 'Manus AI - 세계 최초 자율형 AI 에이전트 플랫폼의 모든 것을 학습하는 종합 플랫폼',
  url: 'https://manus.dreamitbiz.com',
  dbPrefix: 'man_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: 'Manus', className: 'brand-biz' }
    ]
  },

  themeColor: '#6366F1',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  menuItems: [
    { path: '/', labelKey: 'nav.about', activePath: '/about' },
    {
      labelKey: 'site.nav.learningPaths',
      path: '/manus-basics',
      activePath: '/manus-basics',
      dropdown: [
        { path: '/manus-basics', labelKey: 'site.nav.manusBasics' },
        { path: '/core-features', labelKey: 'site.nav.coreFeatures' },
        { path: '/use-cases', labelKey: 'site.nav.useCases' },
        { path: '/web-app-builder', labelKey: 'site.nav.webAppBuilder' },
        { path: '/pricing-start', labelKey: 'site.nav.pricingStart' },
        { path: '/comparison', labelKey: 'site.nav.comparison' },
      ]
    },
    { path: '/community/board', labelKey: 'nav.community' },
    { path: '/recommended', labelKey: 'site.nav.recommended' },
  ],

  footerLinks: [
    { path: '/manus-basics', labelKey: 'site.nav.manusBasics' },
    { path: '/core-features', labelKey: 'site.nav.coreFeatures' },
    { path: '/community/board', labelKey: 'nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'ChatGPT 학습 플랫폼', url: 'https://chatgpt.dreamitbiz.com' },
    { name: 'Claude AI 학습 플랫폼', url: 'https://claude-ai.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
  ]
};

export default site;
