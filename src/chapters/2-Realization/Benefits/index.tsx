import { Slide, UnorderedList, ListItem, Appear, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const BenefitsSubChapter = () => (
  <Slide>
    <CommandHeading>{"cat benefits.txt"}</CommandHeading>
    <UnorderedList>
      <Appear>
        <ListItem>{"Easier onboarding"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Automated assistance"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Leading by example"}</ListItem>
      </Appear>
      <Appear>
        <ListItem>{"Incredible guideship to more junior members"}</ListItem>
      </Appear>
    </UnorderedList>
    <BenefitsNotes />
  </Slide>
);

const BenefitsNotes = () => (
  <Notes>
    {"Here are some of the benefits to having such tools in a project"}
    <NotesTable
      slideName="benefits-tooling"
      notes={[
        "Onboarding is a lot easier, both for the new member as well as the onboarders",
        "You have somewhat of automated assitance, in the form of safeguards that are the tools created",
        "You can lead by example because developers tend to look around in the codebase for similar usecase resolution",
        "And in the case of a junior member, this allows for a lot more hands-off teaching",
      ]}
    />
  </Notes>
);
