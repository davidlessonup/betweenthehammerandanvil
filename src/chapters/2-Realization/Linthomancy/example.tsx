import { Slide, Stepper } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";
import { CodeExample, CodeExampleVersion } from "./components/CodeExample";

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
  </Slide>
);
