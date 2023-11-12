import styled from "@emotion/styled";
import RadarChart from "react-svg-radar-chart";
import { fonts } from "@Foundations/typography";
import { colors, chartColors } from "@Foundations/colors";

export interface RadarChartData {
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

export const defaultReviewChartData: RadarChartData = {
  data: {
    readability: 0.5,
    standards: 0.5,
    flow: 0.5,
    performance: 0.5,
  },
  meta: { color: chartColors.primary },
};

export const improvedReviewChartData: RadarChartData = {
  data: {
    readability: 0.5,
    standards: 0.5,
    flow: 1,
    performance: 1,
  },
  meta: { color: chartColors.secondary },
};

const captions = {
  readability: "R",
  standards: "S",
  flow: "F",
  performance: "P",
};

export interface ReviewFocusRadarChartProps {
  data: RadarChartData[];
}

export const ReviewFocusRadarChart: React.FC<ReviewFocusRadarChartProps> = ({
  data,
}) => (
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
      size={600}
    />
    <div>
      <div>{"R - Readability"}</div>
      <div>{"S - Standards"}</div>
      <div>{"F - Flow"}</div>
      <div>{"P - Performance"}</div>
    </div>
  </StyledRadarChart>
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
