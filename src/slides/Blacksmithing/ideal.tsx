import { Heading, Slide, Grid, FlexBox, Appear } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";

export const BlacksmithIdealSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>find . -regex 'blacksmith'</LinuxCommandSpan>
    </Heading>
    <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
      <FlexBox alignItems="center" justifyContent="center">
        <Appear>
          <Definition>
            Unlike many other craftsmen, blacksmiths are able to make most of
            their own tools.
          </Definition>
        </Appear>
      </FlexBox>
    </Grid>
  </Slide>
);
