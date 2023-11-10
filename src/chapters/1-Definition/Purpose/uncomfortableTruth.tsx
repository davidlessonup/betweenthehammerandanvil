import { Slide, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";
import { SubHeading } from "@Components/SubHeading";
import { Definition } from "@Components/Definition/Definition";

export const PurposeUncomfortableTruthSlide = () => (
  <Slide>
    <CommandHeading>{"cat zerosumgame.txt"}</CommandHeading>
    <SubHeading>{"The proccess of development is a Zero-sum game"}</SubHeading>
    <Definition>
      {`A Zero-sum game is a mathematical representation in game theory and economic theory of a situation that involves two sides, 
      where the result is an advantage for one side and an equivalent loss for the other.`}
    </Definition>
    <PurposeUncomfortableTruthNotes />
  </Slide>
);

const PurposeUncomfortableTruthNotes = () => (
  <Notes>{"There is always a tradeoff, this is a zero sum game."}</Notes>
);
