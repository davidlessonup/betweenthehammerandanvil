import {
  SlideLayout,
  Notes,
  Heading,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export const PurposeArchetypesIntroSlide = () => (
  <SlideLayout.Center>
    <Heading>{"Development Focus"}</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          {"Consistency and architecture"}
          <StyledLabel>{"(Readability)"}</StyledLabel>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Speed of feature delivery"}
          <StyledLabel>{"(Delivery)"}</StyledLabel>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Future-proofing and Scalability"}
          <StyledLabel>{"(Expandability)"}</StyledLabel>
        </ListItem>
      </Appear>
    </UnorderedList>
    <PurposeArchetypesIntrowNotes />
  </SlideLayout.Center>
);

const PurposeArchetypesIntrowNotes = () => (
  <Notes>
    {"About Development Focus"}
    <p />
    {"If we were to talk about the three most important points they would be"}
    <NotesTable
      slideName="prupose-archetypes-intro"
      notes={[
        "Consistency and architecture (Readability)",
        "Speed of feature delivery (Delivery)",
        "Future-proofing and Scalability (Expandability)",
      ]}
    />
  </Notes>
);

const StyledLabel = styled.span`
  color: ${colors.secondary};
  padding-left: 10px;
`;
