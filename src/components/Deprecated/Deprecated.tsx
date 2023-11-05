import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

interface DeprecatedProps {
  children: string;
}
export const Deprecated: React.FC<React.PropsWithChildren> = ({ children }) => (
  <StyledDeprecatedSpan>{children}</StyledDeprecatedSpan>
);

const StyledDeprecatedSpan = styled.span`
  color: ${colors.disabled};
  text-decoration: line-through;
`;
