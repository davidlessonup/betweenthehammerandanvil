import { HeroSlide } from "./hero";
import { PersonalIntroductionSlide } from "./personal";
import { ProfessionalIntroductionSlide } from "./professional";
import { IntroductionDisclaimerSlide } from "./disclaimer";

export const IntroductionChapter = () => (
  <>
    <HeroSlide />
    <PersonalIntroductionSlide />
    <ProfessionalIntroductionSlide />
    <IntroductionDisclaimerSlide />
  </>
);
