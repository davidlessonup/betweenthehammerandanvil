import { Heading, Slide, Notes, UnorderedList, ListItem } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const PurposeArchetypesSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>cat archetypes.txt</LinuxCommandSpan>
    </Heading>
    Radar charts with Reliability / Delivery / Viability
    <PurposeArchetypesNotes />
  </Slide>
);

const PurposeArchetypesNotes = () => (
  <Notes>
    There is always a tradeoff between, this is a zero sum game.
    <UnorderedList>
      <ListItem>Reliability</ListItem>
      <ListItem>Delivery</ListItem>
      <ListItem>Viability</ListItem>
    </UnorderedList>
  </Notes>
);
