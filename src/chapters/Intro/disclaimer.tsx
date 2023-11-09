import {
  Heading,
  Slide,
  Notes,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const IntroductionDisclaimerSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"cat disclaimer.txt"}</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <ListItem>{"I'm not an expert, just an observer"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {
            "This talk aims to convey my observations and experiences throughout my career"
          }
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Any code examples will be in TypeScript"}</ListItem>
      </Appear>
    </UnorderedList>
    <IntroductionDisclaimerNotes />
  </Slide>
);

const IntroductionDisclaimerNotes = () => <Notes />;
