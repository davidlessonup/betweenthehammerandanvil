import { Slide, Notes, Appear, UnorderedList, ListItem } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { AnimatedDeprecation } from "@Components/Deprecated/AnimatedDeprecation";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const IntroductionDisclaimerSlide = () => (
  <Slide>
    <CommandHeading>{"cat disclaimer.txt"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>{"I'm not an expert, but an observer"}</ListItem>
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
            <Appear>
              <ListItem>
                <AnimatedDeprecation>
                  {"There won't be any software jokes"}
                </AnimatedDeprecation>
              </ListItem>
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
    {"I'm NOT an expert"}
    <p />
    {"As for this talk:"}
    <NotesTable
      slideName="intro-disclaimer"
      notes={[
        "I aim to convey my observations and experiences I've come across my career",
        "It does not focus on either Frontend or Backend",
        "Any code examples will be in TypeScript",
        "In addition I will avoid being extremely technical",
        "I won't make any software jokes",
      ]}
    />
    {"This talk has been rewritten 10 times, ...like most JS frameworks"}
    <p />
    {"Oops."}
  </Notes>
);
