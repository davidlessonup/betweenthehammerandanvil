import { SlideLayout, Notes } from "spectacle";
import { Quote } from "@Components/Quote/Quote";

export const SendoffSlide = () => (
  <SlideLayout.Center>
    <Quote author="Jean-Paul Sartre">
      {
        "As far as men go, it is not what they are that interests me, but what they can become"
      }
    </Quote>
    <SendoffNotes />
  </SlideLayout.Center>
);

const SendoffNotes = () => (
  <Notes>
    {
      "As a send-off I will leave a quote from one my favourite philosophers, Jean-Paul Sartre"
    }
    <p />
    {
      "As far as men go, it is not what they are that interests me, but what they can become"
    }
  </Notes>
);
