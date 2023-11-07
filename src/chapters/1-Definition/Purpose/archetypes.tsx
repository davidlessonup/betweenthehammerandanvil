import {
    Heading,
    Slide,
    Notes,
    UnorderedList,
    ListItem,
    Stepper,
} from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';
import styled from '@emotion/styled';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import { fonts } from '@Foundations/typography';
import { colors, chartColors } from '@Foundations/colors';

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
    'empty',
    'r',
    'd',
    'e',
    'singleComparison',
    'rd',
    're',
    'de',
    'doubleComparison',
    'rde',
] as const;

type DiagramSteps = (typeof stepperValues)[number];

const singleEmpty: RadarChartData[] = [
    {
        data: {
            reliability: 0,
            delivery: 0,
            expandability: 0,
        },
        meta: { color: chartColors.primary },
    },
];

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

const singleComparison: RadarChartData[] = [
    singleRFocus,
    singleDFocus,
    singleEFocus,
];

const doubleRDFocus: RadarChartData = {
    data: {
        reliability: 0.7,
        delivery: 0.7,
        expandability: 0.1,
    },
    meta: { color: chartColors.primary },
};

const doubleREFocus: RadarChartData = {
    data: {
        reliability: 0.7,
        delivery: 0.1,
        expandability: 0.7,
    },
    meta: { color: chartColors.secondary },
};

const doubleDEFocus: RadarChartData = {
    data: {
        reliability: 0.1,
        delivery: 0.7,
        expandability: 0.7,
    },
    meta: { color: chartColors.tertiary },
};

const doubleComparison: RadarChartData[] = [
    doubleRDFocus,
    doubleDEFocus,
    doubleREFocus,
];

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
    empty: {
        single: singleEmpty,
        double: [],
        triple: [],
    },
    r: {
        single: [singleRFocus],
        double: [],
        triple: [],
    },
    d: {
        single: [singleDFocus],
        double: [],
        triple: [],
    },
    e: {
        single: [singleEFocus],
        double: [],
        triple: [],
    },
    singleComparison: {
        single: singleComparison,
        double: [],
        triple: [],
    },
    rd: {
        single: singleComparison,
        double: [doubleRDFocus],
        triple: [],
    },
    re: {
        single: singleComparison,
        double: [doubleREFocus],
        triple: [],
    },
    de: {
        single: singleComparison,
        double: [doubleDEFocus],
        triple: [],
    },
    doubleComparison: {
        single: singleComparison,
        double: doubleComparison,
        triple: [],
    },
    rde: {
        single: singleComparison,
        double: doubleComparison,
        triple: tripleComparison,
    },
};

const captions = {
    reliability: 'R',
    delivery: 'D',
    expandability: 'E',
};

interface RadarChartComponentProps {
  data: RadarChartData[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => (
    <StyledRadarChart>
        <RadarChart
            options={
                {
                    zoomDistance: 1.3,
                    captionProps: () => ({
                        className: 'styled-caption',
                        textAnchor: 'middle',
                        fontSize: 16,
                        fontFamily: fonts,
                    }),
                }
            }
            captions={captions}
            data={data}
            size={400}
        />
    </StyledRadarChart>
);

export const PurposeArchetypesSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'cat archetypes.txt' }</LinuxCommandSpan>
        </Heading>
        <Stepper tagName="div" values={stepperValues as unknown as string[]}>
            {
                (value) => {
                    const singleValue = stateMapper[value as DiagramSteps]?.single ?? [];
                    const doubleValue = stateMapper[value as DiagramSteps]?.double ?? [];
                    const tripleValue = stateMapper[value as DiagramSteps]?.triple ?? [];

                    return (
                        <StyledChartsWrapper key={`diagram-stepper-${value}`}>
                            { singleValue && <RadarChartComponent data={singleValue} /> }
                            {
                                doubleValue.length > 0 && (
                                    <RadarChartComponent data={doubleValue} />
                                )
                            }
                            {
                                tripleValue.length > 0 && (
                                    <RadarChartComponent data={tripleValue} />
                                )
                            }
                        </StyledChartsWrapper>
                    );
                }
            }
        </Stepper>
        <StyledRadarChartNotationWrapper>
            <div>
                <div>{ 'R - Reliability' }</div>
                <div>{ 'D - Delivery' }</div>
                <div>{ 'E - Expandability' }</div>
            </div>
        </StyledRadarChartNotationWrapper>
        <PurposeArchetypesNotes />
    </Slide>
);

const PurposeArchetypesNotes = () => (
    <Notes>
        { 'There is always a tradeoff between, this is a zero sum game.' }
        <UnorderedList>
            <ListItem>{ 'Reliability' }</ListItem>
            <ListItem>{ 'Delivery' }</ListItem>
            <ListItem>{ 'Expandability' }</ListItem>
        </UnorderedList>
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
  color: ${colors.secondary};
`;
