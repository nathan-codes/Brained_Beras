import { useState } from "react";
import { BeraLogoMobile, HamburgerMenuIcon } from "../assets";
import NavbarModal from "./NavbarModal";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [isNavModalOpen, setNavModalOpen] = useState<boolean>(false);

  return (
    <nav className=" relative w-full flex justify-between p-3 items-center pt-4 lg:pt-10  z-10">
      <button className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border border-[#000] rounded-[10px] p-1 boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
        <img src={BeraLogoMobile} alt="logomobilr" className="w-full " />
      </button>

      <ul className="border-1 h-[4rem] hidden lg:flex items-center gap-3 bg-white rounded-[.75rem] shadow-[2px_3px_0px_0px] px-3">
        <li className=" bg-black text-white px-3 pt-2 pb-1  text-base rounded-[.5rem]">
          Home
        </li>
        <li className=" px-3 pt-2 pb-1  text-base rounded-[.5rem]">About</li>
        <li className=" px-3 pt-2 pb-1  text-base rounded-[.5rem]">Roadmap</li>
        <li className=" px-3 pt-2 pb-1  text-base rounded-[.5rem]">Partner</li>
        <li className=" px-3 pt-2 pb-1  text-base rounded-[.5rem]">Staking</li>
        <li className=" px-3 pt-2 pb-1  text-base rounded-[.5rem]">Presale</li>
      </ul>

      <div className="hidden lg:flex">
        <SocialLinks />
      </div>

      <button className="lg:hidden w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border-[1.7px] border-[#000] rounded-[14px] p-2 boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
        <img
          src={HamburgerMenuIcon}
          alt="logomobilr"
          className="w-full "
          onClick={() => setNavModalOpen(true)}
        />
      </button>

      {isNavModalOpen && <NavbarModal onClose={() => setNavModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
