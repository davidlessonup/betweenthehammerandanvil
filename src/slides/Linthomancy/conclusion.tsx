import { Heading, Slide, Appear, UnorderedList, ListItem } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan";

export const LintConclusionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>git checkout</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          A democratilly voted standard will always be better than no standard
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Standards can always be revised in the future</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          An industry standard might not be the best option for your ecosystem
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>It is never too late to implement standards</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
