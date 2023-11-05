import {
  Heading,
  Slide,
  Notes,
  UnorderedList,
  ListItem,
  Stepper,
} from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import styled from "@emotion/styled";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import { fonts } from "@Foundations/typography";
import { colors, chartColors } from "@Foundations/colors";

interface RadarChartData {
  data: {
    reliability: number;
    delivery: number;
    expandability: number;
  };
  meta: {
    color: string;
  };
}

const stepperValues = [
  "empty",
  "r",
  "d",
  "e",
  "singleComparison",
  "rd",
  "re",
  "de",
  "doubleComparison",
  "rde",
] as const;

type DiagramSteps = (typeof stepperValues)[number];

const diagramStepMapper: Record<DiagramSteps, RadarChartData[]> = {
  empty: [
    {
      data: {
        reliability: 0,
        delivery: 0,
        expandability: 0,
      },
      meta: { color: chartColors.primary },
    },
  ],
  r: [
    {
      data: {
        reliability: 1,
        delivery: 0.1,
        expandability: 0.1,
      },
      meta: { color: chartColors.primary },
    },
  ],
  d: [
    {
      data: {
        reliability: 0.1,
        delivery: 1,
        expandability: 0.1,
      },
      meta: { color: chartColors.primary },
    },
  ],
  e: [
    {
      data: {
        reliability: 0.1,
        delivery: 0.1,
        expandability: 1,
      },
      meta: { color: colors.primary },
    },
  ],
  singleComparison: [
    {
      data: {
        reliability: 1,
        delivery: 0.1,
        expandability: 0.1,
      },
      meta: { color: chartColors.primary },
    },
    {
      data: {
        reliability: 0.1,
        delivery: 1,
        expandability: 0.1,
      },
      meta: { color: chartColors.secondary },
    },
    {
      data: {
        reliability: 0.1,
        delivery: 0.1,
        expandability: 1,
      },
      meta: { color: chartColors.tertiary },
    },
  ],
  rd: [
    {
      data: {
        reliability: 0.7,
        delivery: 0.7,
        expandability: 0.1,
      },
      meta: { color: chartColors.primary },
    },
  ],
  re: [
    {
      data: {
        reliability: 0.7,
        delivery: 0.1,
        expandability: 0.7,
      },
      meta: { color: chartColors.primary },
    },
  ],
  de: [
    {
      data: {
        reliability: 0.1,
        delivery: 0.7,
        expandability: 0.7,
      },
      meta: { color: chartColors.primary },
    },
  ],
  doubleComparison: [
    {
      data: {
        reliability: 0.7,
        delivery: 0.7,
        expandability: 0.1,
      },
      meta: { color: chartColors.primary },
    },
    {
      data: {
        reliability: 0.7,
        delivery: 0.1,
        expandability: 0.7,
      },
      meta: { color: chartColors.secondary },
    },
    {
      data: {
        reliability: 0.1,
        delivery: 0.7,
        expandability: 0.7,
      },
      meta: { color: chartColors.tertiary },
    },
  ],
  rde: [
    {
      data: {
        reliability: 0.5,
        delivery: 0.5,
        expandability: 0.5,
      },
      meta: { color: chartColors.primary },
    },
  ],
};

const captions = {
  // columns
  reliability: "Reliability",
  delivery: "Delivery",
  expandability: "Expandability",
};

export const PurposeArchetypesSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>cat archetypes.txt</LinuxCommandSpan>
    </Heading>
    <Stepper tagName="div" values={stepperValues as unknown as string[]}>
      {(value) =>
        diagramStepMapper[value as DiagramSteps] && (
          <StyledRadarChart>
            <RadarChart
              options={{
                zoomDistance: 1.3,
                captionProps: () => ({
                  className: "aaa",
                  textAnchor: "middle",
                  fontSize: 16,
                  fontFamily: fonts,
                }),
              }}
              captions={captions}
              data={diagramStepMapper[value as DiagramSteps]}
              size={600}
            />
          </StyledRadarChart>
        )
      }
    </Stepper>

    <PurposeArchetypesNotes />
  </Slide>
);

const PurposeArchetypesNotes = () => (
  <Notes>
    There is always a tradeoff between, this is a zero sum game.
    <UnorderedList>
      <ListItem>Reliability</ListItem>
      <ListItem>Delivery</ListItem>
      <ListItem>Expandability</ListItem>
    </UnorderedList>
  </Notes>
);

const StyledRadarChart = styled.div`
  .aaa {
    fill: ${colors.secondary};
  }
`;
