import { Slide, Appear, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { Definition } from "@Components/Definition/Definition";
import styled from "@emotion/styled";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import { SubHeading } from "@Components/SubHeading/SubHeading";

export const BlacksmithDefinitionSlide = () => (
  <Slide>
    <CommandHeading>{"find . -regex 'blacksmith'"}</CommandHeading>
    <StyledDefinitionsWrapper>
      <Appear>
        <SubHeading>{"Blacksmithing"}</SubHeading>
      </Appear>
      <Appear>
        <Definition>
          {`A blacksmith is a metalsmith who creates objects primarily from
                        wrought iron or steel, by forging
                        the metal, using tools to hammer, bend, and cut.`}
          <p />
          <Appear>
            {`... unlike many other craftsmen, blacksmiths are able to make most of
                        their own tools.`}
          </Appear>
        </Definition>
      </Appear>
    </StyledDefinitionsWrapper>
    <BlacksmithDefinitionNotes />
  </Slide>
);

const BlacksmithDefinitionNotes = () => (
  <Notes>
    <NotesTable
      slideName="definition-blacksmith-definition"
      notes={[
        "Before we go any further, we'll start by defining the meta topics of this talk.",
        "Blacksmithing",
        "Everyone knows what a blacksmith is, right?",
        "The biggest focus here, is being able to make their own tools",
      ]}
    />
  </Notes>
);

const StyledDefinitionsWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
