import { SlideLayout, Appear, Notes, Text, FlexBox, Heading } from "spectacle";
import { Definition } from "@Components/Definition/Definition";
import { NotesTable } from "@Components/NotesTable/NotesTable";

export const SoftwareCraftsmanshipDefinitionSlide = () => (
  <SlideLayout.Center>
    <Heading>{"Software Craftsmanship"}</Heading>
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
            "It's essence can be summarized as mastering the craft and not the tools"
          }
        </Text>
      </FlexBox>
    </Appear>
    <SoftwareCraftsmanshipDefinitionNotes />
  </SlideLayout.Center>
);

const SoftwareCraftsmanshipDefinitionNotes = () => (
  <Notes>
    <NotesTable
      slideName="definition-blacksmith-definition"
      notes={[
        "Now we go into Craftsmanship",
        "More specifically, Software Craftsmanship",
        "It's essence can be summarized as mastering the craft and not the tools",
      ]}
    />
  </Notes>
);
