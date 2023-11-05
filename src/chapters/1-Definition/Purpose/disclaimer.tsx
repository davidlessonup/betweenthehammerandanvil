import { Heading, Slide, Notes } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const PurposeDisclaimerSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>cat disclaimer.txt</LinuxCommandSpan>
    </Heading>
    I'm not an expert, this talk aims to convey my observations and experiences.
    <PurposeDisclaimerNotes />
  </Slide>
);

const PurposeDisclaimerNotes = () => <Notes></Notes>;
