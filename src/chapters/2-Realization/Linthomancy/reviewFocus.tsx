import { SlideLayout, Notes, Stepper } from "spectacle";
import "react-svg-radar-chart/build/css/index.css";
import {
  defaultReviewChartData,
  ReviewFocusRadarChart,
  RadarChartData,
} from "./components/ReviewFocusChart";
import { NotesTable } from "@Components/NotesTable/NotesTable";

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
    {"Let's consider the act of Code Review, and it's purpose."}
    <p />
    {"It aims to:"}
    <NotesTable
      slideName="review-focus-linthomancy"
      notes={[
        "Catch unwanted effects",
        "Sanity check approaches",
        "Keep development in a straight path",
        "And to help enforce agreed upon standards",
      ]}
    />
    {
      "Now if we were to divide the action of of a Code Review into four dimensions, those being:"
    }
    <NotesTable
      slideName="review-focus-linthomancy"
      notes={["Readability", "Standards", "Flow", "Performance"]}
    />
    {
      "But what if there was something we could do to maximize one or more dimensions without afecting the others?"
    }
  </Notes>
);
