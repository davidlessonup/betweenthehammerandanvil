import {
    Heading,
    Slide,
    Notes,
    UnorderedList,
    ListItem,
    Stepper,
} from 'spectacle';
import styled from '@emotion/styled';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';
import { colors } from '@Foundations/colors';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ImInfinite } from 'react-icons/im';

type StyledDiagramRectangleType = 'neutral' | 'highlighted' | 'inactive';

type StyledDiagramRectangleProps = {
  type: StyledDiagramRectangleType;
};

const stepperValues = [
    'diagram',
    'inactive',
    'development',
    'testing',
    'maintenance',
] as const;

type StepperValues = (typeof stepperValues)[number];

export const PurposeAreaOfEffectSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'cat area.txt' }</LinuxCommandSpan>
        </Heading>
        <Stepper tagName="div" values={stepperValues as unknown as string[]}>
            {
                (value) => {
                    const defaultValue = value === 'diagram' ? 'neutral' : 'inactive';

                    return (
                        <StyledDiagramWrapper>
                            <StyledDiagramIconWrapper>
                                <ImInfinite />
                                <AiOutlineArrowRight />
                            </StyledDiagramIconWrapper>
                            <StyledDiagramRectangle type={defaultValue}>
                                { 'Discovery' }
                            </StyledDiagramRectangle>
                            <StyledDiagramIconWrapper>
                                <AiOutlineArrowRight />
                            </StyledDiagramIconWrapper>
                            <StyledDiagramRectangle type={defaultValue}>
                                { 'Design' }
                            </StyledDiagramRectangle>
                            <StyledDiagramIconWrapper>
                                <AiOutlineArrowRight />
                            </StyledDiagramIconWrapper>
                            <StyledDiagramRectangle
                                type={
                                    shouldHighlight(
                                        value,
                                        ['development', 'testing', 'maintenance'],
                                        defaultValue,
                                    )
                                }
                            >
                                { 'Development' }
                            </StyledDiagramRectangle>
                            <StyledDiagramIconWrapper>
                                <AiOutlineArrowRight />
                            </StyledDiagramIconWrapper>
                            <StyledDiagramRectangle
                                type={
                                    shouldHighlight(
                                        value,
                                        ['testing', 'maintenance'],
                                        defaultValue,
                                    )
                                }
                            >
                                { 'Testing / QA' }
                            </StyledDiagramRectangle>
                            <StyledDiagramIconWrapper>
                                <AiOutlineArrowRight />
                            </StyledDiagramIconWrapper>
                            <StyledDiagramRectangle type={defaultValue}>
                                { 'Release' }
                            </StyledDiagramRectangle>
                            <StyledDiagramIconWrapper>
                                <AiOutlineArrowRight />
                            </StyledDiagramIconWrapper>
                            <StyledDiagramRectangle
                                type={shouldHighlight(value, ['maintenance'], defaultValue)}
                            >
                                { 'Maintenace' }
                            </StyledDiagramRectangle>
                            <StyledDiagramIconWrapper>
                                <AiOutlineArrowRight />
                                <ImInfinite />
                            </StyledDiagramIconWrapper>
                        </StyledDiagramWrapper>
                    );
                }
            }
        </Stepper>
        <PurposeAreaOfEffectNotes />
    </Slide>
);

const shouldHighlight = function shouldHighlight (
    value: unknown,
    allowedValues: StepperValues[],
    defaultType: StyledDiagramRectangleType,
): StyledDiagramRectangleType {
    if (allowedValues.includes(value as StepperValues)) {
        return 'highlighted';
    }

    return defaultType;
};

const PurposeAreaOfEffectNotes = () => (
    <Notes>
        { 'This talk will focus on the following aspects:' }
        <UnorderedList>
            <ListItem>{ 'Development' }</ListItem>
            <ListItem>{ 'Testing & QA' }</ListItem>
            <ListItem>{ 'Maintenance' }</ListItem>
        </UnorderedList>
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

const getOpacity = function getOpacity (props: StyledDiagramRectangleProps) {
    switch (props.type) {
        case 'inactive':
            return '0.2';
        default:
            return '1';
    }
};

const StyledDiagramRectangle = styled.div<StyledDiagramRectangleProps>`
  background: ${(props) =>
        props.type === 'highlighted' ? colors.primary : colors.secondary};
  color: ${colors.quaternary};
  padding: 10px;
  opacity: ${getOpacity};
`;
