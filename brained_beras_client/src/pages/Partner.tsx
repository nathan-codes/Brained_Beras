import { PartnerHeader, PartnerLogo } from "../assets";
import PartnerCard from "../components/PartnerCard";


const Partner = () => {
  return (
    <section id="partner" className=" ">
      <img src={PartnerHeader} alt="" className="w-full" />
      <div className="bg-[#FCCB06] pb-25 md:pb-40 lg:pb-60">
        <img
          src={PartnerLogo}
          alt=""
          className=" mx-auto w-[250px] pt-5 lg:pt-15 lg:w-[550px] mb-4  "
        />
        <div className="flex gap-5   overflow-auto p-5 py-5 lg:py-10 lg:p-10  mx-auto lg:justify-center    ">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </div>
    </section>
  );
}

export default Partner
