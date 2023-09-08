import Navbar from '@/templates/Navbar';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col bg-[url('/assets/images/bg-hero.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <div className="flex h-full w-full flex-col p-6 md:p-12 lg:mr-12">
        <div className="flex w-full flex-col-reverse justify-end md:h-1/3 md:flex-row md:justify-between">
          <div className="text-menu text-5xl leading-none tracking-tight md:text-7xl">
            <div className="font-semibold">UNCOVER</div>
            <div className="font-thin">CARPATHIAN’S</div>
            <div className="font-thin">SECRETS</div>
          </div>
          <div className="text-menu md:text-none mb-10 text-end text-4xl leading-none md:text-7xl">
            <div className="font-thin">
              {/* eslint-disable-next-line no-irregular-whitespace */}
              <span className="font-semibold">7</span> DAYS
            </div>
            <div className="text-sm font-thin leading-none tracking-mobile md:text-xl md:tracking-superwide">
              JOURNEY
            </div>
          </div>
        </div>
        <div className="leading-2 mt-8 flex flex-col font-thin md:h-2/3 md:flex-row md:justify-between">
          <div className="text-menu w-60 pb-12 text-sm tracking-tight md:w-full md:self-end md:pb-0 md:text-2xl">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </div>
          <div className="text-menu self-end text-justify text-sm font-thin tracking-tight md:w-72 md:text-xl">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
