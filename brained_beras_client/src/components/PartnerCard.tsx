
import { CoincapLogo } from '../assets';

const PartnerCard = () => {
  return (
    <article className=" bg-white border rounded-[12px] lg:rounded-[16px] shadow-[2px_3px_0px_0px] px-2 lg:px-4 min-w-[193px] min-h-[3.5rem] lg:h-[5rem] flex items-center justify-center ">
      <img src={CoincapLogo} alt="" className="w-[162px] lg:w-[230px] " />
    </article>
  );
}

export default PartnerCard
