import { Slide, Stepper, Notes } from "spectacle";
import { CommandHeading } from "@Components/CommandHeading/CommandHeading";
import styled from "@emotion/styled";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfo } from "react-icons/ai";
import { colors } from "@Foundations/colors";
import { NotesTable } from "@Components/NotesTable/NotesTable";

const TableEntryDescription: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <StyledTableColumn>
    <AiOutlineInfo />
    {children}
  </StyledTableColumn>
);

const TableEntryPro: React.FC<React.PropsWithChildren> = ({ children }) => (
  <StyledTableColumn>
    <AiOutlinePlus />
    {children}
  </StyledTableColumn>
);

const TableEntryCon: React.FC<React.PropsWithChildren> = ({ children }) => (
  <StyledTableColumn>
    <AiOutlineMinus />
    {children}
  </StyledTableColumn>
);

interface TableHeadingProps {
  highlight: boolean;
  disabled: boolean;
}

const TableHeading: React.FC<React.PropsWithChildren<TableHeadingProps>> = ({
  highlight,
  disabled,
  children,
}) => (
  <StyledTableHeading highlight={highlight} disabled={disabled}>
    <span>{children}</span>
  </StyledTableHeading>
);

const stepperValues = [
  "localBuild",
  "plugin",
  "githook",
  "pipelineBuild",
  "preference",
] as const;

type TableSteps = (typeof stepperValues)[number];

const tableEntries = [
  "localBuild",
  "plugin",
  "githook",
  "pipelineBuild",
] as const;

type TableEntries = (typeof tableEntries)[number];

interface TableColumn {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  highlight: boolean;
}

const localBuildTableColumn: TableColumn = {
  title: "1 - Local Build",
  description: "Perform linting on the local build",
  pros: ["Breaks the build and makes fixing it a priority"],
  cons: ["Can impact development"],
  highlight: false,
};

const pluginTableColumn: TableColumn = {
  title: "2 - IDE/LSP Plugin",
  description: "Have developers use an IDE/LSP based plugin",
  pros: ["Gives the developer real time insight of issues"],
  cons: ["The developer might not use it"],
  highlight: true,
};

const githookTableColumn: TableColumn = {
  title: "3 - Git Hook",
  description: "Create a hook to run all linting",
  pros: ["Gives the developer a timely insight that there are issues"],
  cons: ["Can be bypassed with a flag"],
  highlight: true,
};

const pipelineBuildTableColumn: TableColumn = {
  title: "4 - Pipeline Build",
  description: "Perform Linting on a build pipeline",
  pros: ["Breaks the build and makes fixing it a priority"],
  cons: ["Might slow down builds with trivial issues"],
  highlight: true,
};

const table: Record<TableEntries, TableColumn> = {
  localBuild: localBuildTableColumn,
  plugin: pluginTableColumn,
  githook: githookTableColumn,
  pipelineBuild: pipelineBuildTableColumn,
};

const stepsMapper: Record<TableSteps, TableEntries[]> = {
  localBuild: ["localBuild"],
  plugin: ["localBuild", "plugin"],
  githook: ["localBuild", "plugin", "githook"],
  pipelineBuild: ["localBuild", "plugin", "githook", "pipelineBuild"],
  preference: ["localBuild", "plugin", "githook", "pipelineBuild"],
};

const TableSection: React.FC<{
  data: TableColumn;
  showHighlight: boolean;
  step: TableSteps;
}> = ({ data, showHighlight, step }) => (
  <StyledTableSection disabled={showHighlight && !data.highlight}>
    <TableHeading
      highlight={showHighlight && data.highlight}
      disabled={showHighlight && !data.highlight}
    >
      {data.title}
    </TableHeading>
    <TableEntryDescription>{data.description}</TableEntryDescription>
    {data.pros.map((pro, index) => (
      <TableEntryPro key={`table-section-pro-${step}-${index}`}>
        {pro}
      </TableEntryPro>
    ))}
    {data.cons.map((con, index) => (
      <TableEntryCon key={`table-section-pro-${step}-${index}`}>
        {con}
      </TableEntryCon>
    ))}
  </StyledTableSection>
);

const getTableElements = (entries: TableEntries[], step: TableSteps) =>
  entries &&
  entries.map((entry) => (
    <TableSection
      data={table[entry]}
      showHighlight={step === "preference"}
      step={step}
      key={`table-section-${step}-${entry}`}
    />
  ));

export const LinthomancyFailSlide = () => (
  <Slide>
    <CommandHeading>{"git push --force"}</CommandHeading>
    <Stepper
      tagName="div"
      alwaysVisible
      values={stepperValues as unknown as TableSteps[]}
    >
      {(value) => (
        <StyledTable>
          {getTableElements(
            stepsMapper[value as TableSteps],
            value as TableSteps,
          )}
        </StyledTable>
      )}
    </Stepper>
    <LinthomancyFailNotes />
  </Slide>
);

const LinthomancyFailNotes = () => (
  <Notes>
    {"The local build"}
    <NotesTable
      slideName="list-fail-local"
      notes={["It can impact productivity"]}
    />
    {"The code editor"}
    <NotesTable
      slideName="list-fail-ide"
      notes={["Developers can turn it off"]}
    />
    {"A git hook"}
    <NotesTable
      slideName="list-fail-githook"
      notes={["It can be bypassed with flags"]}
    />
    {"The build"}
    <NotesTable
      slideName="list-fail-build"
      notes={["It might slowdown builds when there are trivial issues"]}
    />
    {"My personal preference is all of the latter 3 at the same time"}
  </Notes>
);

const StyledTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  padding-left: 100px;
`;

const StyledTableSection = styled.div<{ disabled: boolean }>`
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
  ${(props) => props.disabled && `color: ${colors.disabled};`}

  & svg {
    fill: ${(props) => (props.disabled ? colors.disabled : colors.secondary)};
    width: 20px;
    height: 20px;
  }
`;

const StyledTableHeading = styled.div<TableHeadingProps>`
  color: ${(props) => (props.disabled ? colors.disabled : colors.secondary)};
  font-size: 30px;

  & > span {
    ${(props) =>
      props.highlight && `border-bottom: 2px solid ${colors.primary};`}
  }
`;

const StyledTableColumn = styled.div`
  display: inline-flex;
  align-items: center;
  padding-top: 10px;
  font-size: 16px;
  gap: 10px;
  width: 100%;
`;
