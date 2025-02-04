import { BeraLogoMobile, stakingBear } from "../assets";
import LinksGroup from "./LinksGroup";

const TotalStakingCard = () => {
  return (
    <article className="bg-[#FCCB06] p-5 rounded-[13px] border-2 shadow-[0px_2px_0px_0px] relative overflow-hidden lg:flex lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-1">
        <h1
          className="text-[24px] lg:text-[30px] text-black font-[400]"
          style={{ fontFamily: "Hamish" }}
        >
          TOTAL STAKING
        </h1>
        <p className="text-[10px] lg:text-[14px] my-1">
          STAKE, UNSTAKE AND CLAIM YOUR $BRAINED
        </p>
        <div className="p-2   bg-white  gap-2 w-[150px] lg:w-[240px] sm:w-[164px] rounded-[10px] border-2   shadow-[4px_4px_0px_0px]">
          <h3 style={{ fontFamily: "Hamish" }} className="lg:text-[18px]">
            Tvl
          </h3>
          <div className="flex gap-2">
            <span className="w-[1.5rem] h-[1.5rem]  border border-[#000] rounded-[5px] p-[2px] boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
              <img src={BeraLogoMobile} alt="logomobilr" className="w-full" />
            </span>
            <p className="lg:text-[18px]"> 0000</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[200px]">
        <LinksGroup />
      </div>
      <img
        src={stakingBear}
        className="absolute bottom-0 right-0 lg:left-0 mx-auto lg:w-[240px] "
        alt=""
      />
    </article>
  );
};

export default TotalStakingCard;
