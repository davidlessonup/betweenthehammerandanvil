import { SlideLayout, useSteps } from "spectacle";
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
import { Markdown } from "../Linthomancy/components/Markdown";

const EditorAnimation = () => {
  const editorSteps = useSteps(1);

  return (
    <Editor>
      <EditorLeftSection>
        <FileDirectory>
          <FileDirectoryFolder name="documentation" nestLevel={0}>
            <FileDirectoryFile
              name="architecture.md"
              active={false}
              nestLevel={1}
            />
            <FileDirectoryFile name="setup.md" active={false} nestLevel={1} />
            <FileDirectoryFile
              name="standards.md"
              active={false}
              nestLevel={1}
            />
            <FileDirectoryFile
              name="local.md"
              nestLevel={1}
              active={editorSteps.step === 0}
            />
            <FileDirectoryFile name="index.md" active={false} nestLevel={1} />
          </FileDirectoryFolder>
          <FileDirectoryFile
            name="README.md"
            active={editorSteps.step < 0}
            nestLevel={0}
          />
        </FileDirectory>
      </EditorLeftSection>
      <EditorRightSection>
        <Markdown>
          {editorSteps.step < 0
            ? `# Project
## Onboarding
Head over to **/documentation** to start your journey!`
            : `# Running locally
To run the project in your local computer you will need to run the following commands in order:

\`\`\`docker build --build-arg MODE=dev --build-arg PROJECT=galactus -t galactus-test-server --target dev -f Dockerfile.dev\`\`\`

\`\`\`docker-compose run --rm galactus composer prestart \`\`\`

\`\`\`docker-compose -f docker-compose.yml -f docker-compose.services.yml up \`\`\`
`}
        </Markdown>
      </EditorRightSection>
      {editorSteps.placeholder}
    </Editor>
  );
};

export const ToolingOnboardingSlide = () => (
  <SlideLayout.Center>
    <EditorAnimation />
  </SlideLayout.Center>
);
