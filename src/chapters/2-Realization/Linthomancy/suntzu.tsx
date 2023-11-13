import { SlideLayout, Notes } from "spectacle";
import { Quote } from "@Components/Quote/Quote";

export const LinthomancySunTzuSlide = () => (
  <SlideLayout.Center>
    <Quote author="Sun Tzu">
      {"The greatest victory is that which requires no battle."}
    </Quote>
    <LinthomancySunTzuNotes />
  </SlideLayout.Center>
);

const LinthomancySunTzuNotes = () => (
  <Notes>
    {"In the Art of War by Sun Tzu, there is an appropriate quote for this"}
  </Notes>
);
