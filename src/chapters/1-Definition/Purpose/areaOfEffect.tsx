import { SlideLayout, Notes, Stepper } from "spectacle";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImInfinite } from "react-icons/im";
import { NotesTable } from "@Components/NotesTable/NotesTable";

type StyledDiagramRectangleType = "neutral" | "highlighted" | "inactive";

type StyledDiagramRectangleProps = {
  type: StyledDiagramRectangleType;
};

const stepperValues = [
  "diagram",
  "inactive",
  "development",
  "testing",
  "maintenance",
] as const;

type StepperValues = (typeof stepperValues)[number];

export const PurposeAreaOfEffectSlide = () => (
  <SlideLayout.Center>
    <StyledWrapper>
      <Stepper tagName="div" values={stepperValues as unknown as string[]}>
        {(value) => {
          const defaultValue = value === "diagram" ? "neutral" : "inactive";

          return (
            <StyledDiagramWrapper>
              <StyledDiagramIconWrapper>
                <ImInfinite />
                <AiOutlineArrowRight />
              </StyledDiagramIconWrapper>
              <StyledDiagramRectangle type={defaultValue}>
                {"Discovery"}
              </StyledDiagramRectangle>
              <StyledDiagramIconWrapper>
                <AiOutlineArrowRight />
              </StyledDiagramIconWrapper>
              <StyledDiagramRectangle type={defaultValue}>
                {"Design"}
              </StyledDiagramRectangle>
              <StyledDiagramIconWrapper>
                <AiOutlineArrowRight />
              </StyledDiagramIconWrapper>
              <StyledDiagramRectangle
                type={shouldHighlight(
                  value,
                  ["development", "testing", "maintenance"],
                  defaultValue,
                )}
              >
                {"Development"}
              </StyledDiagramRectangle>
              <StyledDiagramIconWrapper>
                <AiOutlineArrowRight />
              </StyledDiagramIconWrapper>
              <StyledDiagramRectangle
                type={shouldHighlight(
                  value,
                  ["testing", "maintenance"],
                  defaultValue,
                )}
              >
                {"Testing / QA"}
              </StyledDiagramRectangle>
              <StyledDiagramIconWrapper>
                <AiOutlineArrowRight />
              </StyledDiagramIconWrapper>
              <StyledDiagramRectangle type={defaultValue}>
                {"Release"}
              </StyledDiagramRectangle>
              <StyledDiagramIconWrapper>
                <AiOutlineArrowRight />
              </StyledDiagramIconWrapper>
              <StyledDiagramRectangle
                type={shouldHighlight(value, ["maintenance"], defaultValue)}
              >
                {"Maintenace"}
              </StyledDiagramRectangle>
              <StyledDiagramIconWrapper>
                <AiOutlineArrowRight />
                <ImInfinite />
              </StyledDiagramIconWrapper>
            </StyledDiagramWrapper>
          );
        }}
      </Stepper>
    </StyledWrapper>
    <PurposeAreaOfEffectNotes />
  </SlideLayout.Center>
);

const shouldHighlight = function shouldHighlight(
  value: unknown,
  allowedValues: StepperValues[],
  defaultType: StyledDiagramRectangleType,
): StyledDiagramRectangleType {
  if (allowedValues.includes(value as StepperValues)) {
    return "highlighted";
  }

  return defaultType;
};

const PurposeAreaOfEffectNotes = () => (
  <Notes>
    {"This talk will focus on the following aspects:"}
    <NotesTable
      slideName="defintion-aoe"
      notes={["Development", "Testing & QA, to some extent", "Maintenance"]}
    />
  </Notes>
);

const StyledDiagramIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiagramWrapper = styled.div`
  display: flex;
  align-items: stretch;
  font-size: 25px;
  gap: 8px;
  justify-content: center;
`;

const getOpacity = function getOpacity(props: StyledDiagramRectangleProps) {
  switch (props.type) {
    case "inactive":
      return "0.2";
    default:
      return "1";
  }
};

const StyledDiagramRectangle = styled.div<StyledDiagramRectangleProps>`
  background: ${(props) =>
    props.type === "highlighted" ? colors.primary : colors.secondary};
  color: ${colors.quaternary};
  padding: 10px;
  opacity: ${getOpacity};
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
