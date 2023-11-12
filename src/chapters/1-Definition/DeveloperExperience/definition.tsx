import { SlideLayout, Appear, Notes, Heading } from "spectacle";
import { Definition } from "@Components/Definition/Definition";
import styled from "@emotion/styled";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const DeveloperExperienceDefinitionSlide = () => (
  <SlideLayout.Center>
    <StyledDefinitionsWrapper>
      <Appear>
        <Heading>{"Developer Experience"}</Heading>
      </Appear>
      <Appear>
        <Definition>
          {`... encompasses the experiences of your internal software developers as they carry out their work.`}
          <p />
          <Appear>{}</Appear>
        </Definition>
      </Appear>
    </StyledDefinitionsWrapper>
    <DeveloperExperienceDefinitionNotes />
  </SlideLayout.Center>
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
      notes={[
        "Developer Experience",
        `... encompasses the experiences of your internal software developers as they carry out their work.`,
        `... that involves making sure their tools, processes, and working environment are all conducive to their best work.`,
      ]}
    />
  </Notes>
);
