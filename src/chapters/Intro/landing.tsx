import { Heading, Slide, Grid, FlexBox, Notes } from "spectacle";
import { colors } from "@Foundations/colors";
import { GiAnvilImpact } from "react-icons/gi";

export const LandingSlide = () => (
  <Slide>
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
    <LandingNotes />
  </Slide>
);

const LandingNotes = () => (
  <Notes>
    <ul>
      <li>{"Make sure everyone joined"}</li>
      <li>{"Start recording"}</li>
    </ul>
  </Notes>
);
