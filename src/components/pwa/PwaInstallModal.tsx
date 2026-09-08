import {
  useEffect,
  useState,
} from 'react';

import styled from '@emotion/styled';

import {
  Check,
  Download,
  MoreVertical,
  Share2,
  Smartphone,
  X,
} from 'lucide-react';

import { useLocale } from '@/i18n/LocaleProvider';

type Platform =
  | 'ios'
  | 'android';

interface Props {
  onClose: () => void;

  canInstall: boolean;
  isInstalled: boolean;

  onInstall: () => Promise<boolean>;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding:
    max(20px, env(safe-area-inset-top))
    20px
    max(20px, env(safe-area-inset-bottom));

  background: rgba(31, 27, 24, 0.52);

  backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  position: relative;

  width: 100%;
  max-width: 390px;

  max-height: min(
    720px,
    calc(100dvh - 40px)
  );

  overflow-y: auto;

  padding: 24px 20px 20px;

  border: 1px solid
    ${({ theme }) => theme.colors.line};

  border-radius: 20px;

  background:
    ${({ theme }) => theme.colors.paper};

  box-shadow:
    0 20px 60px
    rgba(42, 34, 28, 0.25);
`;

const CloseButton = styled.button`
  position: absolute;

  top: 16px;
  right: 16px;

  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(123, 30, 30, 0.07);

  color:
    ${({ theme }) => theme.colors.primary};
`;

const Eyebrow = styled.div`
  margin-bottom: 7px;

  color:
    ${({ theme }) => theme.colors.primary};

  font-size: 10px;
  font-weight: 900;

  letter-spacing: 0.14em;

  text-transform: uppercase;
`;

const Title = styled.h2`
  padding-right: 38px;

  margin: 0;

  font:
    700 27px/1.25
    'Gowun Batang',
    serif;

  color:
    ${({ theme }) => theme.colors.ink};
`;

const Description = styled.p`
  margin: 10px 0 20px;

  color:
    ${({ theme }) => theme.colors.muted};

  font-size: 13px;
  line-height: 1.7;
`;

const Tabs = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 6px;

  padding: 4px;

  margin-bottom: 20px;

  border-radius: 12px;

  background:
    ${({ theme }) => theme.colors.beige};
`;

const Tab = styled.button<{
  active: boolean;
}>`
  padding: 9px 8px;

  border-radius: 9px;

  background:
    ${({ active, theme }) =>
      active
        ? theme.colors.primary
        : 'transparent'};

  color:
    ${({ active, theme }) =>
      active
        ? '#fff'
        : theme.colors.ink};

  font-size: 12px;
  font-weight: 800;

  transition:
    background 0.15s ease,
    color 0.15s ease;
`;

const Notice = styled.div`
  display: flex;

  gap: 10px;

  align-items: flex-start;

  padding: 12px;

  margin-bottom: 15px;

  border-radius: 12px;

  background: rgba(
    123,
    30,
    30,
    0.07
  );

  color:
    ${({ theme }) => theme.colors.primary};

  font-size: 11px;
  line-height: 1.55;

  svg {
    flex: 0 0 auto;

    margin-top: 1px;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const Step = styled.div`
  display: grid;

  grid-template-columns:
    36px 1fr;

  gap: 11px;

  padding: 13px;

  border: 1px solid
    ${({ theme }) => theme.colors.line};

  border-radius: 13px;

  background:
    ${({ theme }) => theme.colors.cream};
`;

const StepNumber = styled.div`
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background:
    ${({ theme }) => theme.colors.primary};

  color: white;

  font:
    700 12px/1
    'Gowun Batang',
    serif;
`;

const StepBody = styled.div`
  min-width: 0;
`;

const StepTitle = styled.div`
  display: flex;

  align-items: center;

  gap: 6px;

  margin-bottom: 4px;

  color:
    ${({ theme }) => theme.colors.ink};

  font-size: 12px;
  font-weight: 900;
`;

const StepText = styled.div`
  color:
    ${({ theme }) => theme.colors.muted};

  font-size: 11px;
  line-height: 1.55;
`;

const InstallButton = styled.button`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-bottom: 15px;
  padding: 14px;

  border-radius: 12px;

  background:
    ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 13px;
  font-weight: 900;
`;

const Installed = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 14px;

  margin-bottom: 15px;

  border: 1px solid
    ${({ theme }) => theme.colors.line};

  border-radius: 12px;

  background:
    ${({ theme }) => theme.colors.beige};

  color:
    ${({ theme }) => theme.colors.primary};

  font-size: 12px;
  font-weight: 900;
`;

const Footnote = styled.p`
  margin: 16px 2px 0;

  color:
    ${({ theme }) => theme.colors.muted};

  font-size: 9px;
  line-height: 1.6;
`;

function detectPlatform(): Platform {
  const ua =
    navigator.userAgent.toLowerCase();

  if (
    /iphone|ipad|ipod/.test(ua)
  ) {
    return 'ios';
  }

  return 'android';
}

export default function PwaInstallModal({
  onClose,
  canInstall,
  isInstalled,
  onInstall,
}: Props) {
  const { t } = useLocale();

  const [platform, setPlatform] =
    useState<Platform>('ios');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [onClose]);

