import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export interface DefinitionProps {
  children: string;
}

export const Definition: React.FC<DefinitionProps> = ({ children }) => (
  <StyledDefinition>{children}</StyledDefinition>
);

const StyledDefinition = styled.div`
  border: 2px solid ${colors.quinary};
  border-radius: 4px;
  padding: 10px;
  color: ${colors.quaternary};
  background: ${colors.primary};
  font-size: 40px;
`;
