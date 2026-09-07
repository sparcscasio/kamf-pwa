import styled from '@emotion/styled';
import { CalendarDays, Home, Map, Store, MoreHorizontal } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed; left: 50%; bottom: 0; z-index: 50; transform: translateX(-50%);
  width: min(100%, 430px); height: calc(68px + env(safe-area-inset-bottom));
  padding: 7px 8px env(safe-area-inset-bottom);
  display:grid; grid-template-columns:repeat(5,1fr);
  border-top:1px solid ${({ theme }) => theme.colors.line};
  background: color-mix(in srgb, ${({ theme }) => theme.colors.paper} 96%, transparent);
  backdrop-filter: blur(16px);
`;
const Item = styled(NavLink)`
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px;
  color:${({ theme }) => theme.colors.muted}; font-size:10px; font-weight:700;
  &.active { color:${({ theme }) => theme.colors.primary}; }
`;
const items = [
  ['/home','홈',Home], ['/performances','공연',CalendarDays], ['/map','배치도',Map], ['/booths','부스',Store], ['/more','더보기',MoreHorizontal]
] as const;
export default function BottomNavigation(){ return <Nav>{items.map(([to,label,Icon])=><Item key={to} to={to}><Icon size={20}/><span>{label}</span></Item>)}</Nav>; }
