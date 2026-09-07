import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import SplashPage from '@/pages/SplashPage/SplashPage';
import HomePage from '@/pages/HomePage/HomePage';
import PerformancePage from '@/pages/PerformancePage/PerformancePage';
import KamfIntroPage from '@/pages/KamfIntroPage/KamfIntroPage';
import MapPage from '@/pages/MapPage/MapPage';
import BoothListPage from '@/pages/BoothListPage/BoothListPage';
import MorePage from '@/pages/MorePage/MorePage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import AppInfoPage from '@/pages/AppInfoPage/AppInfoPage';

export const router = createBrowserRouter([
  { path: '/', element: <SplashPage /> },
  {
    element: <AppLayout />,
    children: [
      { path: '/home', element: <HomePage /> },
      { path: '/performances', element: <PerformancePage /> },
      { path: '/map', element: <MapPage /> },
      { path: '/booths', element: <BoothListPage /> },
      { path: '/more', element: <MorePage /> },
    ],
  },
  { path: '/about', element: <KamfIntroPage /> },
  { path: '/more/contact', element: <ContactPage /> },
  { path: '/more/app-info', element: <AppInfoPage /> },
  { path: '*', element: <Navigate to="/home" replace /> },
]);
