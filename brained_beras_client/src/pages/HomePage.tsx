import {
  aboutBrain,
  AboutHeader,
  AboutUsBear,
  AboutusTitle,
  BearLogo,
  HeadingImage,
  PartnerHeader,
  PartnerLogo,
  PhaseBar,
  Roadmapbear,
  Roadmapbear2,
  Roadmapcloud,
  RoadMapHeader,
  RoadMapLogo,
  SocialHeader,
} from "../assets";
import EvenPhaseCard from "../components/EvenPhaseCard";
import OddPhaseCard from "../components/OddPhaseCard";
import PartnerCard from "../components/PartnerCard";

const HomePage = () => {
  return (
    <div className="mt-10 ">
      <header className="">
        <img
          src={HeadingImage}
          className="w-[22rem] lg:w-[28rem] mx-auto my-2 "
          alt="heading"
        />

        <img src={BearLogo} alt="bear" className="mx-auto lg:w-[24rem] " />
      </header>

      <main>
        <section id="about" className="relative  lg:bottom-20">
          <div>
            <img src={AboutHeader} alt="About Header" className="w-full" />
          </div>
          <div className="bg-[#FCCB06] flex flex-col lg:flex-row-reverse items-center relative bottom-1  gap-10 lg:gap-20 justify-center  ">
            <article className="mt-25 lg:mt-0 relative lg:text-[20px] w-[22rem] lg:w-[30rem]  flex flex-col gap-8 px-4 lg:px-10    items-center pt-8 h-[32rem] lg:h-[39rem] bg-white border-2 lg:border-3  rounded-[24px] shadow-[4px_2px_0px_0px] lg:shadow-[10px_4px_0px_0px]   ">
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
                We combine the typical Bera vibe with some serious knowledge to
                help our fellow Beras collect that sweet honey. <br /> It
                doesn’t matter if you’re a beginner or a pro, if you’re a
                cryptos or forex trader, or even if you’re completely degen or
                not—at Brained Beras, we are all one big family.
              </p>

              <p className="relative bottom-50">
                So join the revolution, have fun, make new friends, and earn
                your way to the top!
              </p>
            </article>
            <img
              src={AboutUsBear}
              className="w-[17rem] lg:mb-40 lg:w-[25rem]"
              alt="About Us Bear"
            />
          </div>
        </section>

        <section id="roadmap" className="relative  bottom-2 lg:bottom-42   ">
          <img
            src={RoadMapHeader}
            alt="About Header"
            className="w-full bg-[#FCCB06]  "
          />
          <div className="bg-[#F4EBCE] z-[1] relative">
            <img
              src={RoadMapLogo}
              alt=""
              className=" mx-auto w-[250px] pt-10 lg:pt-0 lg:w-[600px] "
            />
          </div>
          <div className=" bg-[url(./assets/images/roadmapbg.jpg)] relative bottom-2    bg-no-repeat bg-cover  bg-center h-[39rem]  lg:h-[90rem]">
            <img
              src={Roadmapcloud}
              className="top-[80rem] hidden lg:flex absolute "
              alt=""
            />
            {/* Desktop screens */}
            <div className="p-10 max-w-[1150px] mx-auto  pt-30 hidden lg:flex ">
              <div className="flex flex-col space-y-[27rem] ">
                <EvenPhaseCard
                  phaseCount={1}
                  phaseInfo={[
                    "NFT launch",
                    "Further build out Partnerships and the community",
                    "Further develop projects under Brained Banner (Brained PoL and Brained Funds)",
                  ]}
                />

                <EvenPhaseCard
                  phaseCount={3}
                  phaseInfo={[
                    "Brained Bond via Yeet",
                    "Token launch and System Rollout",
                    "Launch of Brained PoL and Brained Funds",
                  ]}
                />
              </div>

              <img src={PhaseBar} alt="" className="mx-auto object-fit  " />
              <div className="flex flex-col space-y-[30rem] relative ">
                <OddPhaseCard
                  phaseCount={2}
                  phaseInfo={[
                    "Develop Projects involved with Brained Bera",
                    "Private Presale for Brained Beras",
                    "Bring out more infos about Brained PoL and Brained Funds",
                  ]}
                />

                <img
                  src={Roadmapbear}
                  className="top-[40rem] absolute hidden lg:flex "
                  alt=""
                />
                <OddPhaseCard
                  phaseCount={4}
                  phaseInfo={[
                    "Incubate Projects via Brained Funds",
                    "Further develop and adjust Brained Beras as Headbrand",
                  ]}
                />
              </div>
            </div>

            {/* Mobile Screens */}
            <div className="overflow-auto  flex items-center gap-2 lg:hidden  h-[15rem] my-5 px-3">
              <EvenPhaseCard
                phaseCount={1}
                phaseInfo={[
                  "NFT launch",
                  "Further build out Partnerships and the community",
                  "Further develop projects under Brained Banner (Brained PoL and Brained Funds)",
                ]}
              />
              <OddPhaseCard
                phaseCount={2}
                phaseInfo={[
                  "Develop Projects involved with Brained Bera",
                  "Private Presale for Brained Beras",
                  "Bring out more infos about Brained PoL and Brained Funds",
                ]}
              />
              <EvenPhaseCard
                phaseCount={3}
                phaseInfo={[
                  "Brained Bond via Yeet",
                  "Token launch and System Rollout",
                  "Launch of Brained PoL and Brained Funds",
                ]}
              />
              <OddPhaseCard
                phaseCount={4}
                phaseInfo={[
                  "Incubate Projects via Brained Funds",
                  "Further develop and adjust Brained Beras as Headbrand",
                ]}
              />
            </div>

            <img
              src={Roadmapbear2}
              className="top-[12rem]  left-0 right-0 mx-auto absolute  lg:hidden "
              alt=""
            />
          </div>

          {/* Add roadmap content here */}
        </section>

        <section id="partner" className="relative bottom-[7rem] lg:bottom-40 ">
          <img src={PartnerHeader} alt="" className="w-full" />
          <div className="bg-[#FCCB06] pb-20 lg:pb-60">
            <img
              src={PartnerLogo}
              alt=""
              className=" mx-auto w-[250px] pt-5 lg:pt-15 lg:w-[550px] mb-4  "
            />
            <div className="flex gap-5   overflow-auto p-5 py-5 lg:py-10 lg:p-10  mx-auto lg:justify-center    ">
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
            </div>
          </div>
        </section>

        <section id="social" className="relative bottom-[11rem] lg:bottom-90">
          <img src={SocialHeader} className="w-full" alt="" />

          <div className="bg-red-400 absolute bottom-0 h-[10rem] ">sdsd</div>
        </section>
      </main>

      <footer>{/* Add footer content here */}</footer>
    </div>
  );
};

export default HomePage;
