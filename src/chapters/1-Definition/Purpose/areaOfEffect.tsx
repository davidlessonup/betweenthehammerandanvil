import {
  Heading,
  Slide,
  Notes,
  UnorderedList,
  ListItem,
  Stepper,
  Grid,
  FlexBox,
} from "spectacle";
import styled from "@emotion/styled";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { colors } from "@Foundations/colors";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImInfinite } from "react-icons/im";

export const PurposeAreaOfEffectSlide = () => {
  return (
    <Slide>
      <Heading>
        <LinuxCommandSpan>cat area.txt</LinuxCommandSpan>
      </Heading>
      <Stepper
        tagName="div"
        values={["diagram", "effect", "development", "testing", "maintenance"]}
      >
        {(_, step) => (
          <>
            <StyledDiagramWrapper>
              <ImInfinite />
              <AiOutlineArrowRight />
              <StyledDiagramRectangle type={step > 0 ? "inactive" : "neutral"}>
                Discovery
              </StyledDiagramRectangle>
              <AiOutlineArrowRight />
              <StyledDiagramRectangle type={step > 0 ? "inactive" : "neutral"}>
                Design
              </StyledDiagramRectangle>
              <AiOutlineArrowRight />
              <StyledDiagramRectangle
                type={step > 0 ? "highlighted" : "neutral"}
              >
                Development
              </StyledDiagramRectangle>
              <AiOutlineArrowRight />
              <StyledDiagramRectangle
                type={step > 0 ? "highlighted" : "neutral"}
              >
                Testing & QA
              </StyledDiagramRectangle>
              <AiOutlineArrowRight />
              <StyledDiagramRectangle type={step > 0 ? "inactive" : "neutral"}>
                Release
              </StyledDiagramRectangle>
              <AiOutlineArrowRight />
              <StyledDiagramRectangle
                type={step > 0 ? "highlighted" : "neutral"}
              >
                Maintenace
              </StyledDiagramRectangle>
              <AiOutlineArrowRight />
              <ImInfinite />
            </StyledDiagramWrapper>
            <Grid
              gridTemplateColumns="33% 33% 33%"
              gridTemplateRows="100%"
              height="50vh"
            >
              {step > 1 && (
                <FlexBox alignItems="center" justifyContent="center">
                  Development
                </FlexBox>
              )}
              {step > 2 && <FlexBox>Testing & QA</FlexBox>}
              {step > 3 && <FlexBox>Maintenance</FlexBox>}
            </Grid>
          </>
        )}
      </Stepper>
      <PurposeAreaOfEffectNotes />
    </Slide>
  );
};

const PurposeAreaOfEffectNotes = () => (
  <Notes>
    This talk will focus on the following aspects:
    <UnorderedList>
      <ListItem>Development</ListItem>
      <ListItem>Testing & QA</ListItem>
      <ListItem>Maintenance</ListItem>
    </UnorderedList>
  </Notes>
);

const StyledDiagramWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

type StyledDiagramRectangleProps = {
  type: "neutral" | "highlighted" | "inactive";
};

const StyledDiagramRectangle = styled.div<StyledDiagramRectangleProps>`
  background: ${colors.secondary};
  color: ${colors.quaternary};
  padding: 10px;
  opacity: ${getOpacity};
`;

function getOpacity(props: StyledDiagramRectangleProps) {
  switch (props.type) {
    case "inactive":
      return "0.2";
    default:
      return "1";
  }
}
