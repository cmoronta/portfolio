import { Box, BoxProps, Heading } from "@chakra-ui/react";
import React, { SetStateAction, forwardRef, useEffect, useRef } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";

export interface SectionProps extends BoxProps {
  heading: null | string;
  setIndex: React.Dispatch<SetStateAction<number>>;
  sectionId: number;
  sectionContent: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement | null, SectionProps>(
  (props, parentRef) => {
    const localRef = useRef<HTMLDivElement | null>(null);
    let isVisible = useScrollSpy(localRef);
    useEffect(() => {
      if (isVisible) {
        props.setIndex(props.sectionId);
      }
    }, [isVisible]);
    return (
      <Box
        ref={(node) => {
          if (typeof parentRef === "function") parentRef(node);
          else if (parentRef !== null) parentRef.current = node;
          localRef.current = node;
        }}
        scrollSnapAlign={{ xl: "start" }}
        height={{ xl: "100vh" }}
        p={4}
        width={{ base: "100%", md: "97%" }}
      >
        <Heading ml={8} fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}>
          {props.heading}
        </Heading>
        {props?.sectionContent}
      </Box>
    );
  }
);

export default Section;
