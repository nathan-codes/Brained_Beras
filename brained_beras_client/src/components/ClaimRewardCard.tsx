import { BeraLogoMobile, lockIcon, Oicon } from "../assets";


const ClaimRewardCard = () => {
  return (
    <article className="bg-white rounded-[24px] p-2 lg:px-8 border-2 z-1 relative ">
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
      <button className=" bg-[#FCCB06] border-2 w-full rounded-[11px] h-[56px] mt-2 mb-3 lg:mb-0 hover:cursor-pointer active:cursor-pointer cursor-pointer ">
        <span className="text-center text-black hover:cursor-pointer active:cursor-pointer cursor-pointer">
          Convert
        </span>
      </button>
    </article>
  );
}

export default ClaimRewardCard
