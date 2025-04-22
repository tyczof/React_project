import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import HeroLocation from "@/components/Hero/HeroLocation";

export default function Home() {
  return (
    <main className="text-white font-manrope">
      <div className="relative bg-video-filter object-cover">        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute text-white bottom-0 w-screen object-cover z-[-1]">
          <source src="/las.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje video.
        </video>
        <div className="h-screen grid grid-cols-1 grid-rows-8 ">
          <div className="row-start-1 fixed w-full top-0 z-10" ><Navbar /></div>
          <div className="row-start-2 row-span-6"><HeroSection /></div>
          <div className="row-start-8 self-end"><HeroLocation /></div>
        </div>
      </div>
      <div className="text-black"><p>ssssssssssssss</p></div>
      <div className="text-black"><p>ssssssssssssss</p></div>
      <div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div>
      <div className="text-black"><p>ssssssssssssss</p></div>
      <div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div><div className="text-black"><p>ssssssssssssss</p></div>
      <div className="text-black"><p>ssssssssssssss</p></div>
    </main>
  );
}
