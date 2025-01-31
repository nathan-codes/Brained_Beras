import {
  aboutBrain,
  AboutHeader,
  AboutUsBear,
  AboutusTitle,
  BearLogo,
  BeraLogoMobile,
  Followus,
  FooterBear,
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
import SocialLinks from "../components/SocialLinks";

const HomePage = () => {
  return (
    <div className=" ">
      <header className="pt-[5rem]">
        <img
          src={HeadingImage}
          className="w-[22rem] lg:w-[30rem] mx-auto my-2 "
          alt="heading"
        />

        <img src={BearLogo} alt="bear" className="mx-auto lg:w-[24rem] " />
      </header>

      <main>
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

        <section id="roadmap" className=" lg:mt-[-6rem]    ">
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

        <section id="partner" className=" ">
          <img src={PartnerHeader} alt="" className="w-full" />
          <div className="bg-[#FCCB06] pb-25 md:pb-40 lg:pb-60">
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

        <section
          id="social"
          className=" mt-[-4rem] md:mt-[-8rem] lg:mt-[-16rem] "
        >
          <img src={SocialHeader} className="w-full" alt="" />

          <div className="bg-[#f4ebce] flex flex-col gap-5 items-center justify-center lg:bg-[url(./assets/images/bearTransparent.png)] w-full lg:bg-contain lg:bg-center  lg:bg-no-repeat   ">
            <img
              src={FooterBear}
              className="w-[240px] right-4 relative top-[2.1rem]  lg:hidden"
              alt=""
            />
            <section className="relative z-1 flex flex-col gap-5 items-center justify-center w-full bg-[url(./assets/images/bearTransparent.png)]  bg-contain bg-center  bg-no-repeat lg:h-[38rem] mb-15 lg:mb-0 ">
              <div className="w-[160px] h-[160px]  border-[3.2px] border-[#000] p-3  bg-white rounded-[35px] shadow-[4px_6px_0px_0px]  flex items-center justify-center">
                <img
                  src={BeraLogoMobile}
                  alt="logomobilr"
                  className="w-full "
                />
              </div>

              <img src={Followus} alt="" className="mt-5" />

              <SocialLinks isInFooter={true} />
              <img
                src={FooterBear}
                className=" hidden xl:flex absolute left-[47rem] top-[6rem] right-0 mx-auto lg:w-[380px] "
                alt=""
              />

              <img
                src={Roadmapcloud}
                className=" hidden xl:flex absolute  top-[6rem] left-0 mx-auto  "
                alt=""
              />
            </section>
          </div>
        </section>
        <footer className="relative bg-white text-center py-5 border-y-[4px] mt-[-2rem]  p-10">
          Copyright: © 2025 $Brained Bears. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
