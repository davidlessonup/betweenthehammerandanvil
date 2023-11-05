import { variants } from "@catppuccin/palette";

const variant = variants.mocha;

export const colors = {
  primary: variant.maroon.hex,
  secondary: variant.peach.hex,
  tertiary: variant.crust.hex,
  quaternary: variant.base.hex,
  quinary: variant.yellow.hex,
  disabled: variant.surface2.hex,
};

export const chartColors = {
  primary: variant.red.hex,
  secondary: variant.blue.hex,
  tertiary: variant.green.hex,
};

export const codeBlockColors = {
  background: variant.base.hex,
  placehodlerBackground: variant.overlay0.hex,
  declaration: variant.maroon.hex,
  neutral: variant.peach.hex,
  normal: variant.yellow.hex,
  type: variant.blue.hex,
  assignment: variant.mauve.hex,
  specialCharacter: variant.sapphire.hex,
  literalValue: variant.lavender.hex,
  error: variant.red.hex,
};
