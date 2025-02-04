
const StakeUnstakeCard = () => {
  return (
    <article className="bg-white rounded-[24px] p-2 lg:px-8 border-2 z-1 relative">
      <h1
        style={{ fontFamily: "Hamish" }}
        className="text-[24px] text-center mt-2"
      >
        CLAIM REWARDS
      </h1>
      <p className="text-center lg:text-start text-sm lg:text-[14px] max-w-[80%]  mx-auto lg:mx-0 mt-2 ">
        Convert, redeem, and manage your $Brained Bear Plugins allocation
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
      <button className="bg-[#FCCB06] border-2 w-full rounded-[11px] h-[56px] mt-2  mb-3 cursor-pointer ">
        <span className="text-center text-black cursor-pointer  ">Stake</span>
      </button>
    </article>
  );
}

export default StakeUnstakeCard
