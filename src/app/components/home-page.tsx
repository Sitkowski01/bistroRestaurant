import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { MenuSection } from "./menu-section";
import { DrinksSection } from "./drinks-section";
import { PlaceSection } from "./place-section";
import { WorkshopsSection } from "./workshops-section";
import { LocationSection } from "./location-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DrinksSection />
      <PlaceSection />
      <WorkshopsSection />
      <LocationSection />
    </>
  );
}
