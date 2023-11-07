import {
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  Appear,
  Slide,
} from "spectacle";
import { Deprecated } from "@Components/Deprecated/Deprecated";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { Acronym } from "@Components/Acronym/Acronym";

export const TableOfContentsSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"ls -lh"}</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <Appear>
        <Deprecated>
          <ListItem>{"Intro"}</ListItem>
        </Deprecated>
      </Appear>
      <Appear>
        <ListItem>{"Purpose of this talk"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"What is "}
          <Acronym acronym="DX">{"Developer Experience"}</Acronym>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Software Craftsmanship"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <CodeSpan>{"LINT"}</CodeSpan>
          {"homancy"}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"A guide to "}
          <CodeSpan>{"CLI"}</CodeSpan>
          {"an code"}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Dealing with "}
          <CodeSpan>{"Script"}</CodeSpan>
          {"Kitties"}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Outro"}</ListItem>
      </Appear>
    </UnorderedList>
  </Slide>
);
