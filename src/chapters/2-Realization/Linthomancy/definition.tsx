import { Appear, Slide, Grid, FlexBox, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { Definition } from "@Components/Definition/Definition";
import { colors } from "@Foundations/colors";
import { AiOutlineArrowDown } from "react-icons/ai";

export const LinthomanyDefinitionSlide = () => (
  <Slide>
    <CommandHeading>{"find . -regex 'lin?thomancy'"}</CommandHeading>
    <Grid
      gridTemplateColumns="100%"
      gridTemplateRows="30% 20% 30%"
      height="100%"
    >
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Definition>
            {`Lithomancy is a form of divination by which the future is told using stones or the reflected light from the stones.`}
          </Definition>
        </FlexBox>
      </Appear>
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <AiOutlineArrowDown size="80" fill={colors.primary} />
        </FlexBox>
      </Appear>
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Definition>
            {`LINThomancy is a form of development by which the review is
            performed by only looking at the flow of the code and it's organization.`}
          </Definition>
        </FlexBox>
      </Appear>
    </Grid>
    <LinthomancyDefinitionNotes />
  </Slide>
);

const LinthomancyDefinitionNotes = () => (
  <Notes>
    {"Has anyone here know the concept of lithomacy?"}
    <p />
    {"What about LINThomacy?"}
  </Notes>
);
