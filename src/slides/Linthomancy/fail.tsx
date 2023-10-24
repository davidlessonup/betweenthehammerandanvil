import {
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  CodeSpan,
} from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const LinthomancyFailSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>git push --force</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          Create a pre-commit hook to run all linting{" "}
          <Appear>
            Loses to <CodeSpan>git commit --no-verify</CodeSpan>
          </Appear>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Have developers use an IDE plugin{" "}
          <Appear>Loses to someone just not using it</Appear>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Perform Linting on a build pipeline</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
