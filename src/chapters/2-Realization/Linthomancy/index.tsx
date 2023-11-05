import { LintLandingSlide } from "./landing";
import { LinthomanyDefinitionSlide } from "./definition";
import { LinthomancyFailSlide } from "./fail";
import { LintStrengthBadExampleSlide } from "./example";
import { LintStrengthGoodExampleSlide } from "./example";
import { LintConclusionSlide } from "./conclusion";

export const LinthomancyChapter = () => (
  <>
    <LintLandingSlide />
    <LinthomanyDefinitionSlide />
    <LintStrengthBadExampleSlide />
    <LintStrengthGoodExampleSlide />
    <LinthomancyFailSlide />
    <LintConclusionSlide />
  </>
);