  return (
    <Overlay
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="pwa-install-title"
      >
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="닫기"
        >
          <X size={17} />
        </CloseButton>

        <Eyebrow>
          HOW TO PLAY
        </Eyebrow>

        <Title id="pwa-install-title">
          {t('pwa.title.line1')}
          <br />
          {t('pwa.title.line2')}
        </Title>

        <Description>
          {t('pwa.description')}
        </Description>

        <Tabs>
          <Tab
            type="button"
            active={
              platform === 'ios'
            }
            onClick={() =>
              setPlatform('ios')
            }
          >
            {t('pwa.platform.ios')}
          </Tab>

          <Tab
            type="button"
            active={
              platform ===
              'android'
            }
            onClick={() =>
              setPlatform('android')
            }
          >
            {t('pwa.platform.android')}
          </Tab>
        </Tabs>

        {platform === 'ios' ? (
          <>
            <Notice>
              <Smartphone
                size={17}
              />

              <div>
                {t('pwa.ios.notice')}
              </div>
            </Notice>

            <Steps>
              <Step>
                <StepNumber>
                  01
                </StepNumber>

                <StepBody>
                  <StepTitle>
                    <Share2
                      size={14}
                    />

                    {t(
                      'pwa.ios.step1.title',
                    )}
                  </StepTitle>

                  <StepText>
                    {t(
                      'pwa.ios.step1.description',
                    )}
                  </StepText>
                </StepBody>
              </Step>

              <Step>
                <StepNumber>
                  02
                </StepNumber>

                <StepBody>
                  <StepTitle>
                    <Download
                      size={14}
                    />

                    {t(
                      'pwa.ios.step2.title',
                    )}
                  </StepTitle>

                  <StepText>
                    {t(
                      'pwa.ios.step2.description',
                    )}
                  </StepText>
                </StepBody>
              </Step>

              <Step>
                <StepNumber>
                  03
                </StepNumber>

                <StepBody>
                  <StepTitle>
                    <Check
                      size={14}
                    />

                    {t(
                      'pwa.ios.step3.title',
                    )}
                  </StepTitle>

                  <StepText>
                    {t(
                      'pwa.ios.step3.description',
                    )}
                  </StepText>
                </StepBody>
              </Step>
            </Steps>
          </>
        ) : (
          <>
            {isInstalled ? (
              <Installed>
                <Check size={16} />

                {t(
                  'pwa.android.installed',
                )}
              </Installed>
            ) : canInstall ? (
              <InstallButton
                type="button"
                onClick={async () => {
                  await onInstall();
                }}
              >
                <Download
                  size={17}
                />

                {t(
                  'pwa.android.installButton',
                )}
              </InstallButton>
            ) : (
              <Notice>
                <Smartphone
                  size={17}
                />

                <div>
                  {t(
                    'pwa.android.notice',
                  )}
                </div>
              </Notice>
            )}

            {!isInstalled && (
              <Steps>
                <Step>
                  <StepNumber>
                    01
                  </StepNumber>

                  <StepBody>
                    <StepTitle>
                      <MoreVertical
                        size={14}
                      />

                      {t(
                        'pwa.android.step1.title',
                      )}
                    </StepTitle>

                    <StepText>
                      {t(
                        'pwa.android.step1.description',
                      )}
                    </StepText>
                  </StepBody>
                </Step>

                <Step>
                  <StepNumber>
                    02
                  </StepNumber>

                  <StepBody>
                    <StepTitle>
                      <Download
                        size={14}
                      />

                      {t(
                        'pwa.android.step2.title',
                      )}
                    </StepTitle>

                    <StepText>
                      {t(
                        'pwa.android.step2.description',
                      )}
                    </StepText>
                  </StepBody>
                </Step>

                <Step>
                  <StepNumber>
                    03
                  </StepNumber>

                  <StepBody>
                    <StepTitle>
                      <Check
                        size={14}
                      />

                      {t(
                        'pwa.android.step3.title',
                      )}
                    </StepTitle>

                    <StepText>
                      {t(
                        'pwa.android.step3.description',
                      )}
                    </StepText>
                  </StepBody>
                </Step>
              </Steps>
            )}
          </>
        )}

        <Footnote>
          {t('pwa.footnote')}
        </Footnote>
      </Modal>
    </Overlay>
  );
}