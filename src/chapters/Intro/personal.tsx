import { Text, Appear, Slide, Grid, FlexBox, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const PersonalIntroductionSlide = () => (
  <Slide>
    <CommandHeading>{"whoami"}</CommandHeading>
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
          <Text>{"JRPG enthusiast"}</Text>
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

const PersonalIntroductionNotes = () => (
  <Notes>
    <NotesTable
      slideName="intro-personal"
      notes={[
        "Name",
        "Music lover, mostly metal genre and sub genres",
        "Gamer, fan of JRPG genre",
        "Enjoyer of cinema",
      ]}
    />
  </Notes>
);
