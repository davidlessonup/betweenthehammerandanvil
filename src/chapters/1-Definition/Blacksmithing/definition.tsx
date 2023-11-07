import { Heading, Slide, Grid, FlexBox, Appear } from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';
import { Definition } from '@Components/Definition/Definition';

export const BlacksmithDefinitionSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'find . -regex \'blacksmith\'' }</LinuxCommandSpan>
        </Heading>
        <Grid gridTemplateColumns="100%" gridTemplateRows="100%" height="100%">
            <FlexBox alignItems="center" justifyContent="center">
                <Appear>
                    <Definition>
                        {
                            `A blacksmith is a metalsmith who creates objects primarily from
                        wrought iron or steel, but sometimes from other metals, by forging
                        the metal, using tools to hammer, bend, and cut.`
                        }
                    </Definition>
                </Appear>
            </FlexBox>
        </Grid>
    </Slide>
);
