import { Heading, Slide, Grid, FlexBox, Appear } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";

export const DeveloperExperienceDefinitionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>find . -regex 'dx'</LinuxCommandSpan>
    </Heading>
    <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
      <FlexBox alignItems="center" justifyContent="center">
        <Appear>
          <Definition>
            Developer Experience encompasses the experiences of your internal
            software developers as they carry out their work. That involves
            making sure their tools, processes, and working environment are all
            conducive to their best work.
          </Definition>
        </Appear>
      </FlexBox>
    </Grid>
  </Slide>
);
