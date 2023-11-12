import { Appear, SlideLayout, Heading, Notes } from "spectacle";
import { SubHeading } from "@Components/SubHeading/SubHeading";

export const OutroSlide = () => (
  <SlideLayout.Center>
    <Heading>{"Thank you for joining"}</Heading>
    <Appear>
      <SubHeading>
        {"And a big thanks for those who made this possible"}
      </SubHeading>
    </Appear>
    <OutroNotes />
  </SlideLayout.Center>
);

const OutroNotes = () => (
  <Notes>
    {"Thank you all for joining"}
    <p />
    {
      "And a big thank you to 25Friday, LessonUp and those who helped me make this possible"
    }
    <p />
    {"As a send-off I will leave a quote from one my favourite philosophers"}
  </Notes>
);
