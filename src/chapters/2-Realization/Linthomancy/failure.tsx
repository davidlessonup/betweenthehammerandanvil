import { SlideLayout, Notes, Heading } from "spectacle";
import { SubHeading } from "@Components/SubHeading/SubHeading";

export const LinthomancyFailureSlide = () => (
  <SlideLayout.Center>
    <SubHeading>{"Sprinkling in some"}</SubHeading>
    <Heading>{"Failure"}</Heading>

    <LinthomancyFailureNotes />
  </SlideLayout.Center>
);

const LinthomancyFailureNotes = () => (
  <Notes>
    {
      "But to achieve this, linting locally is not enough. We must introduce multiple points of failure."
    }
    <p />
    {
      "Because with multiple points of failure, we can guarantee that our standards will be met"
    }
    <p />
    {"Some examples of failure can be:"}
    <p />
  </Notes>
);
