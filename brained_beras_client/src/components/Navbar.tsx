import { useEffect, useState } from "react";
import { BeraLogoMobile, HamburgerMenuIcon } from "../assets";
import NavbarModal from "./NavbarModal";
import SocialLinks from "./SocialLinks";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router";
import { navigationLinks } from "../constants/navigation";

const Navbar = () => {
  const [isNavModalOpen, setNavModalOpen] = useState<boolean>(false);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 160; // Adjust this value based on your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

 const location = useLocation();
  useEffect(()=> {
  console.log("Location Path", location.pathname);
  console.log("Location Hasth", location.hash);

  }, [location.pathname, location.hash])


  const isActivePath = (path:string)=> {
    const currentPath = location.pathname + location.hash
    return currentPath === path
  }
 

  return (
    <nav className="relative w-full flex justify-between p-3 lg:p-0 items-center pt-4 lg:pt-10 z-10 lg:max-w-[80%] mx-auto">
      <button className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border border-[#000] rounded-[10px] p-1 boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
        <img src={BeraLogoMobile} alt="logomobilr" className="w-full" />
      </button>

      <ul className="border-1 h-[4rem] hidden lg:flex items-center gap-3 bg-white rounded-[.75rem] shadow-[2px_3px_0px_0px] px-3">
       

        {navigationLinks.map((navLink)=>{
          return  <HashLink key={navLink.title}
          smooth
          to={`${navLink.path}`}
          scroll={scrollWithOffset}
          className={`${isActivePath(navLink.path)&&"bg-black text-white"}  px-3 pt-2 pb-1 text-base rounded-[.5rem] hover:bg-black hover:text-white transition-all ease-in duration-200 `}
        >
          {navLink.title}
        </HashLink>
        })}
       
      </ul>

      <div className="hidden lg:flex">
        <SocialLinks />
      </div>

      <button className="lg:hidden w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border-[1.7px] border-[#000] rounded-[14px] p-2 boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
        <img
          src={HamburgerMenuIcon}
          alt="logomobilr"
          className="w-full"
          onClick={() => setNavModalOpen(true)}
        />
      </button>

      {isNavModalOpen && <NavbarModal onClose={() => setNavModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
