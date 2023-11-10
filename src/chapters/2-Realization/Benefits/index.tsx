import { Slide, UnorderedList, ListItem, Appear } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";

export const BenefitsSubChapter = () => (
  <Slide>
    <CommandHeading>{"cat benefits.txt"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>{"Easier onboarding"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Automated assistance"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Incredible guideship to junior members"}</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
