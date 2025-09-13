import * as React from "react";

const MOBILE_BREAKPOINT = 768;
export const DESKTOP_BREAKPOINT = 1280;

export function useMediaquery({ breakpoint = MOBILE_BREAKPOINT } = {}) {
  const [isDevice, setIsDevice] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setIsDevice(window.innerWidth < breakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsDevice(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!isDevice;
}
