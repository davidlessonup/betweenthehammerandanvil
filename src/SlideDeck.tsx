import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  ListItem,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  Notes,
} from "spectacle";
import { ProgressTemplate } from "@Templates/Progress/Progress";
import { LandingSlide } from "@Slides/Landing";
import { IntroductionChapter } from "@Slides/Introduction";
import { TableOfContentsSlide } from "@Slides/TableOfContents";
import { DeveloperExperienceChapter } from "@Slides/DeveloperExperience";
import { PurposeChapter } from "@Slides/Purpose";
import { BlacksmithingChapter } from "@Slides/Blacksmithing";
import { OutroSlide } from "@Slides/Outro";
import { theme, codePaneTheme, slideTransition } from "@Templates/Theme";
import { LinthomancyChapter } from "@Slides/Linthomancy";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

export const SlideDeck = () => (
  <Deck theme={theme} template={ProgressTemplate} transition={slideTransition}>
    <LandingSlide />
    <IntroductionChapter />
    <TableOfContentsSlide />
    <DeveloperExperienceChapter />
    <BlacksmithingChapter />
    <PurposeChapter />
    <LinthomancyChapter />
    <OutroSlide />
    <Slide>
      <FlexBox height="100%">
        <SpectacleLogo size={500} />
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: "scale(0.5) rotate(45deg)",
          opacity: 0,
        },
        enter: {
          transform: "scale(1) rotate(0)",
          opacity: 1,
        },
        leave: {
          transform: "scale(0.2) rotate(315deg)",
          opacity: 0,
        },
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        gridRowGap={1}
      >
        {Array(9)
          .fill("")
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <CodePane
        language="jsx"
        highlightRanges={[1, [6, 8]]}
        theme={codePaneTheme}
      >{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane
        language="java"
        showLineNumbers={false}
        highlightRanges={[[1, 2], 2]}
      >{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide>
  </Deck>
);
