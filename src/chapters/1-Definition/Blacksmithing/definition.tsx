import { SlideLayout, Appear, Notes, Heading } from "spectacle";
import { Definition } from "@Components/Definition/Definition";
import styled from "@emotion/styled";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import { SubHeading } from "@Components/SubHeading/SubHeading";

export const BlacksmithDefinitionSlide = () => (
  <SlideLayout.Center>
    <StyledDefinitionsWrapper>
      <Heading>{"Blacksmithing"}</Heading>
      <Appear>
        <Definition>
          {`A blacksmith is a metalsmith who creates objects, by forging
                        the metal, using tools to hammer, bend, and cut.`}
        </Definition>
        <Appear>
          <SubHeading>
            {`Blacksmiths are able to make most of
                        their own tools.`}
          </SubHeading>
        </Appear>
      </Appear>
    </StyledDefinitionsWrapper>
    <BlacksmithDefinitionNotes />
  </SlideLayout.Center>
);

const BlacksmithDefinitionNotes = () => (
  <Notes>
    <NotesTable
      slideName="definition-blacksmith-definition"
      notes={[
        "Before we go any further, we'll start by defining the meta topics of this talk.",
        "Blacksmithing",
        "Everyone knows what a blacksmith is, right?",
      ]}
    />
    {`A blacksmith is a metalsmith who creates objects, by forging
                        the metal, using tools to hammer, bend, and cut.`}
    <p />
    {`... unlike many other craftsmen, blacksmiths are able to make most of
                        their own tools.`}
    <p />
    {"The biggest takeaway here is their ability to make their own tools"}
  </Notes>
);

const StyledDefinitionsWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
