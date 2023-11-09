import styled from "@emotion/styled";
import { codeBlockColors } from "@Foundations/colors";

const SpacingElement = () => <>&nbsp;</>;

interface CodeErrorPlaceholderProps {
  showErrors: boolean;
  children: string;
}

const CodeErrorPlaceholder: React.FC<CodeErrorPlaceholderProps> = ({
  showErrors,
  children,
}) => {
  if (!showErrors) {
    return null;
  }

  return <StyledCodeErrorPlaceholder>{children}</StyledCodeErrorPlaceholder>;
};

interface CodeConditionalBlockProps {
  showBlock: boolean;
  highlight: boolean;
}

const CodeConditionalBlock: React.FC<
  React.PropsWithChildren<CodeConditionalBlockProps>
> = ({ highlight, showBlock, children }) => {
  if (!showBlock) {
    return null;
  }

  if (highlight) {
    return <StyledConditionalCodeBlock>{children}</StyledConditionalCodeBlock>;
  }

  return children;
};

export type CodeExampleVersion = "default" | "errors" | "fixed";

interface CodeExampleProps {
  version: CodeExampleVersion;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ version }) => (
  <StyledCodeSection>
    <StyledCodeBlockLine indent={0}>
      <StyledCodeDeclarationBlock>{"type"}</StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeNormalBlock>{"Params"}</StyledCodeNormalBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"= {"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"needle"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{":"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeTypeBlock>{"string"}</StyledCodeTypeBlock>
      <StyledCodeSpecialCharacterBlock>{";"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"haystack"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{":"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <CodeConditionalBlock showBlock={version !== "fixed"} highlight={false}>
        <StyledCodeTypeBlock>{"string[]"}</StyledCodeTypeBlock>
      </CodeConditionalBlock>
      <CodeConditionalBlock showBlock={version === "fixed"} highlight>
        <StyledCodeTypeBlock>{"Array<string>"}</StyledCodeTypeBlock>
      </CodeConditionalBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"}"}</StyledCodeSpecialCharacterBlock>
      <CodeErrorPlaceholder showErrors={version === "errors"}>
        {"Missing semi-colon, prefer Array<T> type"}
      </CodeErrorPlaceholder>
      <CodeConditionalBlock showBlock={version === "fixed"} highlight>
        <StyledCodeSpecialCharacterBlock>{";"}</StyledCodeSpecialCharacterBlock>
      </CodeConditionalBlock>
    </StyledCodeBlockLine>
    <CodeConditionalBlock showBlock={version === "fixed"} highlight>
      <SpacingElement />
    </CodeConditionalBlock>
    <StyledCodeBlockLine indent={0}>
      <StyledCodeDeclarationBlock>{"function"}</StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeDeclarationBlock>
        {"countOccurencesOf"}
      </StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"("}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"params"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{":"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeTypeBlock>{"Params"}</StyledCodeTypeBlock>
      <StyledCodeSpecialCharacterBlock>{")"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"{"}</StyledCodeSpecialCharacterBlock>
      <CodeErrorPlaceholder showErrors={version === "errors"}>
        {"Missing indentation between type and function declarations"}
      </CodeErrorPlaceholder>
    </StyledCodeBlockLine>
    <StyledCodeBlockLine indent={1}>
      <StyledCodeDeclarationBlock>{"var"}</StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"count"}</StyledCodeNeutralBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"="}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeAssignmentBlock>{"0"}</StyledCodeAssignmentBlock>
      <CodeErrorPlaceholder showErrors={version === "errors"}>
        {"Missing semi-colon"}
      </CodeErrorPlaceholder>
      <CodeConditionalBlock showBlock={version === "fixed"} highlight>
        <StyledCodeSpecialCharacterBlock>{";"}</StyledCodeSpecialCharacterBlock>
      </CodeConditionalBlock>
    </StyledCodeBlockLine>
    <StyledCodeBlockLine indent={1}>
      <StyledCodeDeclarationBlock>{"for"}</StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"("}</StyledCodeSpecialCharacterBlock>
      <StyledCodeDeclarationBlock>{"var"}</StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"="}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeAssignmentBlock>{"0"}</StyledCodeAssignmentBlock>
      <StyledCodeSpecialCharacterBlock>{";"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"i"}</StyledCodeNeutralBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"<"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"params"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"."}</StyledCodeSpecialCharacterBlock>
      <StyledCodeNeutralBlock>{"haystack"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"."}</StyledCodeSpecialCharacterBlock>
      <StyledCodeNeutralBlock>{"length"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{";"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"i"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"++"}</StyledCodeSpecialCharacterBlock>
      <StyledCodeSpecialCharacterBlock>{")"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"{"}</StyledCodeSpecialCharacterBlock>
    </StyledCodeBlockLine>
    <StyledCodeBlockLine indent={2}>
      <StyledCodeDeclarationBlock>{"if"}</StyledCodeDeclarationBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"("}</StyledCodeSpecialCharacterBlock>
      <StyledCodeNeutralBlock>{"params"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"."}</StyledCodeSpecialCharacterBlock>
      <StyledCodeNeutralBlock>{"haystack"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"["}</StyledCodeSpecialCharacterBlock>
      <StyledCodeNeutralBlock>{"i"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"]"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <CodeConditionalBlock showBlock={version === "fixed"} highlight>
        <StyledCodeSpecialCharacterBlock>{"!"}</StyledCodeSpecialCharacterBlock>
      </CodeConditionalBlock>
      <StyledCodeSpecialCharacterBlock>{"=="}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeNeutralBlock>{"params"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"."}</StyledCodeSpecialCharacterBlock>
      <StyledCodeNeutralBlock>{"needle"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{")"}</StyledCodeSpecialCharacterBlock>
      <SpacingElement />
      <StyledCodeSpecialCharacterBlock>{"{"}</StyledCodeSpecialCharacterBlock>
      <CodeErrorPlaceholder showErrors={version === "errors"}>
        {"Avoid empty if statements, prefer stricter equality (===)"}
      </CodeErrorPlaceholder>
    </StyledCodeBlockLine>
    <CodeConditionalBlock showBlock={version !== "fixed"} highlight={false}>
      <StyledCodeBlockLine indent={2}>
        <StyledCodeSpecialCharacterBlock>{"}"}</StyledCodeSpecialCharacterBlock>
        <SpacingElement />
        <StyledCodeDeclarationBlock>{"else"}</StyledCodeDeclarationBlock>
        <SpacingElement />
        <StyledCodeSpecialCharacterBlock>{"{"}</StyledCodeSpecialCharacterBlock>
      </StyledCodeBlockLine>
    </CodeConditionalBlock>
    <StyledCodeBlockLine indent={3}>
      <StyledCodeNeutralBlock>{"count"}</StyledCodeNeutralBlock>
      <StyledCodeSpecialCharacterBlock>{"++"}</StyledCodeSpecialCharacterBlock>
      <CodeErrorPlaceholder showErrors={version === "errors"}>
        {"Missing semi-colon"}
      </CodeErrorPlaceholder>
      <CodeConditionalBlock showBlock={version === "fixed"} highlight>
        <StyledCodeSpecialCharacterBlock>{";"}</StyledCodeSpecialCharacterBlock>
      </CodeConditionalBlock>
    </StyledCodeBlockLine>
    <StyledCodeBlockLine indent={2}>
      <StyledCodeSpecialCharacterBlock>{"}"}</StyledCodeSpecialCharacterBlock>
    </StyledCodeBlockLine>
    <StyledCodeBlockLine indent={1}>
      <StyledCodeSpecialCharacterBlock>{"}"}</StyledCodeSpecialCharacterBlock>
    </StyledCodeBlockLine>
    <StyledCodeBlockLine indent={0}>
      <StyledCodeSpecialCharacterBlock>{"}"}</StyledCodeSpecialCharacterBlock>
    </StyledCodeBlockLine>
  </StyledCodeSection>
);

const StyledCodeSection = styled.div`
  background-color: ${codeBlockColors.background};
  color: ${codeBlockColors.declaration};
  padding: 10px 20px;
  font-size: 22px;
`;

interface CodeBlockSectionProps {
  indent: 0 | 1 | 2 | 3 | 4;
}

const StyledCodeBlockLine = styled.div<CodeBlockSectionProps>`
  padding-left: ${(props) => props.indent * 3}ch;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const StyledCodeDeclarationBlock = styled.span`
  color: ${codeBlockColors.declaration};
`;

const StyledCodeNormalBlock = styled.span`
  color: ${codeBlockColors.normal};
`;

const StyledCodeNeutralBlock = styled.span`
  color: ${codeBlockColors.neutral};
`;

const StyledCodeTypeBlock = styled.span`
  color: ${codeBlockColors.type};
`;

const StyledCodeAssignmentBlock = styled.span`
  color: ${codeBlockColors.assignment};
`;

const StyledCodeSpecialCharacterBlock = styled.span`
  color: ${codeBlockColors.specialCharacter};
`;

const StyledCodeErrorPlaceholder = styled.span`
  background-color: ${codeBlockColors.error};
  color: ${codeBlockColors.background};
  padding-left: 1ch;
  padding-right: 1ch;
  margin-left: 1ch;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in;
`;

const StyledConditionalCodeBlock = styled.span`
  background: ${codeBlockColors.placehodlerBackground};
  padding: 0 2px;
`;
