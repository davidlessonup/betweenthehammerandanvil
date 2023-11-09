import { Heading, Slide, Appear } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { Definition } from "@Components/Definition/Definition";
import styled from "@emotion/styled";

export const BlacksmithDefinitionSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>{"find . -regex 'blacksmith'"}</LinuxCommandSpan>
    </Heading>
    <StyledDefinitionsWrapper>
      <Appear>
        <Definition>
          {`A blacksmith is a metalsmith who creates objects primarily from
                        wrought iron or steel, but sometimes from other metals, by forging
                        the metal, using tools to hammer, bend, and cut.`}
        </Definition>
      </Appear>
      <Appear>
        <Definition>
          {`...Unlike many other craftsmen, blacksmiths are able to make most of
                        their own tools.`}
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
