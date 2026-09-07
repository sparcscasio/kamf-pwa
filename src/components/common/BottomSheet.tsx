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
  width: min(100%, 398px);
  max-height: min(78dvh, 680px);
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.paper};
  padding: 14px 18px 24px;
  box-shadow: 0 24px 70px rgba(30, 20, 10, 0.28);
`;

const Grip = styled.div`
  width: 44px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.line};
  margin: 0 auto 8px;
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 36px;
`;

const Close = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  &:active {
    background: ${({ theme }) => theme.colors.beige};
  }
`;

export default function BottomSheet({
  children,
  onClose,
}: PropsWithChildren<{ onClose: () => void }>) {
  return (
    <Overlay
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <Sheet role="dialog" aria-modal="true">
        <Grip />
        <Top>
          <Close onClick={onClose} aria-label="닫기">
            <X size={22} />
          </Close>
        </Top>
        {children}
      </Sheet>
    </Overlay>
  );
}
