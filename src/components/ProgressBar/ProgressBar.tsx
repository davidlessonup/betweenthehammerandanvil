import React from "react";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";
import { GiAnvilImpact } from "react-icons/gi";

export interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const actualCurrent = current - 1;
  const actualTotal = total > 0 ? total - 1 : 0;

  return (
    <ProgressBarPlaceholder>
      <ProgressBarWrapper current={actualCurrent}>
        <ProgressText total={actualTotal}>
          {actualCurrent}
          {"/"}
          {actualTotal}
        </ProgressText>
        <ProgressWrapper>
          {[...new Array(actualTotal)].map((_, idx) => {
            const isCurrent = idx + 1 === actualCurrent;

            return (
              <div
                data-current={isCurrent}
                key={`progress-bar-${current}-${total}-${idx}`}
              >
                {isCurrent && (
                  <div>
                    <GiAnvilImpact size="12" fill={colors.primary} />
                  </div>
                )}
              </div>
            );
          })}
        </ProgressWrapper>
      </ProgressBarWrapper>
    </ProgressBarPlaceholder>
  );
};

const ProgressBarPlaceholder = styled.div`
  min-height: 14px;
  min-width: 50px;
`;

const ProgressBarWrapper = styled.div<{ current: number }>`
  @keyframes fadeInFromNone {
    0% {
      opacity: 0;
    }

    33% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  display: ${(props) => (props.current === 0 ? "none" : "flex")};
  visibility: ${(props) => (props.current === 0 ? "hidden" : "visible")};
  color: ${colors.primary};
  animation: fadeInFromNone 2s ease-out;
`;

const ProgressText = styled.span<{ total: number }>`
  display: flex;
  min-width: ${(props) => props.total.toString().length * 2 + 2}ch;
  justify-content: end;
  margin-right: 5px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid ${colors.secondary};
  padding: 1px;

  & > div {
    background: ${colors.primary};
    height: 12px;
    width: 6px;
    margin: 1px;
    animation: background-color 2s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &[data-current="true"] {
      background: transparent;
      width: 16px;
    }

    &[data-current="true"] ~ div {
      background: transparent;
      background: ${colors.secondary};
    }
  }
`;
