import { Text, Appear, Slide, Grid, FlexBox, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";
import { NotesTable } from "@Components/NotesTable";

export const ProfessionalIntroductionSlide = () => (
  <Slide>
    <CommandHeading>{"who -a"}</CommandHeading>
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

const ProfessionalIntroductionNotes = () => (
  <Notes>
    <NotesTable
      slideName="intro-professional"
      notes={[
        "I've been coding for 22 years",
        "I enjoy pushing CSS to it's limits",
        "I dabble in code golfing from time to time",
        "I champion for good UI/UX approches",
      ]}
    />
  </Notes>
);
