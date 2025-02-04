
import { LinkIcon } from '../assets';

const LinksGroup = () => {
  return (
    <div className=" flex flex-col gap-3 w-full ">
      <div className="cursor-pointer  flex justify-between items-center bg-white border rounded-[11px] px-3 h-[48px]">
        <p className=''>Add to wallet</p>
        <span>
          <img src={LinkIcon} alt="" />
        </span>
      </div>
      <div className=" cursor-pointer flex justify-between items-center bg-white border rounded-[11px] px-3 h-[48px]">
        <p className=''>Contract</p>
        <span>
          <img src={LinkIcon} alt="" />
        </span>
      </div>
      <div className="cursor-pointer  flex justify-between items-center bg-white border rounded-[11px] px-3 h-[48px]">
        <p className=''>Get $BRAINED</p>
        <span>
          <img src={LinkIcon} alt="" />
        </span>
      </div>
    </div>
  );
}

export default LinksGroup
