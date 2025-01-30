import { brainIcon, phaseMarker } from "../assets";

interface OddPhaseCardProps {
  phaseCount: number;
  phaseInfo: string[];
}

const OddPhaseCard = ({ phaseCount, phaseInfo }: OddPhaseCardProps) => {
  return (
    <article className="  min-w-[340px] min-h-[200px]  lg:w-[440px] lg:h-[260px] lg:relative  lg:top-[22rem] bg-[url(./assets/images/oddphaseCardbackground.png)] bg-contain bg-no-repeat py-5 px-7 lg:p-10">
      <img
        src={brainIcon}
        alt=""
        className=" relative hidden lg:flex bottom-[5.1rem] lg:bottom-[6.3rem]  mx-auto   "
      />
      <div className="lg:relative  lg:bottom-20">
        <h1 className="text-[20px] lg:text-[34px] mb-3 ">Phase {phaseCount}</h1>
        <ul className="flex flex-col gap-2 text-[13px] lg:text-base ">
          {phaseInfo.map((item, index) => {
            return (
              <li className="flex gap-2 " key={index}>
                <span className="w-[5%]">
                  <img src={phaseMarker} alt="" />{" "}
                </span>
                <span className="w-[95%]"> {item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default OddPhaseCard;
