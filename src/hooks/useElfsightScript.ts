import { useEffect } from 'react';

let isScriptLoaded = false;

export const useElfsightScript = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isScriptLoaded || document.getElementById('elfsight')) return;

    const onIdle = () => {
      const script = document.createElement('script');
      script.id = 'elfsight';
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.defer = true;
      script.dataset.useServiceCore = '';
      document.body.appendChild(script);
      isScriptLoaded = true;
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(onIdle);
    } else {
      setTimeout(onIdle, 0);
    }
  }, []);
};