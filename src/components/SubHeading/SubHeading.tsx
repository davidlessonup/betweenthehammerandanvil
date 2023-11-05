import styled from "@emotion/styled";
import React from "react";
import { colors } from "@Foundations/colors";

export interface SubHeadingProps {
  type?: "primary" | "secondary";
}
export const SubHeading: React.FC<React.PropsWithChildren<SubHeadingProps>> = ({
  type,
  children,
}) => <StyledSubHeading type={type || "primary"}>{children}</StyledSubHeading>;

const StyledSubHeading = styled.div<Required<SubHeadingProps>>`
  font-size: 40px;
  color: ${(props) => colors[props.type]};
  text-align: center;
  padding: 20px;
`;
