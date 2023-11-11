import {
  BiGitPullRequest,
  BiFile,
  BiPlus,
  BiMinus,
  BiSolidCheckSquare,
  BiSolidSquare,
  BiSolidCommentDetail,
} from "react-icons/bi";
import styled from "@emotion/styled";
import { pullRequestColors, colors } from "@Foundations/colors";
import { codeFonts } from "@Foundations/typography";
import React from "react";

export const PullRequest: React.FC<React.PropsWithChildren> = ({
  children,
}) => <StyledPullRequest>{children}</StyledPullRequest>;

export interface PullRequestHeaderProps {
  files: number;
  added: number;
  removed: number;
}

export const PullRequestHeader: React.FC<PullRequestHeaderProps> = ({
  files,
  added,
  removed,
}) => (
  <StyledPullRequestHeader>
    <StyledPullRequestHeaderIcon>
      <BiGitPullRequest />
    </StyledPullRequestHeaderIcon>
    <StyledPullRequestSection textColor="files">
      <BiFile />
      <StyledPullRequestLabelWrapper>{files}</StyledPullRequestLabelWrapper>
    </StyledPullRequestSection>
    <StyledPullRequestSection textColor="added">
      <BiPlus />
      <StyledPullRequestLabelWrapper>{added}</StyledPullRequestLabelWrapper>
    </StyledPullRequestSection>
    <StyledPullRequestSection textColor="removed">
      <BiMinus />
      <StyledPullRequestLabelWrapper>{removed}</StyledPullRequestLabelWrapper>
    </StyledPullRequestSection>
  </StyledPullRequestHeader>
);

interface PullRequestFileProps {
  comments: number;
  name: string;
  checked: boolean;
}

export const PullRequestFile: React.FC<
  React.PropsWithChildren<PullRequestFileProps>
> = ({ name, comments, checked, children }) => (
  <StyledPullRequestFileSection>
    <StyledPullRequestFileSectionName>{name}</StyledPullRequestFileSectionName>
    <StyledPullRequestFileSectionComments amount={comments}>
      <StyledPullRequestLabelWrapper>
        {comments > 0 && comments}
      </StyledPullRequestLabelWrapper>
      <BiSolidCommentDetail />
    </StyledPullRequestFileSectionComments>
    <StyledPullRequestFileSectionStatus checked={checked}>
      {checked ? <BiSolidCheckSquare size="24" /> : <BiSolidSquare size="24" />}
    </StyledPullRequestFileSectionStatus>
    {children}
  </StyledPullRequestFileSection>
);

const StyledPullRequestLabelWrapper = styled.span`
  padding: 0px 10px;
`;

const StyledPullRequestFileSection = styled.div`
  display: flex;
  padding: 20px;
`;

const StyledPullRequestFileSectionName = styled.span`
  flex: 1;
`;

const StyledPullRequestFileSectionComments = styled.span<{ amount: number }>`
  display: flex;
  align-items: center;
  padding: 0px 5px;
  color: ${(props) =>
    props.amount > 0 ? pullRequestColors.removed : pullRequestColors.unchecked};
`;

const StyledPullRequestFileSectionStatus = styled.span<{ checked: boolean }>`
  padding: 0px 5px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.checked ? pullRequestColors.checked : pullRequestColors.unchecked};
`;

const StyledPullRequest = styled.div`
  border: 1px solid ${colors.secondary};

  & ${StyledPullRequestFileSection} + ${StyledPullRequestFileSection} {
    border-top: 1px solid ${colors.secondary};
  }

  font-family: ${codeFonts};
`;

const StyledPullRequestHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 50vw;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.secondary};
`;

const StyledPullRequestHeaderIcon = styled.div`
  padding: 20px;
  flex: 1;
  color: ${pullRequestColors.unchecked};
`;

type StyledPullRequestSectionTextColor = "added" | "removed" | "files";

interface StyledPullRequestSectionProps {
  textColor: StyledPullRequestSectionTextColor;
}

const StyledPullRequestSection = styled.div<StyledPullRequestSectionProps>`
  display: flex;
  align-items: center;
  border-left: 1px solid ${colors.secondary};
  padding: 20px;
  color: ${(props) => pullRequestColors[props.textColor]};
`;
