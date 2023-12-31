import { Appear, SlideLayout, Notes, Heading } from "spectacle";
import { SubHeading } from "@Components/SubHeading/SubHeading";
import { Definition } from "@Components/Definition/Definition";

export const LinthomancyLintDefinitionSlide = () => (
  <SlideLayout.Center>
    <Heading>{"Linting"}</Heading>
    <Appear>
      <Definition>
        {
          "Linting is the automated checking of your source code for programmatic and stylistic errors."
        }
      </Definition>
      <Appear>
        <SubHeading>
          {"This is done by using a lint tool (a linter)."}
        </SubHeading>
      </Appear>
    </Appear>
    <LinthomancyLintDefinitionNotes />
  </SlideLayout.Center>
);

const LinthomancyLintDefinitionNotes = () => (
  <Notes>
    {
      "Linting is the automated checking of your source code for programmatic and stylistic errors"
    }
    <p />
    {"This is done by using a linter"}
  </Notes>
);
