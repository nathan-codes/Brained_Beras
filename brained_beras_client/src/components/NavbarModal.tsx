import { BeraLogoMobile, CloseIcon, IGlogo, TwitterLogo, Xlogo } from "../assets";

interface NavbarModalProps {
  onClose: () => void;
}

const NavbarModal = ({ onClose }: NavbarModalProps) => {
  return (
    <div
      className="bg-black/65 fixed  top-0 left-0 bottom-0 right-0 z-[50] py-2 flex justify-center items-center "
      onClick={onClose}
    >
      <div
        className="w-[350px]  h-full  bg-white rounded-[1.5rem]  flex flex-col justify-between  p-4  relative z-50 "
        onClick={(evt) => evt.stopPropagation()}
      >
        <div className="flex  justify-between items-center">
          <button className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border border-[#000] rounded-[10px] p-1 boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
            <img src={BeraLogoMobile} alt="logomobilr" className="w-full " />
          </button>

          <button
            onClick={onClose}
            className="lg:hidden w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border-[1.7px] border-[#000] rounded-[14px] p-2 boxShadow bg-white drop-shadow-2xl flex items-center justify-center"
          >
            <img src={CloseIcon} alt="logomobilr" className="w-full " />
          </button>
        </div>

        <ul className="flex flex-col  ">
          <li className="py-3     border-b-[3px]">
            <span className="bg-[#FCCB06] block  py-2 pl-4 rounded-md   ">
              {" "}
              HOME
            </span>
          </li>
          <li className="py-3     border-b-[3px]">
            <span className=" block  py-2 pl-4 rounded-md"> ABOUT</span>
          </li>
          <li className="py-3     border-b-[3px]">
            <span className=" block  py-2 pl-4 rounded-md"> ROADMAP</span>
          </li>
          <li className="py-3     border-b-[3px]">
            <span className=" block  py-2 pl-4 rounded-md"> PARTNER</span>
          </li>
          <li className="py-3     border-b-[3px]">
            <span className=" block  py-2 pl-4 rounded-md   "> STAKING</span>
          </li>
          <li className="py-3     border-b-[3px]">
            <span className=" block  py-2 pl-4 rounded-md   "> PRESALE</span>
          </li>
        </ul>
        <ul className="border-1 h-[3rem] md:h-[4rem] flex items-center  bg-white rounded-[.75rem] shadow-[2px_3px_0px_0px] gap-2 px-2 ">
          <button className="flex items-center justify-center w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]  border rounded-[8px] shadow-[2px_2px_0px_0px]">
            {" "}
            <img src={Xlogo} alt="" />{" "}
          </button>
          <button className="flex items-center justify-center w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]  border rounded-[8px] shadow-[2px_2px_0px_0px]">
            {" "}
            <img src={TwitterLogo} alt="" />
          </button>
          <button className="flex items-center justify-center w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]  border rounded-[8px] shadow-[2px_2px_0px_0px]">
            {" "}
            <img src={IGlogo} alt="" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;
