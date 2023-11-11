import { SlideLayout, Notes } from "spectacle";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import {
  PullRequest,
  PullRequestHeader,
  PullRequestFile,
} from "./components/PullRequestTable";

export const LinthomancyPullRequestExampleSlide = () => (
  <SlideLayout.Center>
    <PullRequest>
      <PullRequestHeader files={6} added={487} removed={125} />
      <PullRequestFile name="components/index.tsx" comments={5} checked />
      <PullRequestFile name="components/Label/index.tsx" comments={3} checked />
      <PullRequestFile
        name="components/Label/index.spec.tsx"
        comments={0}
        checked
      />
      <PullRequestFile
        name="components/Label/index.stories.tsx"
        comments={2}
        checked
      />
      <PullRequestFile
        name="components/Label/index.utils.tsx"
        comments={7}
        checked
      />
      <PullRequestFile
        name="components/Label/README.md"
        comments={0}
        checked={false}
      />
    </PullRequest>
    <LinthomancyPullRequestExampleNotes />
  </SlideLayout.Center>
);

const LinthomancyPullRequestExampleNotes = () => (
  <Notes>
    <NotesTable
      slideName="code-example-linthomancy"
      notes={[
        "We need to multiply the issue by more files, and amount of reviewers",
        "Also add in the amount of time needed to apply those changes",
        "Finally we have to factor in human error from all parties, things like these might slide",
      ]}
    />
    <p />
    {
      "The problem this creates is not necessarily a waste of time, but a waste of focus"
    }
    <p />
    {"And with that lost focus, more prominent issues might go unnoticed"}
  </Notes>
);
