import React from "react";
import { FlexBox, Box, FullScreen } from "spectacle";
import { ProgressBar } from "@Components/ProgressBar";

export const ProgressTemplate: React.FC<{
  slideNumber: number;
  numberOfSlides: number;
}> = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em" style={{ color: "white" }}>
      <ProgressBar current={slideNumber} total={numberOfSlides} />
    </Box>
  </FlexBox>
);
