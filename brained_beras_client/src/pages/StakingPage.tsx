import { BeraLogoMobile, lockIcon, Oicon, StakingFooter } from "../assets";
import LinksGroup from "../components/LinksGroup";
import StatsGroup from "../components/StatsGroup";
import TotalStakingCard from "../components/TotalStakingCard";

const StakingPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className=" flex-grow mx-3 lg:min-w-[80%] lg:mx-auto ">
        <main className="mt-2 lg:mt-10">
          <TotalStakingCard />
          <section className="lg:hidden my-5">
            <LinksGroup />
          </section>

          <section className="my-6">
            <StatsGroup />
          </section>

          <section className="my-6">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 ">
              <article className="bg-white rounded-[24px] p-2 lg:px-8 border-2 ">
                <h1
                  style={{ fontFamily: "Hamish" }}
                  className="text-[24px] text-center mt-2"
                >
                  $BRAINED STAKING
                </h1>
                <div className="p-2 bg-[#F4EBCE] my-2 rounded-[12px] border h-[56px]">
                  <button className="bg-white w-1/2 h-full rounded-[6px]">
                    {" "}
                    <span>Stake</span>
                  </button>
                  <button className="w-1/2 h-full rounded-[6px] ">
                    {" "}
                    <span>Unstake</span>
                  </button>
                </div>

                <div className="my-2 flex justify-between border shadow-[0px_2px_0px_0px] rounded-[16px] p-3">
                  <p className="mt-2">0000000</p>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="w-[80px] flex border justify-between items-center p-1 rounded-[10px]">
                      <span>BND </span>{" "}
                      <span className="w-[30px] h-[30px] p-1 flex items-center rounded-[10px] border justify-center bg-[#F4EBCE]">
                        {" "}
                        <img src={BeraLogoMobile} alt="" />
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <img src={lockIcon} alt="" />
                      <img src={Oicon} alt="" />
                      <button className="bg-[#F4EBCE] rounded-[6px] text-xs py-1 px-2 border ">
                        MAX
                      </button>
                    </div>
                  </div>
                </div>
                <button className="bg-[#FCCB06] border-2 w-full rounded-[11px] h-[56px] mt-2  mb-3 lg:mb-0">
                  <span className="text-center text-black  ">Convert</span>
                </button>
              </article>
              <article className="bg-white rounded-[24px] p-2 lg:px-8 border-2 ">
                <h1
                  style={{ fontFamily: "Hamish" }}
                  className="text-[24px] text-center mt-2"
                >
                  CLAIM REWARDS
                </h1>
                <p className="text-center lg:text-start text-sm lg:text-[14px] max-w-[80%]  mx-auto lg:mx-0 mt-2 ">
                  Convert, redeem, and manage your $Brained Bear Plugins
                  allocation
                </p>

                <div className="my-2 flex flex-col gap-3 justify-between border shadow-[0px_2px_0px_0px] rounded-[16px] p-3">
                  <div className="flex justify-between">
                    <span>Your allocation</span>
                    <span> ----</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total allocation</span>
                    <span> 1,00,000</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Deallocation Fee</span>
                    <span> 0%</span>
                  </div>
                </div>
                <button className="bg-[#FCCB06] border-2 w-full rounded-[11px] h-[56px] mt-2  mb-3">
                  <span className="text-center text-black  ">Stake</span>
                </button>
              </article>
            </div>
          </section>
        </main>
      </div>
      <div className="mt-[-2rem] lg:mt-[-5rem] w-full relative ">
        <img src={StakingFooter} alt="" className="w-full" />
      </div>
      <footer className="w-full bg-white text-center py-2 border-y-[4px]  p-10">
        Copyright: © 2025 $Brained Bears. All Rights Reserved.
      </footer>
    </div>
  );
};

export default StakingPage;
