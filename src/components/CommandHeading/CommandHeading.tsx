import React from "react";
import { Heading } from "spectacle";
import {
  LinuxCommandSpan,
  LinuxCommandSpanProps,
} from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export interface CommandHeadingProps {
  children: LinuxCommandSpanProps["children"];
}

export const CommandHeading: React.FC<CommandHeadingProps> = ({ children }) => (
  <Heading fontSize="40px">
    <LinuxCommandSpan>{children}</LinuxCommandSpan>
  </Heading>
);
