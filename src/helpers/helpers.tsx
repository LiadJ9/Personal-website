import { useEffect, useRef, useState } from "react";

export const ranRem = (low?: boolean) => {
  const num = Math.floor(Math.random() * (low ? 10 : 14)) + 3;
  const ranrem = String(num) + "rem";
  return ranrem;
};

export const mobileRanRem = (low?: boolean) => {
  const num = Math.floor(Math.random() * (low ? 7 : 8) + 2);
  const ranrem = String(num) + "rem";
  return ranrem;
};

export const RanMs = () => {
  const ran = Math.floor(Math.random() * 2000);
  return ran;
};

export const useComponentVisible = (
  initialIsVisible: boolean,
  cooldown?: number,
  func?: () => void
) => {
  const [isVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      if (func && isVisible === true) {
        func();
        setTimeout(() => {
          setIsComponentVisible(false);
        }, cooldown);
      } else {
        setIsComponentVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsComponentVisible };
};
