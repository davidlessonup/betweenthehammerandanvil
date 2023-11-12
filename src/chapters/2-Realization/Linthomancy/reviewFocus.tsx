import { SlideLayout, Notes, Stepper } from "spectacle";
import "react-svg-radar-chart/build/css/index.css";
import {
  defaultReviewChartData,
  ReviewFocusRadarChart,
  RadarChartData,
} from "./components/ReviewFocusChart";

const stepperValues = ["default"] as const;

type DiagramSteps = (typeof stepperValues)[number];

const stateMapper: Record<DiagramSteps, RadarChartData[]> = {
  default: [defaultReviewChartData],
};

export const LinthomancyReviewFocusSlide = () => (
  <SlideLayout.Center>
    <Stepper
      alwaysVisible
      tagName="div"
      values={stepperValues as unknown as string[]}
    >
      {(value) => {
        const data = stateMapper[value as DiagramSteps] ?? [];

        return <ReviewFocusRadarChart data={data} />;
      }}
    </Stepper>
    <LinthomancyReviewFocusNotes />
  </SlideLayout.Center>
);

const LinthomancyReviewFocusNotes = () => (
  <Notes>
    {
      "Now if we take those dimensions of a code review, ideally they'd have an uneven split of effort:"
    }
    <p />
    {
      "This ends up requiring a lot of mental effort, which can have it's own pitfalls"
    }
    <p />
    {
      "Is there something we can do to maximize one or more dimensions without afecting the others?"
    }
  </Notes>
);
