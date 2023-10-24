import React from "react";
import { CodeSpan } from "spectacle";
import styled from "@emotion/styled";
import { DebouncedIntersection } from "@Components/Debounced";

export interface LinuxCommandSpanProps {
  children: string;
}

export const LinuxCommandSpan: React.FC<LinuxCommandSpanProps> = ({
  children,
}) => (
  <CodeSpanWrapper>
    <CodeSpan>
      <DebouncedIntersection ms={500}>
        <TypingEffect length={children.length + 1}>{children}</TypingEffect>
      </DebouncedIntersection>
    </CodeSpan>
  </CodeSpanWrapper>
);

const CodeSpanWrapper = styled.div`
  height: 40px;
`;

const TypingEffect = styled.div<{ length: number }>`
  &::before {
    content: "$";
  }
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid transparent; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end),
    blink-caret 0.75s step-end
      ${(props) => Math.floor((props.length + 2) / 3) + 2};
  max-width: ${(props) => props.length * 1.2 + 1}ch;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: grey;
    }
    50% {
      border-color: transparent;
    }
  }
`;
