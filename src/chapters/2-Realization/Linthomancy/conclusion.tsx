import { Slide, Appear, UnorderedList, ListItem } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";

export const LintConclusionSlide = () => (
  <Slide>
    <CommandHeading>{"git checkout"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>
          {
            "A democratically voted standard will always be better than no standard"
          }
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Standards can always be revised in the future"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {
            "An industry standard might not be the best option for your ecosystem"
          }
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"It is never too late to implement standards"}</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
