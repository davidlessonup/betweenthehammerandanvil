import { Heading, Slide, Grid, FlexBox, Appear } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";

export const SoftwareCraftsmanshipDefinitionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>find . -regex 'craftsmanship'</LinuxCommandSpan>
    </Heading>
    <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
      <FlexBox alignItems="center" justifyContent="center">
        <Appear>
          <Definition>
            Software craftsmanship is an approach to software development that
            emphasizes the coding skills of the software developers. It is a
            response by software developers to the perceived ills of the
            mainstream software industry, including the prioritization of
            financial concerns over developer accountability.
          </Definition>
        </Appear>
      </FlexBox>
    </Grid>
  </Slide>
);
