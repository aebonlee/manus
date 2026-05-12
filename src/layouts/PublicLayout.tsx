import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth 페이지
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// 학습 경로 페이지
const ManusBasics = lazy(() => import('../pages/manus-basics/ManusBasics'));
const CoreFeatures = lazy(() => import('../pages/core-features/CoreFeatures'));
const UseCases = lazy(() => import('../pages/use-cases/UseCases'));
const WebAppBuilder = lazy(() => import('../pages/web-app-builder/WebAppBuilder'));
const PricingStart = lazy(() => import('../pages/pricing-start/PricingStart'));
const Comparison = lazy(() => import('../pages/comparison/Comparison'));

// 기타 페이지
const RecommendedSites = lazy(() => import('../pages/RecommendedSites'));

// 커뮤니티
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));

// Shop 페이지
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* 학습 경로 */}
            <Route path="/manus-basics" element={<ManusBasics />} />
            <Route path="/core-features" element={<CoreFeatures />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/web-app-builder" element={<WebAppBuilder />} />
            <Route path="/pricing-start" element={<PricingStart />} />
            <Route path="/comparison" element={<Comparison />} />

            {/* 기타 */}
            <Route path="/recommended" element={<RecommendedSites />} />

            {/* 커뮤니티 */}
            {site.features.community && (
              <>
                <Route path="/community/board" element={<Board />} />
                <Route path="/community/board/:id" element={<BoardDetail />} />
                <Route path="/community/board/write" element={<BoardWrite />} />
              </>
            )}

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
                <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
              </>
            )}

            {/* Shop */}
            {site.features.shop && (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </>
            )}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
