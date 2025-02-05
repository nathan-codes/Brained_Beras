import { Discord, Xlogo } from "../assets";
interface socialLinksProps {
  isInFooter?: boolean;
}
const SocialLinks = ({ isInFooter = false }: socialLinksProps) => {
  return (
    <div
      className={` flex h-[4rem]  items-center  ${
        isInFooter ? "bg-none " : "bg-white border-1  shadow-[2px_3px_0px_0px]"
      } rounded-[.75rem]  gap-3 px-2 `}
    >
      <button className="cursor-pointer bg-white flex items-center justify-center w-[3rem] h-[3rem]  border rounded-[8px] shadow-[2px_2px_0px_0px]">
        {" "}
        <img src={Xlogo} alt="" />{" "}
      </button>
     
      <button className="cursor-pointer bg-white flex items-center justify-center w-[3rem] h-[3rem]  border rounded-[8px] shadow-[2px_2px_0px_0px]">
        {" "}
        <img src={Discord} alt="" />
      </button>
    </div>
  );
};

export default SocialLinks;
