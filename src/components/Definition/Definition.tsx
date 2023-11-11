import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";
import { borderRadius } from "@Foundations/borders";

export const Definition: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledDefinition>{children}</StyledDefinition>
);

const StyledDefinition = styled.div`
  border: 2px solid ${colors.primary};
  border-radius: ${borderRadius};
  padding: 10px;
  color: ${colors.secondary};
  background: ${colors.tertiary};
  font-size: 40px;
`;
