import { UnorderedList, ListItem, Appear, Slide } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { Quote } from "@Components/Quote/Quote";

export const OutroSlide = () => (
  <Slide>
    <CommandHeading>{"pkill -9 presentation"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <Quote author="Jean-Paul Sartre">
          {
            "As far as men go, it is not what they are that interests me, but what they can become"
          }
        </Quote>
      </Appear>
      <Appear>
        <ListItem>{"Thank you for joining"}</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
