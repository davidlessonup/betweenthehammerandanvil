import {
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  CodeSpan,
} from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const LinthomancyFailSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>git push --force</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          Have developers use an IDE plugin{" "}
          <Appear>Pro: Gives the developer real time insight of issues</Appear>{" "}
          <Appear>Con: The developer might not use it</Appear>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Create a pre-commit hook to run all linting{" "}
          <Appear>
            Pro: Gives the developer a timely insight that there are issues
          </Appear>{" "}
          <Appear>
            Con: Can be bypassed with{" "}
            <CodeSpan>git commit --no-verify</CodeSpan>
          </Appear>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Perform Linting on a build pipeline{" "}
          <Appear>Pro: Breaks the build and makes fixing it a priority</Appear>{" "}
          <Appear>Con: Might slow down builds with non-issues</Appear>
        </ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
