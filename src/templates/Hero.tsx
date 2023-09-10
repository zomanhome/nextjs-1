import { Button } from '@/hero/Button';
import Navbar from '@/navigation/Navbar';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col bg-[url('/assets/images/bg-hero.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <div className="flex h-full flex-col p-6 md:p-12 xl:mr-12">
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
        <div className="leading-2 mt-8 flex flex-col text-xl font-thin md:h-2/3 md:flex-row md:justify-between md:text-xl">
          <div className="text-menu w-60 pb-12 tracking-tight md:w-full md:self-end md:pb-0">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </div>
          <div className="text-menu flex flex-col justify-end text-justify font-thin tracking-tight md:w-72">
            <div>
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </div>
            <Button>JOIN NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
