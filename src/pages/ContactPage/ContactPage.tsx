import styled from '@emotion/styled';
import { Instagram, Mail } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Page } from '@/components/common/ui';

const Lead = styled.p`
  font-size: 14px;
  line-height: 1.75;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.muted};
`;

const LinkCard = styled.a`
  padding: 16px;
  margin-bottom: 10px;
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.paper};

  div { flex: 1; }
  b { font-size: 14px; }
  p {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.muted};
    margin-top: 3px;
  }
`;

export default function ContactPage() {
  return (
    <Page>
      <PageHeader title="문의하기" back />
      <Lead>
        KAMF 행사 관련 문의는 공식 인스타그램 DM 또는 이메일을 통해 보내주세요.
      </Lead>

      <LinkCard
        href="https://www.instagram.com/kaist_kamf/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram size={22} />
        <div>
          <b>Instagram</b>
          <p>@kaist_kamf</p>
        </div>
      </LinkCard>

      <LinkCard href="mailto:2024kamf@gmail.com">
        <Mail size={22} />
        <div>
          <b>Email</b>
          <p>2024kamf@gmail.com</p>
        </div>
      </LinkCard>
    </Page>
  );
}
