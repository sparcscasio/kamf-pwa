import styled from '@emotion/styled';

export const Page = styled.div`
  min-height: 100dvh;
  padding: 16px 16px 94px;
  background:
    radial-gradient(circle at 22px 22px, rgba(127,30,30,.035) 0 1px, transparent 1px),
    ${({ theme }) => theme.colors.cream};
  background-size: 24px 24px;
`;

export const Serif = styled.span`font-family: 'Gowun Batang', serif;`;
export const SectionTitle = styled.h2`
  margin: 24px 0 12px;
  font-family: 'Gowun Batang', serif;
  font-size: 21px;
  line-height: 1.35;
`;
export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.paper};
  box-shadow: ${({ theme }) => theme.shadow};
`;
export const PrimaryButton = styled.button`
  width: 100%; min-height: 48px; border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary}; color: #fff9f1;
  font-weight: 700; letter-spacing: -0.02em;
`;
export const Pill = styled.span`
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 9px; border-radius: 999px; font-size: 12px; font-weight: 700;
  background: ${({ theme }) => theme.colors.soft};
`;
export const Muted = styled.p`color:${({theme})=>theme.colors.muted};font-size:13px;line-height:1.65;`;
