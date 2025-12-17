import { useState, useEffect } from 'react';

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleVisualViewport = () => {
      if ('visualViewport' in window && window.visualViewport) {
        const viewport = window.visualViewport;

        const updateKeyboard = () => {
          const viewportHeight = viewport.height;
          const windowHeight = window.innerHeight;
          const heightDiff = windowHeight - viewportHeight;

          if (heightDiff > 150) {
            setKeyboardHeight(heightDiff);
            setIsKeyboardOpen(true);
          } else {
            setKeyboardHeight(0);
            setIsKeyboardOpen(false);
          }
        };

        viewport.addEventListener('resize', updateKeyboard);
        viewport.addEventListener('scroll', updateKeyboard);

        return () => {
          viewport.removeEventListener('resize', updateKeyboard);
          viewport.removeEventListener('scroll', updateKeyboard);
        };
      }
    };

    const cleanup = handleVisualViewport();
    return cleanup;
  }, []);

  return { keyboardHeight, isKeyboardOpen };
};
