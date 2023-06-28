import React, { useEffect, useState, useRef } from "react";

const useScrollSpy = (
  element: HTMLDivElement | null,
  options?: {
    offset?: number;
    root?: React.RefObject<Element>;
  }
): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const observer = useRef<IntersectionObserver>();

  const callback = (entries: IntersectionObserverEntry[]) => {
    console.log("Entries: ", entries);
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        console.log("Current entry is: ", entry.target);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, {
      root: null,
      // use this option to handle custom offset
      rootMargin: "-30% 0px",
    });

    const { current: ourObserver } = observer;

    if (element) {
      ourObserver.observe(element);
    }
    return () => {
      if (element) {
        ourObserver.unobserve(element);
      }
    };
  }, [element]);

  return isVisible;
};

export default useScrollSpy;
