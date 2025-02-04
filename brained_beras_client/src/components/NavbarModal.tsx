import { HashLink } from "react-router-hash-link";
import { BeraLogoMobile, CloseIcon } from "../assets";
import { navigationLinks } from "../constants/navigation";
import SocialLinks from "./SocialLinks";
import { useLocation } from "react-router-dom";

interface NavbarModalProps {
  onClose: () => void;
}

const NavbarModal = ({ onClose }: NavbarModalProps) => {
  const location = useLocation();

  // Function to check if link is active
  const isActive = (path: string) => {
    const currentPath = location.pathname + location.hash;
    return currentPath === path;
  };

  return (
    <div
      className="bg-black/65 fixed top-0 left-0 bottom-0 right-0 z-[50] py-2 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[350px] h-full max-h-[600px] bg-white rounded-[1.5rem] flex flex-col justify-between p-4 relative z-50"
        onClick={(evt) => evt.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <button className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border border-[#000] rounded-[10px] p-1 boxShadow bg-white drop-shadow-2xl flex items-center justify-center">
            <img src={BeraLogoMobile} alt="logomobilr" className="w-full" />
          </button>

          <button
            onClick={onClose}
            className="lg:hidden w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] border-[1.7px] border-[#000] rounded-[14px] p-2 boxShadow bg-white drop-shadow-2xl flex items-center justify-center"
          >
            <img src={CloseIcon} alt="logomobilr" className="w-full" />
          </button>
        </div>

        <ul className="flex flex-col">
          {navigationLinks.map((navlink) => {
            const active = isActive(navlink.path);

            return (
              <HashLink
                key={navlink.path}
                to={navlink.path}
                className="py-3 border-b-[3px]"
                onClick={onClose}
              >
                <span
                  className={`block py-2 pl-4 rounded-md ${
                    active ? "bg-[#FCCB06]" : ""
                  }`}
                >
                  {navlink.title}
                </span>
              </HashLink>
            );
          })}
        </ul>

        <SocialLinks />
      </div>
    </div>
  );
};

export default NavbarModal;
