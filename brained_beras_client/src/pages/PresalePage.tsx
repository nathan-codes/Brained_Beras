import {    HeadingImage, PresaleBear, PresaleBottom, PresaleTop, tooltipIcon } from "../assets";
import Countdown from "../components/Countdown";

const PresalePage = () => {

  const presaleEndDate = new Date("2025-02-13T00:00:00");
  return (
    <div className="">
      <header className="pt-[2rem]" id="home">
        <img
          src={HeadingImage}
          className="w-[15rem] lg:w-[14rem] 2xl:w-[16rem] 3xl:w-[20rem] mx-auto mt-[-1.3rem] "
          alt="heading"
        />
      </header>
      <main>
        <section className="flex flex-col lg:flex-row-reverse gap-3 items-center justify-center  lg:max-w-[1200px] mx-auto titan-one-regular  mt-25 lg:mt-10 3xl:mt-26">
          <div className="lg:w-1/2 ">
            <article className=" lg:text-[20px] w-[22rem] lg:w-[25rem]   p-3     bg-white border-2 lg:border-4  rounded-[24px] shadow-[4px_2px_0px_0px] lg:shadow-[10px_4px_0px_0px]   ">
              <img
                src={PresaleTop}
                alt=""
                className="  w-[280px] mt-[-6rem] mx-auto mb-2"
              />

              <div className="bg-[#F4EBCE] shadow-[2px_4px_0px_0px] px-2 py-3  border-3 rounded-[16px]">
                <h2 className=" text-center text-[#FEDB63] font-outline-2   ">
                  Until next price
                </h2>
                <Countdown targetDate={presaleEndDate} />
              </div>

              <div className="w-full bg-[#FFFFFF] rounded-full h-[32px]  mt-3 border-2 ">
                <div
                  className="bg-[#F4EBCE] h-full rounded-full border-2 flex items-center justify-end px-2"
                  style={{ width: "45%" }}
                >
                  <span className="text-xs lg:text-sm">PERCENTAGE 45%</span>
                </div>
              </div>

              <div className="flex mt-2 justify-between text-sm">
                <span>USDT RAISED:</span>
                <span>$618,000.00</span>
              </div>

              <div className="flex flex-col  text-sm items-center mt-2">
                <div className="flex gap-2  items-center">
                  {" "}
                  <span> Your Purchased $BRAINED = 0 </span>
                  <span>
                    {" "}
                    <img src={tooltipIcon} alt="" />
                  </span>
                </div>
                <div className="flex gap-2   items-center">
                  {" "}
                  <span> Your Stakeable $BRAINED = 0 </span>
                  <span>
                    {" "}
                    <img src={tooltipIcon} alt="" />
                  </span>
                </div>
                <div>1 $BRAINED = $0.009876544</div>
              </div>

              <button className="bg-[#FCCB06] border-2 w-full rounded-[8px] py-2 mt-2 shadow-[2px_4px_0px_0px] mb-3 lg:mb-0 cursor-pointer">
                <span className="text-center text-white font-outline-2 ">
                  Connect Wallet
                </span>
                
              </button>
            </article>
          </div>
          <div className="lg:w-1/2   ">
            <img
              src={PresaleBear}
              alt=""
              className="relative lg:absolute lg:bottom-[4rem] lg:w-[30rem] w-[20rem] mt-[-4rem] md:w-[25rem] md:mb-[-6rem] mb-[-4rem] lg:mt-0 lg:mb-0  "
            />
          </div>
        </section>
      </main>

      <div className="lg:fixed  mb-4 lg:mb-0 lg:bottom-[-30px]  w-full relative ">
        <img src={PresaleBottom} alt="" className="w-full" />
      </div>
      <footer className="lg:fixed relative lg:bottom-0 w-full bg-white text-center py-5 lg:py-2 border-y-[4px] mt-[-1rem]  p-10">
        Copyright: © 2025 $Brained Bears. All Rights Reserved.
      </footer>
    </div>
  );
};

export default PresalePage;
