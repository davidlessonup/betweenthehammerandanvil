import { Heading, Slide } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const LintStrengthExampleSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>git checkout</LinuxCommandSpan>
    </Heading>
    Create an example of code that has standardization issues and show the time
    loss of review + correction, then show that multiplied by several features
  </Slide>
);
