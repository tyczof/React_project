// components/Hero/HeroSection.tsx
import HeroButton from "./HeroButton";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url('/your-background-image.jpg')`, // <- podmień na prawidłowy path
      }}
    >
      <div className="p-6 rounded-lg max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Zapraszamy do serca <span className="italic text-pink-200">Borów Tucholskich</span>,
        </h1>
        <p className="text-xl mb-6">
          gdzie czas płynie wolniej, a szum drzew koi duszę.
        </p>
        <p className="text-sm mb-6">
          Tu, w zabytkowej leśniczówce „Strużka”, ukrytej w gęstwinie kaszubskich lasów,
          czeka na Ciebie prawdziwy azyl spokoju.
        </p>
        <HeroButton />
      </div>
    </section>
  );
};

export default HeroSection;
