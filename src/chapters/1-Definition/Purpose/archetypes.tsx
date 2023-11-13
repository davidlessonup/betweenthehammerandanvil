import { Slide, Notes, Stepper } from "spectacle";
import styled from "@emotion/styled";
import RadarChart from "react-svg-radar-chart";
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

const stepperValues = ["r", "d", "e", "rd", "de", "re", "rde"] as const;

type DiagramSteps = (typeof stepperValues)[number];

const singleRFocus: RadarChartData = {
  data: {
    reliability: 1,
    delivery: 0.1,
    expandability: 0.1,
  },
  meta: { color: chartColors.primary },
};

const singleDFocus: RadarChartData = {
  data: {
    reliability: 0.1,
    delivery: 1,
    expandability: 0.1,
  },
  meta: { color: chartColors.secondary },
};

const singleEFocus: RadarChartData = {
  data: {
    reliability: 0.1,
    delivery: 0.1,
    expandability: 1,
  },
  meta: { color: chartColors.tertiary },
};

const doubleRDFocus: RadarChartData = {
  data: {
    reliability: 0.7,
    delivery: 0.7,
    expandability: 0.1,
  },
  meta: { color: chartColors.primary },
};

const doubleDEFocus: RadarChartData = {
  data: {
    reliability: 0.1,
    delivery: 0.7,
    expandability: 0.7,
  },
  meta: { color: chartColors.tertiary },
};

const doubleREFocus: RadarChartData = {
  data: {
    reliability: 0.7,
    delivery: 0.1,
    expandability: 0.7,
  },
  meta: { color: chartColors.secondary },
};

const tripleComparison: RadarChartData[] = [
  {
    data: {
      reliability: 0.5,
      delivery: 0.5,
      expandability: 0.5,
    },
    meta: { color: chartColors.primary },
  },
];

type StateMapperEntry = {
  single: RadarChartData[];
  double: RadarChartData[];
  triple: RadarChartData[];
};

const stateMapper: Record<DiagramSteps, StateMapperEntry> = {
  r: {
    single: [singleRFocus],
    double: [],
    triple: [],
  },
  d: {
    single: [singleRFocus, singleDFocus],
    double: [],
    triple: [],
  },
  e: {
    single: [singleRFocus, singleDFocus, singleEFocus],
    double: [],
    triple: [],
  },
  rd: {
    single: [singleRFocus, singleDFocus, singleEFocus],
    double: [doubleRDFocus],
    triple: [],
  },
  de: {
    single: [singleRFocus, singleDFocus, singleEFocus],
    double: [doubleRDFocus, doubleDEFocus],
    triple: [],
  },
  re: {
    single: [singleRFocus, singleDFocus, singleEFocus],
    double: [doubleRDFocus, doubleDEFocus, doubleREFocus],
    triple: [],
  },
  rde: {
    single: [singleRFocus, singleDFocus, singleEFocus],
    double: [doubleRDFocus, doubleDEFocus, doubleREFocus],
    triple: tripleComparison,
  },
};

const captions = {
  reliability: "R",
  delivery: "D",
  expandability: "E",
};

interface RadarChartComponentProps {
  data: RadarChartData[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => (
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
      size={420}
    />
  </StyledRadarChart>
);

export const PurposeArchetypesSlide = () => (
  <Slide>
    <StyledRadarChartNotationWrapper>
      <span>{"R - Reliability"}</span>
      <span>{"D - Delivery"}</span>
      <span>{"E - Expandability"}</span>
    </StyledRadarChartNotationWrapper>
    <Stepper
      alwaysVisible
      tagName="div"
      values={stepperValues as unknown as string[]}
    >
      {(value) => {
        const singleValue = stateMapper[value as DiagramSteps]?.single ?? [];
        const doubleValue = stateMapper[value as DiagramSteps]?.double ?? [];
        const tripleValue = stateMapper[value as DiagramSteps]?.triple ?? [];

        return (
          <StyledChartsWrapper key={`diagram-stepper-${value}`}>
            {singleValue && <RadarChartComponent data={singleValue} />}
            {doubleValue.length > 0 && (
              <RadarChartComponent data={doubleValue} />
            )}
            {tripleValue.length > 0 && (
              <RadarChartComponent data={tripleValue} />
            )}
          </StyledChartsWrapper>
        );
      }}
    </Stepper>
    <PurposeArchetypesNotes />
  </Slide>
);

const PurposeArchetypesNotes = () => (
  <Notes>
    {
      "We can see how focusing solely on one, has devastating outcomes to the other dimensions"
    }
    <p />
    {
      "Now if we were to focus on two at a time, there would be a small decline to each dimensions' maximum but an overall improvement"
    }
    <p />
    {"But ideally we want to focus on all three, at all times"}
    <p />
    {"This brings us to what I believe to be an uncomfortable truth"}
  </Notes>
);

const StyledChartsWrapper = styled.div`
  display: flex;
`;

const StyledRadarChart = styled.div`
  .styled-caption {
    fill: ${colors.secondary};
  }
`;

const StyledRadarChartNotationWrapper = styled.div`
  width: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${colors.primary};
  gap: 10px;
  padding-top: 50px;
  padding-bottom: 75px;
`;
