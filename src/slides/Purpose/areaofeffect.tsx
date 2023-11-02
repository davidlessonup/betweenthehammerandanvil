import { Heading, Slide, Notes, UnorderedList, ListItem } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const PurposeAreaOfEffectSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>cat area.txt</LinuxCommandSpan>
    </Heading>
    Discovery - Design - Development - Testing & QA - Release - Maintenace -
    Discovery (Loop)
    <PurposeAreaOfEffectNotes />
  </Slide>
);

const PurposeAreaOfEffectNotes = () => (
  <Notes>
    This talk will focus on the following aspects:
    <UnorderedList>
      <ListItem>Development</ListItem>
      <ListItem>Testing & QA</ListItem>
      <ListItem>Maintenance</ListItem>
    </UnorderedList>
  </Notes>
);
