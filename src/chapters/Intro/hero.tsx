import { Heading, SlideLayout, Grid, FlexBox, Notes } from "spectacle";
import { colors } from "@Foundations/colors";
import { GiAnvilImpact } from "react-icons/gi";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const HeroSlide = () => (
  <SlideLayout.Center>
    <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
      <FlexBox alignItems="center" justifyContent="center">
        <Heading>
          {"Between the hammer and the anvil"}
          <p>
            <GiAnvilImpact size="300" fill={colors.primary} />
          </p>
        </Heading>
      </FlexBox>
    </Grid>
    <HeroNotes />
  </SlideLayout.Center>
);

const HeroNotes = () => (
  <Notes>
    <NotesTable
      slideName="intro-hero"
      notes={["Make sure everyone joined", "Start recording"]}
    />
  </Notes>
);
