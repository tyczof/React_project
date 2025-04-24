import HeroButton from "./HeroButton";
import HeroLocation from "./HeroLocation";

const HeroSection = () => {
  return (
    <section
      // className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4">
      className="text-white relative min-h-screen flex flex-col items-center justify-center gap-12"
    >
      <div className="absolute inset-0 bg-video-filter">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative text-white w-full h-full object-cover z-[-1]"
        >
          <source src="/las.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje video.
        </video>
      </div>
      <div className="text-4xl xl:text-6xl text-center z-0 mt-38">
        <p>Zapraszamy</p>
        <p>
          do serca{" "}
          <span className="font-cormornat-gar italic text-struzka text-5xl xl:text-7xl">
            Borów Tucholskich,
          </span>
        </p>
        <p>gdzie czas płynie wolniej,</p>
        <p>a szum drzew koi duszę.</p>
      </div>
      <div className="text-center text-base xl:text-lg z-0">
        <p>
          Tu, w zabytkowej leśniczówce „Strużka”, ukrytej w gęstwinie
          kaszubskich lasów,
        </p>
        <p>czeka na Ciebie prawdziwy azyl spokoju.</p>
      </div>

      <HeroButton />
      <HeroLocation />
    </section>
  );
};

export default HeroSection;
