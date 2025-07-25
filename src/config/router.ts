declare module 'next/router' {
    interface Events {
      routeChangeStart: (url: string) => void;
      routeChangeComplete: (url: string) => void;
      routeChangeError: (url: string) => void;
    }
  }