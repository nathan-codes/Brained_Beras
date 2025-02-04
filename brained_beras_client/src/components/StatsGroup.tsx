import { lockIcon } from "../assets";


const StatsGroup = () => {
  return (
    <div className="bg-white p-4 lg:py-6 pb-4 rounded-[24px] border-2 ">
      <h1
        style={{ fontFamily: "Hamish" }}
        className="text-[24px] lg:text-33px mb-3"
      >
        STATS
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="p-3 border rounded-[16px] shadow-[4px_4px_0px_0px] ">
          <h3 className="text-[16px]  mb-3">Total $Braind Bears </h3>
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-[400]">0000</p>
            <span className="w-[30px] h-[30px] flex items-center rounded-[10px] border justify-center bg-[#F4EBCE]">
              {" "}
              <img src={lockIcon} alt="" />
            </span>
          </div>
        </div>
        <div className="p-3 border rounded-[16px] shadow-[4px_4px_0px_0px] ">
          <h3 className="text-[16px] mb-3">Total $Braind Bears </h3>
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-[400]">0000</p>
            <span className="w-[30px] h-[30px] flex items-center rounded-[10px] border justify-center bg-[#F4EBCE]">
              {" "}
              <img src={lockIcon} alt="" />
            </span>
          </div>
        </div>

        <div className="p-3 border rounded-[16px] shadow-[4px_4px_0px_0px] ">
          <h3 className="text-[16px] mb-3">Total $Braind Bears </h3>
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-[400]">0000</p>
            <span className="w-[30px] h-[30px] flex items-center rounded-[10px] border justify-center bg-[#F4EBCE]">
              {" "}
              <img src={lockIcon} alt="" />
            </span>
          </div>
        </div>

        <div className="p-3 border rounded-[16px] shadow-[4px_4px_0px_0px] ">
          <h3 className="text-[16px] mb-3">Total $Braind Bears </h3>
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-[400]">0000</p>
            <span className="w-[30px] h-[30px] flex items-center rounded-[10px] border justify-center bg-[#F4EBCE]">
              {" "}
              <img src={lockIcon} alt="" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StatsGroup
