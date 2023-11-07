import { Heading, Slide, Stepper } from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';
import { CodeExample, CodeExampleVersion } from './components/CodeExample';

const determineWhichVersionToShow = function determineWhichVersionToShow (
    version: unknown,
): CodeExampleVersion {
    switch (version) {
        case 'fixed':
            return 'fixed';
        case 'errors':
            return 'errors';
        default:
            return 'default';
    }
};

export const LintStrengthCodeExampleSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'git commit' }</LinuxCommandSpan>
        </Heading>
        <Stepper tagName="div" alwaysVisible values={['errors', 'fixed']}>
            { (value) => <CodeExample version={determineWhichVersionToShow(value)} /> }
        </Stepper>
    </Slide>
);
