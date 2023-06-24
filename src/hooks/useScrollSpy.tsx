import React, { useEffect, useState, useRef } from "react";

const useScrollspy = (
  elements: React.RefObject<HTMLDivElement>,
  options?: {
    offset?: number;
    root?: React.RefObject<Element>;
  }
): [number] => {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
    useState(-1);

  const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        // find the index of the section that is currently intersecting
        const indexOfElementIntersecting = entries.findIndex((entry) => {
          // if intersection > 0 it means entry is intersecting with the view port
          return entry.intersectionRatio > 0.4;
        });

        // store the value of indexOfElementIntersecting
        setCurrentIntersectingElementIndex(indexOfElementIntersecting);
      },
      {
        root: null,
        // use this option to handle custom offset
        rootMargin,
      }
    );

    const { current: ourObserver } = observer;
    const children = elements.current?.childNodes;

    // observe all the elements passed as argument of the hook
    children?.forEach((element) => {
      element ? ourObserver.observe(element as HTMLElement) : null;
    });

    return () => ourObserver.disconnect();
  }, [elements, options, rootMargin]);

  return [currentIntersectingElementIndex];
};

export default useScrollspy;
