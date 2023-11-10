import { LinthomancyReviewFocusSlide } from "./reviewFocus";
import { LintStrengthCodeExampleSlide } from "./example";
import { LinthomanyDefinitionSlide } from "./definition";
import { LinthomancyReviewFocusRevisedSlide } from "./reviewFocusRevised";
import { LinthomancySunTzuSlide } from "./suntzu";
import { LinthomancyFailSlide } from "./fail";
import { LintConclusionSlide } from "./conclusion";

export const LinthomancySubChapter = () => (
  <>
    <LinthomancyReviewFocusSlide />
    <LintStrengthCodeExampleSlide />
    <LinthomanyDefinitionSlide />
    <LinthomancyReviewFocusRevisedSlide />
    <LinthomancySunTzuSlide />
    <LinthomancyFailSlide />
    <LintConclusionSlide />
  </>
);
