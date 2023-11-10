import { Slide, Appear, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { Definition } from "@Components/Definition/Definition";
import styled from "@emotion/styled";
import { SubHeading } from "@Components/SubHeading/SubHeading";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const DeveloperExperienceDefinitionSlide = () => (
  <Slide>
    <CommandHeading>{"find . -regex 'dx'"}</CommandHeading>
    <StyledDefinitionsWrapper>
      <Appear>
        <SubHeading>{"Developer Experience"}</SubHeading>
      </Appear>
      <Appear>
        <Definition>
          {`... encompasses the experiences of your internal software developers as they carry out their work.`}
          <p />
          <Appear>
            {`... that involves making sure their tools, processes, and working environment are all conducive to their best work.`}
          </Appear>
        </Definition>
      </Appear>
    </StyledDefinitionsWrapper>
    <DeveloperExperienceDefinitionNotes />
  </Slide>
);

const StyledDefinitionsWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const DeveloperExperienceDefinitionNotes = () => (
  <Notes>
    {"And now we arrive to the most important concept"}
    <NotesTable
      slideName="definition-developer-experience-definition"
      notes={["Developer Experience"]}
    />
  </Notes>
);
