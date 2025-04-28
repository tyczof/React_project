import GeneralDescription from "@/components/GeneralDescription/GeneralDescription";
import LocationSection from "@/components/GeneralDescription/GeneralDescription";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GeneralDescription />
      <div className="h-screen bg-rose-100"></div>
    </>
  );
}
