import { Slide, Notes, Appear, UnorderedList, ListItem } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";
import { NotesTable } from "@Components/NotesTable";

export const IntroductionDisclaimerSlide = () => (
  <Slide>
    <CommandHeading>{"cat disclaimer.txt"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>{"I'm not an expert, just an observer"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {"Regarding this talk:"}
          <UnorderedList>
            <Appear>
              <ListItem>
                {"It conveys my observations and experiences"}
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Encompasses development in general"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Code examples will be in TypeScript"}</ListItem>
            </Appear>
            <Appear>
              <ListItem>{"Not too technical"}</ListItem>
            </Appear>
          </UnorderedList>
        </ListItem>
      </Appear>
    </UnorderedList>
    <IntroductionDisclaimerNotes />
  </Slide>
);

const IntroductionDisclaimerNotes = () => (
  <Notes>
    <NotesTable
      slideName="intro-disclaimer"
      notes={[
        "I'm NOT an expert",
        "As for this talk:",
        "I aim to convey my observations and experiences I've come across my career",
        "It does not focus on Frontend or Backend",
        "Any code examples will be in TypeScript",
        "In addition I will avoid being extremely technical",
      ]}
    />
  </Notes>
);
