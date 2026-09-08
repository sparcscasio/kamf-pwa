import { useState } from 'react';

import styled from '@emotion/styled';

import {
  ChevronRight,
  CircleHelp,
  Download,
  Info,
  Share2,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import PageHeader from '@/components/layout/PageHeader';
import PwaInstallModal from '@/components/pwa/PwaInstallModal';

import { Page } from '@/components/common/ui';

import { usePwaInstall } from '@/hooks/usePwaInstall';

const Intro = styled.div`
  margin:
    4px 2px
    18px;

  color:
    ${({ theme }) =>
      theme.colors.muted};

  font-size: 12px;
  line-height: 1.65;
`;

const MenuGroup = styled.div`
  overflow: hidden;

  border: 1px solid
    ${({ theme }) =>
      theme.colors.line};

  border-radius: 15px;

  background:
    ${({ theme }) =>
      theme.colors.paper};
`;

const MenuItem = styled.button`
  width: 100%;

  display: grid;

  grid-template-columns:
    38px
    minmax(0, 1fr)
    auto;

  gap: 11px;

  align-items: center;

  padding: 14px 14px;

  text-align: left;

  &:not(:last-child) {
    border-bottom:
      1px solid
      ${({ theme }) =>
        theme.colors.line};
  }

  &:active {
    background:
      ${({ theme }) =>
        theme.colors.beige};
  }
`;

const IconBox = styled.div`
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: rgba(
    123,
    30,
    30,
    0.08
  );

  color:
    ${({ theme }) =>
      theme.colors.primary};
`;

const Text = styled.div`
  min-width: 0;
`;

const Title = styled.div`
  color:
    ${({ theme }) =>
      theme.colors.ink};

  font-size: 13px;
  font-weight: 800;
`;

const Sub = styled.div`
  margin-top: 3px;

  color:
    ${({ theme }) =>
      theme.colors.muted};

  font-size: 10px;
  line-height: 1.45;
`;

const Arrow = styled(
  ChevronRight,
)`
  color:
    ${({ theme }) =>
      theme.colors.muted};
`;

const SectionLabel = styled.div`
  margin:
    23px 3px
    8px;

  color:
    ${({ theme }) =>
      theme.colors.primary};

  font-size: 9px;
  font-weight: 900;

  letter-spacing: 0.12em;
`;

export default function MorePage() {
  const navigate = useNavigate();

  const [
    installModalOpen,
    setInstallModalOpen,
  ] = useState(false);

  const {
    canInstall,
    isInstalled,
    install,
  } = usePwaInstall();

  return (
    <Page>
      <PageHeader title="더보기" />

      <Intro>
        KAMF를 더 편하게
        이용하기 위한 기능과
        정보를 확인할 수 있습니다.
      </Intro>

      <SectionLabel>
        KAMF
      </SectionLabel>

      <MenuGroup>
        <MenuItem
          type="button"
          onClick={() =>
            setInstallModalOpen(true)
          }
        >
          <IconBox>
            <Download size={18} />
          </IconBox>

          <Text>
            <Title>
              앱으로 설치하기
            </Title>

            <Sub>
              홈 화면에 추가해
              KAMF를 앱처럼
              이용하세요.
            </Sub>
          </Text>

          <Arrow size={16} />
        </MenuItem>

        <MenuItem
          type="button"
          onClick={() =>
            navigate(
              '/more/contact',
            )
          }
        >
          <IconBox>
            <CircleHelp
              size={18}
            />
          </IconBox>

          <Text>
            <Title>
              문의하기
            </Title>

            <Sub>
              KAMF 공식
              Instagram 또는
              이메일로 문의할 수
              있습니다.
            </Sub>
          </Text>

          <Arrow size={16} />
        </MenuItem>

        <MenuItem
          type="button"
          onClick={() =>
            navigate(
              '/more/app-info',
            )
          }
        >
          <IconBox>
            <Info size={18} />
          </IconBox>

          <Text>
            <Title>
              앱 정보
            </Title>

            <Sub>
              KAMF 웹앱과 버전
              정보를 확인합니다.
            </Sub>
          </Text>

          <Arrow size={16} />
        </MenuItem>

        <MenuItem
        type="button"
        onClick={async () => {
          const shareData = {
            title: '2026 KAMF',
            text: '2026 KAMF 정보를 확인해보세요!',
            url: window.location.origin,
          };

          try {
            if (navigator.share) {
              await navigator.share(shareData);
            } else {
              await navigator.clipboard.writeText(
                window.location.origin,
              );

              alert('KAMF 링크를 복사했습니다.');
            }
          } catch (error) {
            console.error('Share failed:', error);
          }
        }}
      >
        <IconBox>
          <Share2 size={18} />
        </IconBox>

        <Text>
          <Title>
            공유하기
          </Title>

          <Sub>
            친구에게 KAMF를
            공유해보세요.
          </Sub>
        </Text>

        <Arrow size={16} />
      </MenuItem>
      </MenuGroup>

      {installModalOpen && (
        <PwaInstallModal
          canInstall={canInstall}
          isInstalled={
            isInstalled
          }
          onInstall={install}
          onClose={() =>
            setInstallModalOpen(
              false,
            )
          }
        />
      )}
    </Page>
  );
}