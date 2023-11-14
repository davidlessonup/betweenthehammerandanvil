import {
  SlideLayout,
  Notes,
  UnorderedList,
  ListItem,
  Appear,
  Heading,
} from "spectacle";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const CautionSlide = () => (
  <SlideLayout.Center>
    <Heading>{"But beware"}</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>{"Never let tools become crutches"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Sometimes what is required is a process change"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Tools can and will fail without warning"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"If you want to be at the bleeding edge, bleed responsibly"}
        </ListItem>
      </Appear>
    </UnorderedList>
    <IntroductionDisclaimerNotes />
  </SlideLayout.Center>
);

const IntroductionDisclaimerNotes = () => (
  <Notes>
    {"However, we must stay vigilant"}
    <NotesTable
      slideName="list-caution"
      notes={[
        "The tools should never become crutches, they should only be improvements",
        "Sometimes the process is what needs to change, rather than creating a tool",
        "Tools might fail us without us knowing, so consider sanity checking every once in a while",
        "And in the case of using up and coming tools, be wary of their production readiness",
      ]}
    />
  </Notes>
);
