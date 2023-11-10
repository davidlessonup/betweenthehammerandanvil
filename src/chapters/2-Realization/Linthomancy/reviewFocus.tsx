import { Slide, Notes, UnorderedList, ListItem, Stepper } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { Quote } from "@Components/Quote/Quote";
import styled from "@emotion/styled";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import { fonts } from "@Foundations/typography";
import { colors, chartColors } from "@Foundations/colors";

interface RadarChartData {
  data: {
    readability: number;
    standards: number;
    flow: number;
    performance: number;
  };
  meta: {
    color: string;
  };
}

const stepperValues = ["default", "improved", "quote"] as const;

type DiagramSteps = (typeof stepperValues)[number];

const defaultChartData: RadarChartData = {
  data: {
    readability: 0.3,
    standards: 0.3,
    flow: 0.3,
    performance: 0.3,
  },
  meta: { color: chartColors.primary },
};

const improvedChartData: RadarChartData = {
  data: {
    readability: 0,
    standards: 0,
    flow: 1,
    performance: 1,
  },
  meta: { color: chartColors.secondary },
};

const stateMapper: Record<DiagramSteps, RadarChartData[]> = {
  default: [defaultChartData],
  improved: [defaultChartData, improvedChartData],
  quote: [defaultChartData, improvedChartData],
};

const captions = {
  readability: "R",
  standards: "S",
  flow: "F",
  performance: "P",
};

export const LinthomancyReviewFocusSlide = () => (
  <Slide>
    <CommandHeading>{"cat focus.txt"}</CommandHeading>
    <Stepper tagName="div" values={stepperValues as unknown as string[]}>
      {(value) => {
        const data = stateMapper[value as DiagramSteps] ?? [];

        return (
          <>
            <StyledRadarChart>
              <RadarChart
                options={{
                  zoomDistance: 1.3,
                  captionProps: () => ({
                    className: "styled-caption",
                    textAnchor: "middle",
                    fontSize: 16,
                    fontFamily: fonts,
                  }),
                }}
                captions={captions}
                data={data}
                size={400}
              />
              <div>
                <div>{"R - Readability"}</div>
                <div>{"S - Standards"}</div>
                <div>{"F - Flow"}</div>
                <div>{"P - Performance"}</div>
              </div>
            </StyledRadarChart>{" "}
            {value === "quote" && (
              <StyledQuoteWrapper>
                <Quote author="Sun Tzu">
                  {"The greatest victory is that which requires no battle."}
                </Quote>
              </StyledQuoteWrapper>
            )}
          </>
        );
      }}
    </Stepper>
    <StyledRadarChartNotationWrapper />
    <LinthomancyReviewFocusNotes />
  </Slide>
);

const LinthomancyReviewFocusNotes = () => (
  <Notes>
    {"There is always a tradeoff between, this is a zero sum game."}
    <UnorderedList>
      <ListItem>{"Readability"}</ListItem>
      <ListItem>{"Standards"}</ListItem>
      <ListItem>{"Flow"}</ListItem>
      <ListItem>{"Performance"}</ListItem>
    </UnorderedList>
  </Notes>
);

const StyledRadarChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  .styled-caption {
    fill: ${colors.secondary};
  }
`;

const StyledRadarChartNotationWrapper = styled.div`
  width: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${colors.secondary};
`;

const StyledQuoteWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: center;
`;
