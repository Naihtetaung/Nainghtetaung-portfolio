'use client';
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const RouteProgressBar = () => {
  const pathname = usePathname();
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    if (previousPathRef.current !== pathname) {
      NProgress.start();

      const timeout = setTimeout(() => {
        NProgress.done();
      }, 500);

      previousPathRef.current = pathname;

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return null;
};

export default RouteProgressBar;
