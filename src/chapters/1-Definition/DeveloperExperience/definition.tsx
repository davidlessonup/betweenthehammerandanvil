import { Heading, Slide, Appear } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";
import styled from "@emotion/styled";

export const DeveloperExperienceDefinitionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"find . -regex 'dx'"}</LinuxCommandSpan>
    </Heading>
    <StyledDefinitionsWrapper>
      <Appear>
        <Definition>
          {`Developer Experience encompasses the experiences of your internal software developers as they carry out their work...`}
        </Definition>
      </Appear>
      <Appear>
        <Definition>
          {`...that involves making sure their tools, processes, and working environment are all conducive to their best work.`}
        </Definition>
      </Appear>
    </StyledDefinitionsWrapper>
  </Slide>
);

const StyledDefinitionsWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
