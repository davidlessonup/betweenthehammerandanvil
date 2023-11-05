import { Heading, Slide, CodePane } from "spectacle";
import { LinuxCommandSpan } from "@Components/LinuxCommandSpan/LinuxCommandSpan";
import { codePaneTheme } from "@Templates/Theme/Theme";

export const LintStrengthBadExampleSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>git commit</LinuxCommandSpan>
    </Heading>
    <CodePane language="ts" theme={codePaneTheme}>
      {`
        type Params = { target: string }

        export function count_occurences_of_i(params: Params) {
            var count = 0;
            for (var i = 0; i < params.target.length; i++) {
              if(params.target[i] == 'i') {
              } else {
                count ++
              }
            }
        
            return count
        }
      `}
    </CodePane>
  </Slide>
);

export const LintStrengthGoodExampleSlide = () => (
  <Slide>
    <Heading>
      <LinuxCommandSpan>git commit --amend</LinuxCommandSpan>
    </Heading>
    <CodePane language="ts" theme={codePaneTheme}>
      {`
          type Params = { target: string; };

          export function countOccurencesOfI(params: Params) {
              let count = 0;
              for (let i = 0; i < params.target.length; i++) {
                if(params.target[i] !== 'i') {
                  count ++;
                }
              }
          
              return count;
          }
        `}
    </CodePane>
  </Slide>
);
