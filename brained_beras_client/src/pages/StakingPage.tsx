import {  StakingFooter } from "../assets";
import ClaimRewardCard from "../components/ClaimRewardCard";
import LinksGroup from "../components/LinksGroup";
import StakeUnstakeCard from "../components/StakeUnstakeCard";
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
          <ClaimRewardCard />
              <StakeUnstakeCard />
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
