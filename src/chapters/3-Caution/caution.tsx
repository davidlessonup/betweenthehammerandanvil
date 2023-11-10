import { Slide, Notes, UnorderedList, ListItem, Appear } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";

export const CautionSlide = () => (
  <Slide>
    <CommandHeading>{"cat caution.txt"}</CommandHeading>
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
