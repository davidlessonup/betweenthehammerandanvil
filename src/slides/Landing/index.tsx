import { Heading, Slide, Grid, FlexBox, Notes } from "spectacle";
import { IconHammerAnvil } from "@Components/Icons/HammerAnvil";
import { colors } from "@Foundations/colors";

export const LandingSlide = () => (
  <Slide>
    <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
      <FlexBox alignItems="center" justifyContent="center">
        <Heading>
          Between the hammer and the anvil
          <p>
            <IconHammerAnvil height="300" width="300" fill={colors.primary} />
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
      <li>Make sure everyone joined</li>
      <li>Start recording</li>
    </ul>
  </Notes>
);
