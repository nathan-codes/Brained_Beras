import LinksGroup from "../components/LinksGroup";
import StatsGroup from "../components/StatsGroup";
import TotalStakingCard from "../components/TotalStakingCard";

const StakingPage = () => {
  return (
    <div className=" mx-3 lg:max-w-[1200px] lg:mx-auto">
      <main className="mt-2 lg:mt-7">
        <TotalStakingCard />
        <section className="lg:hidden my-5">
          <LinksGroup />
        </section>

        <section className="my-6">
            <StatsGroup />
        </section>
      </main>
      {/* <footer className=" bg-white text-center py-2 border-y-[4px]  p-10">
        Copyright: © 2025 $Brained Bears. All Rights Reserved.
      </footer> */}
    </div>
  );
};

export default StakingPage;
