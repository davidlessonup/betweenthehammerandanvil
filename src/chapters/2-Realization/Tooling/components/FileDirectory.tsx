import React from "react";
import styled from "@emotion/styled";
import { BiFolder, BiFile, BiCollapseVertical } from "react-icons/bi";
import { fileSystemColors } from "@Foundations/colors";
import { borderRadius } from "@Foundations/borders";

export const FileDirectory: React.FC<React.PropsWithChildren> = ({
  children,
}) => <StyledFileDirectory>{children}</StyledFileDirectory>;

export interface FileDirectoryFolderProps {
  expanded: boolean;
  name: string;
  nestLevel: number;
}

export const FileDirectoryFolder: React.FC<
  React.PropsWithChildren<FileDirectoryFolderProps>
> = ({ expanded, name, nestLevel, children }) => (
  <StyledFileDirectoryFolder>
    <StyledFileDirectoryFolderName nestLevel={nestLevel}>
      <BiFolder color={fileSystemColors.neutral} />
      {name}
      {expanded && <BiCollapseVertical />}
    </StyledFileDirectoryFolderName>
    {children}
  </StyledFileDirectoryFolder>
);

export interface FileDirectoryFileProps {
  name: string;
  active: boolean;
  nestLevel: number;
}

export const FileDirectoryFile: React.FC<FileDirectoryFileProps> = ({
  active,
  name,
  nestLevel,
}) => (
  <StyledFileDirectoryFile active={active} nestLevel={nestLevel}>
    <BiFile color={fileSystemColors.neutral} />
    {name}
  </StyledFileDirectoryFile>
);

interface FileDirectoryNestingProps {
  nestLevel: number;
}

const getNestingPaddingValue = ({ nestLevel }: FileDirectoryNestingProps) =>
  `${(nestLevel + 1) * 20}`;

const StyledFileDirectory = styled.div`
  padding: 20px;
`;

const StyledFileDirectoryFolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFileDirectoryFolderName = styled.span<FileDirectoryNestingProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px ${getNestingPaddingValue}px;

  & svg::not(:first-of-type):last-of-type {
    margin-left: auto;
    color: ${fileSystemColors.neutral};
  }
`;

interface StyledFileDirectoryFileProps extends FileDirectoryNestingProps {
  active: boolean;
}

const StyledFileDirectoryFile = styled.div<StyledFileDirectoryFileProps>`
  gap: 10px;
  padding: 10px ${getNestingPaddingValue}px;
  display: flex;
  align-items: center;

  ${(props) => props.active && `background: ${fileSystemColors.active};`}

  border-radius: ${borderRadius};
`;
