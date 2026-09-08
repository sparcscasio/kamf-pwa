import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { X } from 'lucide-react';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(24, 20, 17, 0.5);

  backdrop-filter: blur(2px);
`;

const Sheet = styled.div`
  position: relative;

  width: min(100%, 398px);

  max-height: min(78dvh, 680px);

  overflow-y: auto;
  overscroll-behavior: contain;

  border: 1px solid
    ${({ theme }) => theme.colors.line};

  border-radius: 24px;

  background:
    ${({ theme }) => theme.colors.paper};

  padding: 18px 22px 24px;

  box-shadow:
    0 24px 70px
    rgba(30, 20, 10, 0.28);
`;

const Close = styled.button`
  position: absolute;

  top: 14px;
  right: 14px;

  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  z-index: 1;

  &:active {
    background:
      ${({ theme }) => theme.colors.beige};
  }
`;

const Content = styled.div`
  /*
   * 닫기 버튼이 제목과 겹치지 않도록
   * 우측 공간만 확보
   */
  padding-right: 34px;

  /*
   * 기존 Top 한 줄이 없어져서
   * 콘텐츠가 훨씬 위쪽에서 시작함
   */
`;

export default function BottomSheet({
  children,
  onClose,
}: PropsWithChildren<{
  onClose: () => void;
}>) {
  return (
    <Overlay
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <Sheet
        role="dialog"
        aria-modal="true"
      >
        <Close
          type="button"
          onClick={onClose}
          aria-label="닫기"
        >
          <X size={22} />
        </Close>

        <Content>
          {children}
        </Content>
      </Sheet>
    </Overlay>
  );
}