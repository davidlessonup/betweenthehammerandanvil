import { Heading, Slide, Appear, OrderedList, ListItem } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const LintLandingSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>man linthomancy</LinuxCommandSpan>
    </Heading>
    <OrderedList>
      <Appear>
        <ListItem>What is linthomancy?</ListItem>
      </Appear>
      <Appear>
        <ListItem>Applying linthomancy</ListItem>
      </Appear>
      <Appear>
        <ListItem>Failing your way to success</ListItem>
      </Appear>
      <Appear>
        <ListItem>Key takeaways</ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);
