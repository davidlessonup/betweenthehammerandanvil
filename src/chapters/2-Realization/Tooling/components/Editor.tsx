import React from "react";
import styled from "@emotion/styled";
import { fileSystemColors } from "@Foundations/colors";
import { borderRadius } from "@Foundations/borders";

export const Editor: React.FC<React.PropsWithChildren> = ({ children }) => (
  <StyledEditor>{children}</StyledEditor>
);

export const EditorLeftSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => <StyledEditorLeftSection>{children}</StyledEditorLeftSection>;

export const EditorRightSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => <StyledEditorRightSection>{children}</StyledEditorRightSection>;

const StyledEditor = styled.div`
  display: flex;
  border: 1px solid ${fileSystemColors.neutral};
  border-radius: ${borderRadius};
  width: 85vw;
`;

const StyledEditorLeftSection = styled.div`
  border-right: 1px solid ${fileSystemColors.neutral};
  width: 20vw;
`;

const StyledEditorRightSection = styled.div`
  padding: 0px 20px;
  width: 65vw;
`;
