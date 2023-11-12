import { Slide, Appear, UnorderedList, ListItem, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const LintConclusionSlide = () => (
  <Slide>
    <CommandHeading>{"git checkout"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>
          {"A voted standard will always trump a lack of standard"}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>{"It is never too late to implement standards"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"It is possible to create custom rules"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Standards can always be revised in the future"}</ListItem>
      </Appear>
    </UnorderedList>
    <LintConclusionNotes />
  </Slide>
);

const LintConclusionNotes = () => (
  <Notes>
    <NotesTable
      slideName="linting-conclusion"
      notes={[
        "A democratically voted standard will always trump a lack of standard",
        "It is never too late to implement standards",
        "You might be able to enforce your custom standards by creating custom rules",
        "Standards can always be revised in the future",
      ]}
    />
  </Notes>
);
