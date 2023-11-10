import { Slide, Appear, UnorderedList, ListItem } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";

export const LintConclusionSlide = () => (
  <Slide>
    <CommandHeading>{"git checkout"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>
          {
            "A democratically voted standard will always trump a lack of standard"
          }
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"It is never too late to implement standards"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {
            "You might be able to automate the enforcement of your custom standards"
          }
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Standards can always be revised in the future"}</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
