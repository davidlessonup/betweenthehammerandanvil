import {
  SlideLayout,
  Notes,
  Heading,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";
import "react-svg-radar-chart/build/css/index.css";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export const LinthomancyReviewSlide = () => (
  <SlideLayout.Center>
    <Heading>{"Code Review"}</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          {"Formatting Consistency"}
          <StyledLabel>{"(Readability)"}</StyledLabel>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Consistency with Standards"}
          <StyledLabel>{"(Standards)"}</StyledLabel>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Code Issues"}
          <StyledLabel>{"(Flow)"}</StyledLabel>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Code Quality"}
          <StyledLabel>{"(Performance)"}</StyledLabel>
        </ListItem>
      </Appear>
    </UnorderedList>
    <LinthomancyReviewNotes />
  </SlideLayout.Center>
);

const LinthomancyReviewNotes = () => (
  <Notes>
    {"Let's consider the act of a Code Review"}
    <p />
    {"It aims to check"}
    <NotesTable
      slideName="review-linthomancy"
      notes={[
        "Formatting consistency (Readability)",
        "Consistency with standards (Standards)",
        "Code issues (Flow)",
        "Code quality (Performance)",
      ]}
    />
  </Notes>
);

const StyledLabel = styled.span`
  color: ${colors.secondary};
  padding-left: 10px;
`;
