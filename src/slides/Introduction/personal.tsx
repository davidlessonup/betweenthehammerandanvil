import { Heading, Text, Appear, Slide, Grid, FlexBox } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const PersonalIntroductionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>whoami</LinuxCommandSpan>
    </Heading>

    <Grid
      gridTemplateColumns="50% 50%"
      gridTemplateRows="33% 33%"
      height="100%"
    >
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>David</Text>
        </FlexBox>
      </Appear>
      <Appear priority={4}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>(Almost) 33!</Text>
        </FlexBox>
      </Appear>
      <Appear priority={5}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>Started coding at 11 years old</Text>
        </FlexBox>
      </Appear>
      <Appear priority={3}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>JRPG aficionado</Text>
        </FlexBox>
      </Appear>
      <Appear priority={1}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>Metalhead</Text>
        </FlexBox>
      </Appear>
      <Appear priority={6}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>Movie Buff</Text>
        </FlexBox>
      </Appear>
    </Grid>
  </Slide>
);
