import {
  PhaseBar,
  Roadmapbear,
  Roadmapbear2,
  Roadmapcloud,
  RoadMapHeader,
  RoadMapLogo,
} from "../assets";
import EvenPhaseCard from "../components/EvenPhaseCard";
import OddPhaseCard from "../components/OddPhaseCard";

const Roadmap = () => {
  return (
    <section id="roadmap" className=" mt-[-6px] lg:mt-[-6rem]    ">
      <img
        src={RoadMapHeader}
        alt="About Header"
        className="w-full bg-[#FCCB06] "
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
  );
};

export default Roadmap;
