import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { borderRadius } from "@Foundations/borders";

export interface QuoteProps {
  author: string;
}

export const Quote: React.FC<React.PropsWithChildren<QuoteProps>> = ({
  author,
  children,
}) => (
  <StyledQuote>
    <span data-quote>
      <StyledQuoteIconWrapper>
        <FaQuoteLeft fill={colors.secondary} size="24px" />
      </StyledQuoteIconWrapper>
      <span>{children}</span>
      <StyledQuoteIconWrapper>
        <FaQuoteRight fill={colors.secondary} size="24px" />
      </StyledQuoteIconWrapper>
    </span>
    <span data-author>{author}</span>
  </StyledQuote>
);

const StyledQuoteIconWrapper = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledQuote = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-size: 44px;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    height: 6vw;
    width: 8vw;
  }

  &::before {
    left: 0;
    border-left: 1px solid ${colors.secondary};
    border-top: 1px solid ${colors.secondary};
    border-top-left-radius: ${borderRadius};
  }

  &::after {
    right: 0;
    top: calc(100% - 8vw);
    border-right: 1px solid ${colors.secondary};
    border-bottom: 1px solid ${colors.secondary};
    border-bottom-right-radius: ${borderRadius};
  }

  & > [data-quote] {
    padding: 10px;
    font-style: italic;
  }

  & > [data-author] {
    padding: 5px;
    align-self: flex-end;
    font-size: 33px;
    color: ${colors.secondary};
  }
`;
