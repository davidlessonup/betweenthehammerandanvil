import { Heading, Slide, Notes, UnorderedList, ListItem } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";
import { SubHeading } from "@Components/SubHeading/SubHeading";

export const PurposeUncomfortableTruthSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>cat zerosumgame.txt</LinuxCommandSpan>
    </Heading>
    <SubHeading>The proccess of development is a Zero-sum game</SubHeading>
    <Definition>
      A Zero-sum game is a mathematical representation in game theory and
      economic theory of a situation that involves two sides, where the result
      is an advantage for one side and an equivalent loss for the other.
    </Definition>
    <PurposeUncomfortableTruthNotes />
  </Slide>
);

const PurposeUncomfortableTruthNotes = () => (
  <Notes>
    There is always a tradeoff between, this is a zero sum game.
    <UnorderedList>
      <ListItem>Reliability</ListItem>
      <ListItem>Delivery</ListItem>
      <ListItem>Viability</ListItem>
    </UnorderedList>
  </Notes>
);
