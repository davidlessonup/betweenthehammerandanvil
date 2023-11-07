import { Heading, Slide, Grid, FlexBox } from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';

export const BlacksmithingLandingSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ '-' }</LinuxCommandSpan>
        </Heading>
        <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
            <FlexBox>{ 'Describe the Chapter' }</FlexBox>
        </Grid>
    </Slide>
);
