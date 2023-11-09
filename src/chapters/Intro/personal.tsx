import { Heading, Text, Appear, Slide, Grid, FlexBox, Notes } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const PersonalIntroductionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"whoami"}</LinuxCommandSpan>
    </Heading>
    <Grid
      gridTemplateColumns="50% 50%"
      gridTemplateRows="50% 50%"
      height="100%"
    >
      <Appear>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"David"}</Text>
        </FlexBox>
      </Appear>
      <Appear priority={4}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"Cinephile"}</Text>
        </FlexBox>
      </Appear>
      <Appear priority={3}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"JRPG aficionado"}</Text>
        </FlexBox>
      </Appear>
      <Appear priority={1}>
        <FlexBox alignItems="center" justifyContent="center">
          <Text>{"Metalhead"}</Text>
        </FlexBox>
      </Appear>
    </Grid>
    <PersonalIntroductionNotes />
  </Slide>
);

const PersonalIntroductionNotes = () => <Notes />;
