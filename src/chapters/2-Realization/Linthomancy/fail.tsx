import {
    Heading,
    UnorderedList,
    ListItem,
    Appear,
    Slide,
    CodeSpan,
} from 'spectacle';
import { LinuxCommandSpan } from '@Components/LinuxCommandSpan/LinuxCommandSpan';
import styled from '@emotion/styled';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { colors } from '@Foundations/colors';

const StyledTable = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;

  & code {
    font-size: 20px;
  }

  & svg {
    fill: ${colors.secondary};
    width: 20px;
    height: 20px;
  }
`;

const StyledTableSection = styled.div`
  width: 30%;
  padding: 10px;
`;
const StyledTableHeading = styled.div`
  color: ${colors.secondary};
  font-size: 40px;
  display: flex;
  justify-content: center;
`;

const StyledTableColumn = styled.div`
  display: inline-flex;
  align-items: center;
  padding-top: 10px;
`;

const TableEntryPro: React.FC<React.PropsWithChildren> = ({ children }) => (
    <StyledTableColumn>
        <AiOutlinePlus />
        { children }
    </StyledTableColumn>
);

const TableEntryCon: React.FC<React.PropsWithChildren> = ({ children }) => (
    <StyledTableColumn>
        <AiOutlineMinus />
        { children }
    </StyledTableColumn>
);

export const LinthomancyFailSlide = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'git push --force' }</LinuxCommandSpan>
        </Heading>
        <UnorderedList>
            <StyledTable>
                <StyledTableSection>
                    <StyledTableHeading>{ 'IDE/LSP plugin' }</StyledTableHeading>
                    <StyledTableColumn>
                        { 'Have developers use an IDE/LSP based plugin' }
                    </StyledTableColumn>
                    <TableEntryPro>
                        { 'Gives the developer real time insight of issues' }
                    </TableEntryPro>
                    <TableEntryCon>{ 'The developer might not use it' }</TableEntryCon>
                </StyledTableSection>
                <StyledTableSection>
                    <StyledTableHeading>{ 'git hook' }</StyledTableHeading>
                    <StyledTableColumn>
                        { 'Create a hook to run all linting' }
                    </StyledTableColumn>
                    <TableEntryPro>
                        { 'Gives the developer a timely insight that there are issues' }
                    </TableEntryPro>
                    <TableEntryCon>
                        { 'Can be bypassed with a flag' }
                        <CodeSpan />
                    </TableEntryCon>
                </StyledTableSection>
                <StyledTableSection>
                    <StyledTableHeading>{ 'pipeline' }</StyledTableHeading>
                    <StyledTableColumn>
                        { 'Perform Linting on a build pipeline' }
                    </StyledTableColumn>
                    <TableEntryPro>
                        { 'Breaks the build and makes fixing it a priority' }
                    </TableEntryPro>
                    <TableEntryCon>
                        { 'Might slow down builds with trivial issues' }
                    </TableEntryCon>
                </StyledTableSection>
            </StyledTable>
        </UnorderedList>
    </Slide>
);

export const LinthomancyFailSlide2 = () => (
    <Slide>
        <Heading>
            <LinuxCommandSpan>{ 'git push --force' }</LinuxCommandSpan>
        </Heading>
        <UnorderedList>
            <Appear>
                <ListItem>
                    { 'Have developers use an IDE plugin' }{ ' ' }
                    <Appear>{ 'Pro: Gives the developer real time insight of issues' }</Appear>{ ' ' }
                    <Appear>{ 'Con: The developer might not use it' }</Appear>
                </ListItem>
            </Appear>
            <Appear>
                <ListItem>
                    { 'Create a pre-commit hook to run all linting' }{ ' ' }
                    <Appear>
                        { 'Pro: Gives the developer a timely insight that there are issues' }
                    </Appear>{ ' ' }
                    <Appear>
                        { 'Con: Can be bypassed with' }{ ' ' }
                        <CodeSpan>{ 'git commit --no-verify' }</CodeSpan>
                    </Appear>
                </ListItem>
            </Appear>
            <Appear>
                <ListItem>
                    { 'Perform Linting on a build pipeline' }{ ' ' }
                    <Appear>{ 'Pro: Breaks the build and makes fixing it a priority' }</Appear>{ ' ' }
                    <Appear>{ 'Con: Might slow down builds with non-issues' }</Appear>
                </ListItem>
            </Appear>
        </UnorderedList>
    </Slide>
);
