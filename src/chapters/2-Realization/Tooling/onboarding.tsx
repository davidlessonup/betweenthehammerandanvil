import { SlideLayout, useSteps, Notes } from "spectacle";
import {
  Editor,
  EditorLeftSection,
  EditorRightSection,
} from "./components/Editor";
import {
  FileDirectory,
  FileDirectoryFolder,
  FileDirectoryFile,
} from "./components/FileDirectory";
import { NotesTable } from "@Components/NotesTable/NotesTable";
import { Markdown } from "../Linthomancy/components/Markdown";

const markdownContents = [
  `# Project
## Onboarding
Head over to **/documentation** to start your journey!`,
  `# Running locally
To run the project in your local machine you will need to run the following commands in order:

\`\`\`docker build --build-arg --build-arg PROJECT=galactus -t galactus-test-server --target dev -f Dockerfile.dev\`\`\`

\`\`\`docker-compose run --rm galactus composer prestart \`\`\`

\`\`\`docker-compose -f docker-compose.yml -f docker-compose.services.yml up \`\`\`
`,
  `# Running locally
To run the project in your local machine you will need to run the following commands in order:

\`\`\`docker build --build-arg MODE=dev --build-arg PROJECT=galactus -t galactus-test-server --target dev -f Dockerfile.dev\`\`\`

\`\`\`docker-compose run --rm galactus composer prestart \`\`\`

\`\`\`docker-compose -f docker-compose.yml -f docker-compose.services.yml up \`\`\`
`,
  `# Running locally
To run the project in your local machine simply run:

\`\`\`sh devStartup.sh\`\`\`
`,
];

const EditorAnimation = () => {
  const editorSteps = useSteps(3);

  return (
    <Editor>
      <EditorLeftSection>
        <FileDirectory>
          <FileDirectoryFolder name="documentation" nestLevel={0} expanded>
            <FileDirectoryFolder
              name="architecture"
              nestLevel={1}
              expanded={false}
            />
            <FileDirectoryFolder
              name="standards"
              nestLevel={1}
              expanded={false}
            />
            <FileDirectoryFile name="index.md" active={false} nestLevel={1} />
            <FileDirectoryFile
              name="local.md"
              nestLevel={1}
              active={editorSteps.step >= 0}
            />
            <FileDirectoryFile name="setup.md" active={false} nestLevel={1} />
          </FileDirectoryFolder>
          <FileDirectoryFile
            name="README.md"
            active={editorSteps.step < 0}
            nestLevel={0}
          />
        </FileDirectory>
      </EditorLeftSection>
      <EditorRightSection>
        <Markdown>{markdownContents[editorSteps.step + 1]}</Markdown>
      </EditorRightSection>
      {editorSteps.placeholder}
    </Editor>
  );
};

export const ToolingOnboardingSlide = () => (
  <SlideLayout.Center>
    <EditorAnimation />
    <ToolingOnboardingNotes />
  </SlideLayout.Center>
);

const ToolingOnboardingNotes = () => (
  <Notes>
    {"Let's consider for a moment the onboarding of a new developer."}
    <p />
    {"They open the documentation, in order to start their work."}
    <p />
    {
      "And when they head over to the documentation about running the project locally, they find this."
    }
    <p />
    <NotesTable
      slideName="onboarding-local-tooling"
      notes={[
        "For a new member, this is a lot to soak in",
        "For something that needs to happen daily, this seems extremely convoluted",
        "What would happen if someone changed this, due to a new feature?",
      ]}
    />
    {"If said change goes unnoticed, this is an effort waste waiting to happen"}
    <p />
    {
      "Instead ideally we would have a single entry point, that when updated it will be reflected immediately to everyone"
    }
  </Notes>
);
