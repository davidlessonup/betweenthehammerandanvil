import { Heading, Slide, Appear, OrderedList, ListItem } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";

export const PurposeLandingSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>man purpose</LinuxCommandSpan>
    </Heading>
    <OrderedList>
      <Appear>
        <ListItem>Disclaimer</ListItem>
      </Appear>
      <Appear>
        <ListItem>Area of Effect</ListItem>
      </Appear>
      <Appear>
        <ListItem>Uncomfortable truth (zero sum game) </ListItem>
      </Appear>
      <Appear>
        <ListItem>Archetypes</ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);
