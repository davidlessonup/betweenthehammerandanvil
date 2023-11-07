import { Heading, UnorderedList, ListItem, Slide } from "spectacle";
import { Deprecated } from "@Components/Deprecated/Deprecated";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export interface ContentEntryProps {
  hide: boolean;
  children: string;
  deprecated?: boolean;
}

const ContentEntry: React.FC<ContentEntryProps> = ({
  hide,
  children,
  deprecated,
}) => {
  if (deprecated) {
    return (
      <Deprecated>
        <ListItem>{children}</ListItem>
      </Deprecated>
    );
  }

  if (hide) {
    return (
      <HiddenWrapper>
        <ListItem>{children}</ListItem>
      </HiddenWrapper>
    );
  }

  return <ListItem>{children}</ListItem>;
};

export interface TableOfContentsSlideProps {
  chapter: number;
}

const topics = [
  "Chapter 1: What is this talk about?",
  "Chapter 2: Sowing the seeds of progress",
  "Chapter 3: A tale of caution",
];

const longest = topics.reduce((acc, t) => (t.length > acc ? t.length : acc), 0);

export const TableOfContentsSlide: React.FC<TableOfContentsSlideProps> = ({
  chapter = 1,
}) => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"ls -lh"}</LinuxCommandSpan>
    </Heading>
    <UnorderedList>
      <ContentEntry hide={false} deprecated>
        {"Intro"}
      </ContentEntry>
      {topics.map((topic, index) => (
        <ContentEntry
          hide={chapter < index + 1}
          deprecated={chapter > index + 1}
          key={`table-of-contents-topic${index}`}
        >
          {topic}
        </ContentEntry>
      ))}
      <ContentEntry hide={false} deprecated={chapter >= topics.length + 2}>
        {"Outro"}
      </ContentEntry>
    </UnorderedList>
  </Slide>
);

const HiddenWrapper = styled.div`
  position: relative;

  &:after {
    content: " ";
    background: ${colors.primary};
    position: absolute;
    width: ${longest}ch;
    height: 100%;
    top: 0;
    left: 0.5ch;
  }
`;
