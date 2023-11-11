import { LinthomancyReviewFocusSlide } from "./reviewFocus";
import {
  LintStrengthCodeExampleSlide,
  LintStrengthCodeFixedExampleSlide,
} from "./example";
import { LinthomancyPullRequestExampleSlide } from "./pullRequestExample";
import { LinthomancyLintDefinitionSlide } from "./lintDefinition";
import { LinthomanyDefinitionSlide } from "./definition";
import { LinthomancyReviewFocusRevisedSlide } from "./reviewFocusRevised";
import { LinthomancySunTzuSlide } from "./suntzu";
import { LinthomancyFailSlide } from "./fail";
import { LintConclusionSlide } from "./conclusion";

export const LinthomancySubChapter = () => (
  <>
    <LinthomancyReviewFocusSlide />
    <LintStrengthCodeExampleSlide />
    <LinthomancyPullRequestExampleSlide />
    <LinthomancyLintDefinitionSlide />
    <LintStrengthCodeFixedExampleSlide />
    <LinthomancyReviewFocusRevisedSlide />
    <LinthomanyDefinitionSlide />
    <LinthomancySunTzuSlide />
    <LinthomancyFailSlide />
    <LintConclusionSlide />
  </>
);
