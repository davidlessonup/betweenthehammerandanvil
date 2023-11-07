import { Heading, UnorderedList, ListItem, Appear, Slide } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { Quote } from "@Components/Quote/Quote";

export const OutroSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"pkill -9 presentation"}</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <Quote author="Jean-Paul Sartre">
          {
            "As far as men go, it is not what they are that interests me, but what"
          }
          {"they can become"}
        </Quote>
      </Appear>
      <Appear>
        <ListItem>{"Thank you for joining"}</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
