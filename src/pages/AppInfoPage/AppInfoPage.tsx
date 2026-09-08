import styled from '@emotion/styled';
import PageHeader from '@/components/layout/PageHeader';
import { Page, Card } from '@/components/common/ui';

const Logo = styled.div`
  font: 700 48px 'Gowun Batang', serif;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin: 38px 0 8px;
`;

const Meta = styled.div`
  text-align: center;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.colors.muted};
`;

const Box = styled(Card)`
  margin-top: 30px;
  padding: 16px;
  box-shadow: none;
  font-size: 12px;
  line-height: 1.8;
`;

const Credit = styled.div`
  margin-top: 18px;
  padding-top: 14px;

  border-top: 1px solid
    ${({ theme }) => theme.colors.line};
`;

const CreditLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function AppInfoPage() {
  return (
    <Page>
      <PageHeader title="앱 정보" back />

      <Logo>KAMF</Logo>

      <Meta>
        2026 · KAIST MUSIC FESTIVAL
      </Meta>

      <Box>
        <b>모바일 PWA</b>
        <br />
        브라우저에서 바로 열거나 홈 화면에 추가해 앱처럼 사용할 수 있습니다.

        <br />
        <br />

        <b>Version</b> 1.0.2
        <br />

        <b>Theme</b> KAMF Now Playing · Vintage Record

        <Credit>
          <b>Credit</b>
          <br />
          Designed & Developed by{' '}
          <CreditLink
            href="https://github.com/sparcscasio/kamf-pwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            sparcscasio
          </CreditLink>
        </Credit>
      </Box>
    </Page>
  );
}