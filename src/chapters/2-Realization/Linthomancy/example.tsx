import { Slide, Stepper, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { CodeExample, CodeExampleVersion } from "./components/CodeExample";
import { NotesTable } from "@Components/NotesTable/NotesTable";

const determineWhichVersionToShow = function determineWhichVersionToShow(
  version: unknown,
): CodeExampleVersion {
  switch (version) {
    case "fixed":
      return "fixed";
    case "errors":
      return "errors";
    default:
      return "default";
  }
};

export const LintStrengthCodeExampleSlide = () => (
  <Slide>
    <CommandHeading>{"git commit"}</CommandHeading>
    <Stepper tagName="div" alwaysVisible values={["errors", "fixed"]}>
      {(value) => <CodeExample version={determineWhichVersionToShow(value)} />}
    </Stepper>
    <LintStrengthCodeExampleNotes />
  </Slide>
);

const LintStrengthCodeExampleNotes = () => (
  <Notes>
    {"Let's take this snippet of code as an example"}
    <p />
    {
      "Assuming there are agreed upon standards, the reviewer has to take that into account"
    }
    <NotesTable
      slideName="code-example-linthomancy"
      notes={[
        "How many issues can you spot?",
        "There are 7 change requests in this 10 LoC snippet",
        "Multiply that by more files, and reviewers",
        "Also add in the amount of time needed to apply those changes",
        "Factor in human error from all parties, things like these might slide",
      ]}
    />
    <p />
    {
      "The problem this creates is not necessarily a waste of time, but a waste of focus"
    }
    <p />
    {
      "Therefore it is a better approach to just delegate these things to linters, who can clean it up automatically"
    }
  </Notes>
);
