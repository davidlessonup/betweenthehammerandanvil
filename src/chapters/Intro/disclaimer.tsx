import { Heading, Slide, Notes } from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';

export const IntroductionDisclaimerSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'cat disclaimer.txt' }</LinuxCommandSpan>
        </Heading>
        <div>
            { "I'm not an expert, I'm just an observer. This talk aims to convey my" }
            { 'observations and experiences throughout my career.' }
        </div>
        <div>{ 'All the code shown in this presentation will be TypeScript.' }</div>
        <IntroductionDisclaimerNotes />
    </Slide>
);

const IntroductionDisclaimerNotes = () => <Notes />;
