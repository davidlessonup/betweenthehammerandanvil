import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export const Definition: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledDefinition>{children}</StyledDefinition>
);

const StyledDefinition = styled.div`
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  padding: 10px;
  color: ${colors.secondary};
  background: ${colors.tertiary};
  font-size: 40px;
`;
