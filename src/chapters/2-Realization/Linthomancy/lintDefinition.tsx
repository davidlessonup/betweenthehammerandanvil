import { Appear, SlideLayout, Notes } from "spectacle";
import { SubHeading } from "@Components/SubHeading/SubHeading";
import { Definition } from "@Components/Definition/Definition";

export const LinthomancyLintDefinitionSlide = () => (
  <SlideLayout.Center>
    <SubHeading>{"Linting"}</SubHeading>
    <Appear>
      <Definition>
        {
          "Linting is the automated checking of your source code for programmatic and stylistic errors."
        }
        <p />
        <Appear>
          {"This is done by using a lint tool (otherwise known as linter)."}
        </Appear>
      </Definition>
    </Appear>
    <LinthomancyLintDefinitionNotes />
  </SlideLayout.Center>
);

const LinthomancyLintDefinitionNotes = () => (
  <Notes>
    {"In the Art of War by Sun Tzu, there is an appropriate quote for this"}
  </Notes>
);
