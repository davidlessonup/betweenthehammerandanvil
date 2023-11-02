import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";
import { IconQuoteRight } from "@Components/Icons/QuoteRight";
import { IconQuoteLeft } from "@Components/Icons/QuoteLeft";

export interface QuoteProps {
  author: string;
}

export const Quote: React.FC<React.PropsWithChildren<QuoteProps>> = ({
  author,
  children,
}) => (
  <StyledQuote>
    <span data-quote>
      <IconQuoteLeft fill={colors.primary} height="24px" width="24px" />
      {children}
      <IconQuoteRight fill={colors.primary} height="24px" width="24px" />
    </span>
    <span data-author>{author}</span>
  </StyledQuote>
);

const StyledQuote = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    height: 8vw;
    width: 8vw;
  }

  &::before {
    left: 0;
    border-left: 1px solid ${colors.primary};
    border-top: 1px solid ${colors.primary};
  }

  &::after {
    right: 0;
    top: calc(100% - 8vw);
    border-right: 1px solid ${colors.primary};
    border-bottom: 1px solid ${colors.primary};
  }

  & > [data-quote] {
    padding: 10px;
    font-style: italic;
  }

  & > [data-author] {
    padding: 5px;
    align-self: flex-end;
    font-size: 33px;
  }
`;
