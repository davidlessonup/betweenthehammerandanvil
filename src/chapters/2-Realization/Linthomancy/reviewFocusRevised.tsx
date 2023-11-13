import { SlideLayout, Notes, Stepper } from "spectacle";
import {
  defaultReviewChartData,
  improvedReviewChartData,
  ReviewFocusRadarChart,
  RadarChartData,
} from "./components/ReviewFocusChart";

const stepperValues = ["default", "improved"] as const;

type DiagramSteps = (typeof stepperValues)[number];

const stateMapper: Record<DiagramSteps, RadarChartData[]> = {
  default: [defaultReviewChartData],
  improved: [defaultReviewChartData, improvedReviewChartData],
};

export const LinthomancyReviewFocusRevisedSlide = () => (
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
    <LinthomancyReviewFocusRevisedNotes />
  </SlideLayout.Center>
);

const LinthomancyReviewFocusRevisedNotes = () => (
  <Notes>
    {
      "Going back to the four dimensions of a code review, and assuming the usage of a lint"
    }
    <p />
    {
      "We'd have significant gains on two dimensions, without sacrificing any other dimension"
    }
  </Notes>
);
