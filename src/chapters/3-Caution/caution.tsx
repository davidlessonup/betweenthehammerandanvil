import {
  Heading,
  Slide,
  Notes,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const CautionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"cat caution.txt"}</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <ListItem>{"Never let tools become crutches."}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Sometimes tools will fail without warning."}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {
            "If you want to be at the bleeding edge, you must be prepared to bleed responsibly."
          }
        </ListItem>
      </Appear>
    </UnorderedList>
    <IntroductionDisclaimerNotes />
  </Slide>
);

const IntroductionDisclaimerNotes = () => <Notes />;
