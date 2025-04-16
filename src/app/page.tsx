// pages/index.tsx
import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Tło video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/las.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje video.
      </video>

      <Navbar />
      <HeroSection />
    </main>
  );
}
