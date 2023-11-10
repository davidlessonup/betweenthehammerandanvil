import { Slide, Appear } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading";
import { Definition } from "@Components/Definition/Definition";
import { SubHeading } from "@Components/SubHeading";

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
      {"It's ethos can be summarized as mastering the craft and not the tools"}
    </Appear>
  </Slide>
);
