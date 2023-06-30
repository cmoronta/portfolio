import React, { useEffect, useState, useRef } from "react";

const useScrollSpy = (
  element: React.RefObject<HTMLDivElement | null>,
  options?: {
    offset?: number;
    root?: React.RefObject<Element>;
  }
): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const observer = useRef<IntersectionObserver>();

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Current intersecting entry is: ", entry.target);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    console.log("Is there currently an element? ", element);
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, {
      root: null,
      // use this option to handle custom offset
      rootMargin: "-30% 0px",
    });

    const { current: ourObserver } = observer;
    const refCopy = element.current;
    if (refCopy) {
      ourObserver.observe(refCopy);
    }
    return () => {
      if (refCopy) {
        ourObserver.unobserve(refCopy);
      }
    };
  }, [element]);

  return isVisible;
};

export default useScrollSpy;
