export {};

declare global {
  interface Window {
    requestIdleCallback: (callback: () => void) => number;
    cancelIdleCallback: (handle: number) => void;
  }
}