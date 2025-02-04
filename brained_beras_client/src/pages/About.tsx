
import { aboutBrain, AboutHeader, AboutUsBear, AboutusTitle } from '../assets';

const About = () => {
  return (
    <section id="about" className=" ">
      <div>
        <img src={AboutHeader} alt="About Header" className="w-full" />
      </div>
      <div className="bg-[#FCCB06] flex flex-col lg:flex-row-reverse items-center relative bottom-1  gap-10 lg:gap-20 justify-center  ">
        <article className="lg:z-1 mt-25 lg:mt-0 relative lg:text-[20px] w-[22rem] lg:w-[30rem]  flex flex-col gap-8 px-4 lg:px-10    items-center pt-8 h-[32rem] lg:h-[39rem] bg-white border-2 lg:border-3  rounded-[24px] shadow-[4px_2px_0px_0px] lg:shadow-[10px_4px_0px_0px]   ">
          <div className="relative bottom-[9.5rem]   ">
            <img src={aboutBrain} alt="" className="  mx-auto   " />
            <img
              src={AboutusTitle}
              alt=""
              className="relative bottom-9  w-[280px]"
            />
          </div>
          <p className="relative bottom-50">
            Brained Beras is not a meme. <br />
            It’s a revolutionary community and learn-to-earn project.
          </p>
          <p className="relative bottom-50">
            We combine the typical Bera vibe with some serious knowledge to help
            our fellow Beras collect that sweet honey. <br /> It doesn’t matter
            if you’re a beginner or a pro, if you’re a cryptos or forex trader,
            or even if you’re completely degen or not—at Brained Beras, we are
            all one big family.
          </p>

          <p className="relative bottom-50">
            So join the revolution, have fun, make new friends, and earn your
            way to the top!
          </p>
        </article>
        <img
          src={AboutUsBear}
          className="w-[17rem] lg:mb-40 lg:w-[25rem]"
          alt="About Us Bear"
        />
      </div>
    </section>
  );
}

export default About
