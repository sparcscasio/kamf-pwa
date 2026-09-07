import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
export default function AppLayout(){ return <><Outlet/><BottomNavigation/></>; }
