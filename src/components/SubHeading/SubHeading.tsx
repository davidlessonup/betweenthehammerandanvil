import { colors } from "@Foundations/colors";
import React from "react";
import { Heading } from "spectacle";

export const SubHeading: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Heading color={colors.primary} fontSize="50px">
    {children}
  </Heading>
);
