import {
  SlideLayout,
  Notes,
  Heading,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";
import { BiSolidTerminal, BiPackage } from "react-icons/bi";
import { BsSlack, BsBrowserChrome } from "react-icons/bs";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import styled from "@emotion/styled";
import { colors } from "@Foundations/colors";

export const ToolingExamplesSlide = () => (
  <SlideLayout.Center>
    <Heading>{"Examples of tools"}</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <StyledListItem>
            {"A CLI with important daily commands"}
            <BiSolidTerminal />
          </StyledListItem>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <StyledListItem>
            {"A slack notifier for release notes"}
            <BsSlack />
          </StyledListItem>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <StyledListItem>
            {"A script that verifies parity between files"}
            <BiSolidTerminal />
          </StyledListItem>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <StyledListItem>
            {"A browser extension with useful project links"}
            <BsBrowserChrome />
          </StyledListItem>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <StyledListItem>
            {"A git hook to bump up package versions"}
            <BiPackage />
          </StyledListItem>
        </ListItem>
      </Appear>
    </UnorderedList>
    <ToolingExamplesNotes />
  </SlideLayout.Center>
);

const ToolingExamplesNotes = () => (
  <Notes>
    {"Of course there is so much more that could be done"}
    <p />
    {"For example"}
    <NotesTable
      slideName="tooling-examples"
      notes={[
        "A CLI with important daily commands",
        "A slack notifier for release notes",
        "A script that verifies parity between files",
        "A browser extension with useful project links",
        "A git hook to bump up package versions",
      ]}
    />
  </Notes>
);

const StyledListItem = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    color: ${colors.secondary};
  }
`;
