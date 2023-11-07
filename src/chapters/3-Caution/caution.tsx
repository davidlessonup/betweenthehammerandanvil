import { Heading, Slide, Notes } from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';

export const CautionSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'cat caution.txt' }</LinuxCommandSpan>
        </Heading>
        <div>{ 'Never let tools become crutches.' }</div>
        <div>{ 'Sometimes tools will fail without warning.' }</div>
        <div>
            { 'If you want to be at the bleeding edge, you must be prepared to bleed' }
            { 'responsibly.' }
        </div>
        <IntroductionDisclaimerNotes />
    </Slide>
);

const IntroductionDisclaimerNotes = () => <Notes />;
