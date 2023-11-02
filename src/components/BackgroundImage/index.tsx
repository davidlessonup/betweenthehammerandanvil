import styled from "@emotion/styled";
import React from "react";
import { FlexBox } from "spectacle";

interface BackgroundImageProps {
  src: string;
}

export const BackgroundImage: React.FC<
  BackgroundImageProps & React.ComponentProps<typeof FlexBox>
> = ({ src }) => <StyledBackgroundImage src={src} />;

const StyledBackgroundImage = styled(FlexBox)<{ src: string }>`
  background: ${(props) => props.src};
`;
