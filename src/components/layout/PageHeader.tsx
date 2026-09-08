import styled from '@emotion/styled';
import { ChevronLeft, Languages, Menu, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '@/i18n/LocaleProvider';

type Props = { title: string; back?: boolean; menu?: boolean; share?: boolean };

const Header = styled.header`
  height: 54px;
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  margin: -16px -16px 14px;
  padding: 0 12px;
  background: color-mix(in srgb, ${({ theme }) => theme.colors.cream} 94%, transparent);
  backdrop-filter: blur(12px);
`;

const Title = styled.h1`
  font: 700 19px/1.2 'Gowun Batang', serif;
  text-align: center;
  padding-left: 4px;
`;

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LanguageButton = styled(IconButton)`
  position: relative;
`;

const LanguageMark = styled.span`
  position: absolute;
  right: 1px;
  bottom: 1px;
  min-width: 18px;
  height: 14px;
  padding: 0 3px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0;
`;

export default function PageHeader({ title, back, menu, share }: Props) {
  const navigate = useNavigate();
  const { locale, toggleLocale, t } = useLocale();

  const sharePage = async () => {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href });
    else await navigator.clipboard.writeText(location.href);
  };

  return <Header>
    <div>{back ? <IconButton onClick={() => navigate(-1)} aria-label={t('뒤로')}><ChevronLeft size={22}/></IconButton> : menu ? <IconButton onClick={() => navigate('/more')}><Menu size={21}/></IconButton> : null}</div>
    <Title>{t(title)}</Title>
    <Actions>
      {share ? <IconButton onClick={sharePage}><Share2 size={19}/></IconButton> : null}
      <LanguageButton
        type="button"
        onClick={toggleLocale}
        aria-label={locale === 'ko' ? '영어로 보기' : '한국어로 보기'}
        title={locale === 'ko' ? '영어로 보기' : '한국어로 보기'}
      >
        <Languages size={20}/>
        <LanguageMark>{locale === 'ko' ? 'EN' : '한'}</LanguageMark>
      </LanguageButton>
    </Actions>
  </Header>;
}
