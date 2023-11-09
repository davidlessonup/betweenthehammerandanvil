import { LintLandingSlide } from "./landing";
import { LinthomancyFailSlide } from "./fail";
import { LintStrengthCodeExampleSlide } from "./example";
import { LinthomanyDefinitionSlide } from "./definition";
import { LinthomancyReviewFocusSlide } from "./reviewFocus";
import { LintConclusionSlide } from "./conclusion";

export const LinthomancySubChapter = () => (
  <>
    <LintLandingSlide />
    <LintStrengthCodeExampleSlide />
    <LinthomancyReviewFocusSlide />
    <LinthomanyDefinitionSlide />
    <LinthomancyFailSlide />
    <LintConclusionSlide />
  </>
);
