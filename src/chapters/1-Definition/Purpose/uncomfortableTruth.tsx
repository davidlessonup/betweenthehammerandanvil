import { SlideLayout, Appear, Notes } from "spectacle";
import { SubHeading } from "@Components/SubHeading/SubHeading";
import { Definition } from "@Components/Definition/Definition";

export const PurposeUncomfortableTruthSlide = () => (
  <SlideLayout.Center>
    <Appear>
      <SubHeading>
        {"The proccess of development is a Zero-sum game"}
      </SubHeading>
    </Appear>
    <Appear>
      <Definition>
        {`A Zero-sum game is a mathematical representation of a situation...`}
        <p />
        {`..where the result is an advantage for one side and an equivalent loss for the others.`}
      </Definition>
    </Appear>
    <PurposeUncomfortableTruthNotes />
  </SlideLayout.Center>
);

const PurposeUncomfortableTruthNotes = () => (
  <Notes>
    {
      "That uncomfortable truth is that there is always a tradeoff, because it is a zero sum game."
    }
    <p />
  </Notes>
);
