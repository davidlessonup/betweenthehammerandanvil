import { Deck } from "spectacle";
import { ProgressTemplate } from "@Templates/Progress/Progress";
import { IntroductionChapter } from "@Chapters/Intro";
import { DefinitionChapter } from "@Chapters/1-Definition";
import { RealizationChapter } from "@Chapters/2-Realization";
import { OutroChapter } from "@Chapters/Outro";
import { QAChapter } from "@Chapters/QA";
import { TableOfContentsSlide } from "@Slides/TableOfContents";
import { theme, slideTransition } from "@Templates/Theme/Theme";
import styled from "@emotion/styled";
import { fonts } from "@Foundations/typography";

export const SlideDeck = () => (
  <StyledDeckWrapper>
    <Deck
      theme={theme}
      template={ProgressTemplate}
      transition={slideTransition}
    >
      <IntroductionChapter />
      <TableOfContentsSlide chapter={1} />
      <DefinitionChapter />
      <TableOfContentsSlide chapter={2} />
      <RealizationChapter />
      <TableOfContentsSlide chapter={3} />
      <OutroChapter />
      <QAChapter />
    </Deck>
  </StyledDeckWrapper>
);

const StyledDeckWrapper = styled.div`
  font-family: ${fonts};
`;
