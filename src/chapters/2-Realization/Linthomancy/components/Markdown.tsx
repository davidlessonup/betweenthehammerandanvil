import React from "react";
import * as ReactMarkdown from "react-markdown";
import type { Options } from "react-markdown";
import styled from "@emotion/styled";
import { markdownColors } from "@Foundations/colors";

export const Markdown: React.FC<Options> = (props) => (
  <ReactMarkdown.default
    components={{
      code(props) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { node, ...rest } = props;

        return <StyledCode {...rest} />;
      },
    }}
    {...props}
  />
);

const StyledCode = styled.code`
  display: inline-block;
  background: ${markdownColors.code.background};
  color: ${markdownColors.code.text};
  padding: 10px;
`;
