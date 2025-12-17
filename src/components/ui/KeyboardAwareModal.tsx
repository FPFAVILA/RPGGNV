import React, { useEffect, useRef } from 'react';
import { useKeyboardHeight } from '../../hooks/useKeyboardHeight';

interface KeyboardAwareModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
  zIndex?: number;
  backgroundColor?: string;
}

export const KeyboardAwareModal: React.FC<KeyboardAwareModalProps> = ({
  isOpen,
  children,
  maxWidth = 'sm',
  zIndex = 50,
  backgroundColor = 'bg-black/70'
}) => {
  const { keyboardHeight, isKeyboardOpen } = useKeyboardHeight();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && isKeyboardOpen && modalRef.current) {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        setTimeout(() => {
          activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [isOpen, isKeyboardOpen]);

  if (!isOpen) return null;

  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg'
  }[maxWidth];

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 ${backgroundColor} backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto z-[${zIndex}]`}
      style={{
        paddingBottom: keyboardHeight > 0 ? `${keyboardHeight + 12}px` : '0.75rem',
        transition: 'padding-bottom 0.2s ease-out'
      }}
    >
      <div className={`w-full ${maxWidthClass} my-auto max-h-[92vh] overflow-y-auto`}>
        {children}
      </div>
    </div>
  );
};
