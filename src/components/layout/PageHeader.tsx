import styled from '@emotion/styled';
import { ChevronLeft, Menu, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Props = { title: string; back?: boolean; menu?: boolean; share?: boolean };

const Header = styled.header`
  height: 54px; display: grid; grid-template-columns: 40px 1fr 40px; align-items: center;
  position: sticky; top: 0; z-index: 10; margin: -16px -16px 14px; padding: 0 12px;
  background: color-mix(in srgb, ${({ theme }) => theme.colors.cream} 94%, transparent);
  backdrop-filter: blur(12px);
`;
const Title = styled.h1`font: 700 19px/1.2 'Gowun Batang', serif; text-align: center;`;
const IconButton = styled.button`display:grid;place-items:center;width:40px;height:40px;border-radius:50%;`;

export default function PageHeader({ title, back, menu, share }: Props) {
  const navigate = useNavigate();
  const sharePage = async () => {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href });
    else await navigator.clipboard.writeText(location.href);
  };
  return <Header>
    <div>{back ? <IconButton onClick={() => navigate(-1)} aria-label="뒤로"><ChevronLeft size={22}/></IconButton> : menu ? <IconButton onClick={() => navigate('/more')}><Menu size={21}/></IconButton> : null}</div>
    <Title>{title}</Title>
    <div>{share ? <IconButton onClick={sharePage}><Share2 size={19}/></IconButton> : null}</div>
  </Header>;
}
