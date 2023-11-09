import { Heading, Text, Appear, Slide, Grid, FlexBox, Notes } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const ProfessionalIntroductionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"who -a"}</LinuxCommandSpan>
    </Heading>
    <Grid
      gridTemplateColumns="50% 50%"
      gridTemplateRows="50% 50%"
      height="100%"
    >
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"Started coding 22 years ago"}</Text>
        </FlexBox>
      </Appear>
      <Appear priority={2}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"Code Golfer"}</Text>
        </FlexBox>
      </Appear>
      <Appear priority={3}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"UI/UX fanatic"}</Text>
        </FlexBox>
      </Appear>
      <Appear priority={1}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"CSS enjoyer"}</Text>
        </FlexBox>
      </Appear>
    </Grid>
    <ProfessionalIntroductionNotes />
  </Slide>
);

const ProfessionalIntroductionNotes = () => <Notes />;
