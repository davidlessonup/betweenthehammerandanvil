import { Slide, Stepper, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { CodeExample, CodeExampleVersion } from "./components/CodeExample";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import {
  PullRequest,
  PullRequestHeader,
  PullRequestFile,
} from "./components/PullRequestTable";

const determineWhichVersionToShow = function determineWhichVersionToShow(
  version: unknown,
  defaultVersion: CodeExampleVersion,
): CodeExampleVersion {
  switch (version) {
    case "fixed":
      return "fixed";
    case "errors":
      return "errors";
    default:
      return defaultVersion;
  }
};

export const LintStrengthCodeExampleSlide = () => (
  <Slide>
    <CommandHeading>{"git commit"}</CommandHeading>
    <Stepper tagName="div" alwaysVisible values={["errors"]}>
      {(value) => (
        <PullRequest>
          <PullRequestHeader files={1} added={10} removed={0} />
          <PullRequestFile
            name="components/Label/index.utils.ts"
            comments={value === "errors" ? 7 : 0}
            checked={value === "errors"}
          />
          <CodeExample
            version={determineWhichVersionToShow(value, "default")}
          />
        </PullRequest>
      )}
    </Stepper>
    <LintStrengthCodeExampleNotes />
  </Slide>
);

export const LintStrengthCodeFixedExampleSlide = () => (
  <Slide>
    <CommandHeading>{'git commit -m "fixed"'}</CommandHeading>
    <Stepper tagName="div" alwaysVisible values={["fixed"]}>
      {(value) => (
        <PullRequest>
          <PullRequestHeader files={1} added={10} removed={0} />
          <PullRequestFile
            name="components/Label/index.utils.ts"
            comments={value === "fixed" ? 0 : 7}
            checked
          />
          <CodeExample version={determineWhichVersionToShow(value, "errors")} />
        </PullRequest>
      )}
    </Stepper>
    <LintStrengthCodeFixedExampleNotes />
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
        "But a pull request usually isn't just one file, is it?",
      ]}
    />
  </Notes>
);

const LintStrengthCodeFixedExampleNotes = () => (
  <Notes>
    {"Going back to the code snippet example"}
    <p />
    {
      "If we were to implement a linter, we could get this formatting automatically"
    }
  </Notes>
);
