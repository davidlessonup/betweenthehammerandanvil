import { Slide, Appear, Notes, Text, FlexBox } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import { Definition } from "@Components/Definition/Definition";
import { SubHeading } from "@Components/SubHeading/SubHeading";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const SoftwareCraftsmanshipDefinitionSlide = () => (
  <Slide>
    <CommandHeading>{"find . -regex 'craftsmanship'"}</CommandHeading>
    <Appear>
      <SubHeading>{"Software Craftsmanship"}</SubHeading>
    </Appear>
    <Appear>
      <Definition>
        {`... is an approach to software development that
            emphasizes the coding skills of the software developers.`}
      </Definition>
    </Appear>
    <Appear>
      <FlexBox alignSelf="center">
        <Text fontSize="33px">
          {
            "It's ethos can be summarized as mastering the craft and not the tools"
          }
        </Text>
      </FlexBox>
    </Appear>
    <SoftwareCraftsmanshipDefinitionNotes />
  </Slide>
);

const SoftwareCraftsmanshipDefinitionNotes = () => (
  <Notes>
    <NotesTable
      slideName="definition-blacksmith-definition"
      notes={[
        "Now we go into Craftsmanship",
        "More specifically, Software Craftsmanship",
        "It's ethos can be summarized as mastering the craft and not the tools",
      ]}
    />
  </Notes>
);
