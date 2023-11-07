import { LandingSlide } from "./landing";
import { PersonalIntroductionSlide } from "./personal";
import { ProfessionalIntroductionSlide } from "./professional";
import { IntroductionDisclaimerSlide } from "./disclaimer";

export const IntroductionChapter = () => (
  <>
    <LandingSlide />
    <PersonalIntroductionSlide />
    <ProfessionalIntroductionSlide />
    <IntroductionDisclaimerSlide />
  </>
);
