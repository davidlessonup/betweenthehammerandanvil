import { Appear, SlideLayout, Notes, FlexBox } from "spectacle";
import { Definition } from "@Components/Definition/Definition";
import { colors } from "@Foundations/colors";
import { AiOutlineArrowDown } from "react-icons/ai";

export const LinthomanyDefinitionSlide = () => (
  <SlideLayout.Center>
    <Definition>
      {`Lithomancy is a form of divination by which the future is told using stones or the reflected light from the stones.`}
    </Definition>
    <Appear>
      <FlexBox justifyContent="center">
        <AiOutlineArrowDown size="80" fill={colors.primary} />
      </FlexBox>
      <Definition>
        {`LINThomancy is a form of development by which the review is
            performed by only looking at the flow of the code.`}
      </Definition>
    </Appear>
    <LinthomancyDefinitionNotes />
  </SlideLayout.Center>
);

const LinthomancyDefinitionNotes = () => (
  <Notes>
    {"Has anyone here ever heard of lithomacy?"}
    <p />
    {"What about LINThomacy?"}
  </Notes>
);
