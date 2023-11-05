import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export interface AcronymProps {
  acronym: string;
  children: string;
}
export const Acronym: React.FC<AcronymProps> = ({ acronym, children }) => {
  const words = children.split(" ");

  return (
    <StyledAcronymWrapper>
      <StyledAcronym>
        {words.map((word) => (
          <StyledAcronymWord key={`${acronym}-${word}`}>
            {word}
          </StyledAcronymWord>
        ))}
        <StyledFullAcronym>({acronym})</StyledFullAcronym>
      </StyledAcronym>
    </StyledAcronymWrapper>
  );
};

const StyledAcronym = styled.div`
  display: flex;
  gap: 0.5ch;
`;

const StyledAcronymWrapper = styled.div`
  display: inline-block;
`;

const StyledAcronymWord = styled.div`
  &::first-letter {
    color: ${colors.secondary};
  }
`;

const StyledFullAcronym = styled.div`
  color: ${colors.secondary};
`;
