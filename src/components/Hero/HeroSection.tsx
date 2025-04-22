import HeroButton from "./HeroButton";

const HeroSection = () => {
  return (
    <div
      // className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4">
      className="relative w-full h-96 bg-cover bg-center grid gap-6 xl:gap-8 justify-center text-center px-4 m-auto mt-2 lg:mt-12 xl:mt-24">
      <div className="max-w-5xl m-auto text-4xl xl:text-6xl">
        <p>
          Zapraszamy
        </p>
        <p>
          do serca <span className="font-cormornat-gar italic text-struzka text-5xl xl:text-7xl">Borów Tucholskich,</span>
        </p>
        <p>
          gdzie czas płynie wolniej,
        </p>
        <p>
          a szum drzew koi duszę.
        </p>
      </div>
      <div className="text-base xl:text-lg">
        <p>
          Tu, w zabytkowej leśniczówce „Strużka”, ukrytej w gęstwinie kaszubskich lasów,
        </p>
        <p>
          czeka na Ciebie prawdziwy azyl spokoju.
        </p>
      </div>
      <div><HeroButton /></div>
    </div>
  );
};

export default HeroSection;