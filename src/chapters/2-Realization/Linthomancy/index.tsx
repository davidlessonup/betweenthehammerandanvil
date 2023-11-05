import { LintLandingSlide } from "./landing";
import { LinthomanyDefinitionSlide } from "./definition";
import { LinthomancyFailSlide } from "./fail";
import { LintStrengthCodeExampleSlide } from "./example";
import { LintConclusionSlide } from "./conclusion";

export const LinthomancyChapter = () => (
  <>
    <LintLandingSlide />
    <LinthomanyDefinitionSlide />
    <LintStrengthCodeExampleSlide />
    <LinthomancyFailSlide />
    <LintConclusionSlide />
  </>
);
