import { useEffect, useRef, useState, createContext } from "react";

// random length (dots component)
export const ranRem = (low?: boolean) => {
  const num = Math.floor(Math.random() * (low ? 10 : 14)) + 3;
  const ranrem = String(num) + "rem";
  return ranrem;
};

// random length for mobile (dots component)
export const mobileRanRem = (low?: boolean) => {
  const num = Math.floor(Math.random() * (low ? 7 : 8) + 2);
  const ranrem = String(num) + "rem";
  return ranrem;
};

// Random miliseconds
export const RanMs = () => {
  const ran = Math.floor(Math.random() * 2000);
  return ran;
};

// This is a hook that checks if a part outside of the selected component is clicked
export const useComponentVisible = (
  initialIsVisible: boolean,
  cooldown?: number,
  func?: () => void
) => {
  const [isVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement | null>(null); // component reference

  const handleClickOutside = (event: MouseEvent) => {
    // function that is used every click/tap to see if the even happens inside or outside of the component
    if (ref.current && !ref.current.contains(event.target as Node)) {
      // if event exists and event does not contain referenced component -- confirm
      if (func && isVisible === true) {
        // optional function
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
    // add listener to apply function on click
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []); // hook is always active

  return { ref, isVisible, setIsComponentVisible };
};

export const isMobileContext = createContext(false);
