

import { styles } from "../../constants/styles";

import { config } from "../../constants/config";
import { Home } from "../../assets";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="relative h-full w-full">
        {/* Background Image */}
        <img
          src={Home}
          alt="Mobile version"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />

        {/* Text Content */}
        <div
          className={`absolute inset-0 top-[120px] z-10 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {config.hero.p[0]} <br className="hidden sm:block" />
              {config.hero.p[1]}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
