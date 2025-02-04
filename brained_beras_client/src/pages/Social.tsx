import { BeraLogoMobile, Followus, FooterBear, Roadmapcloud, SocialHeader } from "../assets";
import SocialLinks from "../components/SocialLinks";

const Social = () => {
  return (
    <section id="social" className=" mt-[-4rem] md:mt-[-8rem] lg:mt-[-16rem] ">
      <img src={SocialHeader} className="w-full" alt="" />

      <div className="bg-[#f4ebce] flex flex-col gap-5 items-center justify-center lg:bg-[url(./assets/images/bearTransparent.png)] w-full lg:bg-contain lg:bg-center  lg:bg-no-repeat   ">
        <img
          src={FooterBear}
          className="w-[240px] right-4 relative top-[2.1rem]  lg:hidden"
          alt=""
        />
        <section className="relative z-1 flex flex-col gap-5 items-center justify-center w-full bg-[url(./assets/images/bearTransparent.png)]  bg-contain bg-center  bg-no-repeat lg:h-[38rem] mb-15 lg:mb-0 ">
          <div className="w-[160px] h-[160px]  border-[3.2px] border-[#000] p-3  bg-white rounded-[35px] shadow-[4px_6px_0px_0px]  flex items-center justify-center">
            <img src={BeraLogoMobile} alt="logomobilr" className="w-full " />
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
  );
}

export default Social
