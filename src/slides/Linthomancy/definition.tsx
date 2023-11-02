import { Heading, Appear, Slide, Grid, FlexBox } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";
import { IconArrowDown } from "@Components/Icons/DownArrow";
import { colors } from "@Foundations/colors";

export const LinthomanyDefinitionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>find . -regex 'lin?thomancy'</LinuxCommandSpan>
    </Heading>
    <Grid
      gridTemplateColumns="100%"
      gridTemplateRows="30% 20% 30%"
      height="100%"
    >
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Definition>
            Lithomancy is a form of divination by which the future is told using
            stones or the reflected light from the stones.
          </Definition>
        </FlexBox>
      </Appear>
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <IconArrowDown height="80px" width="80px" fill={colors.primary} />
        </FlexBox>
      </Appear>
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Definition>
            LINThomancy is a form of development by which the review is
            performed by only looking at the flow of the code and it's
            organization.
          </Definition>
        </FlexBox>
      </Appear>
    </Grid>
  </Slide>
);