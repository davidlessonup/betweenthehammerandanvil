import { SpectacleTheme, codePaneThemes, SlideTransition } from "spectacle";
import { DeepPartial } from "@Utils/typescript/deepPartial";
import { colors } from "@Foundations/colors";
import { fonts } from "@Foundations/typography";

export const theme: DeepPartial<SpectacleTheme> = {
  colors,
  fonts: {
    header: fonts,
    text: fonts,
  },
};

export const slideTransition: SlideTransition = {
  from: {
    position: "fixed",
    transform: "translate(100%, 0%)",
  },
  enter: {
    position: "fixed",
    transform: "translate(0, 0%)",
  },
  leave: {
    position: "fixed",
    transform: "translate(-100%, 0%)",
  },
};

export const codePaneTheme = codePaneThemes.materialDark;
