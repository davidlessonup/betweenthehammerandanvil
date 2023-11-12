import { SlideLayout, Notes, Heading } from "spectacle";
import { SubHeading } from "@Components/SubHeading/SubHeading";

export const ToolingSlide = () => (
  <SlideLayout.Center>
    <SubHeading>{"Custom"}</SubHeading>
    <Heading>{"Tools"}</Heading>

    <ToolingNotes />
  </SlideLayout.Center>
);

const ToolingNotes = () => (
  <Notes>
    {"This topic is a bit harder, because it varies so much on a project basis"}
    <p />
    {
      "So I will start by giving you an example of something I've been through in the past"
    }
  </Notes>
);
