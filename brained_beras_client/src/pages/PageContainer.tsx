import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { CloudImage } from "../assets";

const PageContainer = () => {
  return (
    <div className="bg-[url(./assets/images/Headerbg.svg)] bg-no-repeat bg-cover  bg-center h-[25rem] md:h-[35rem] lg:h-[55rem] ">
      <main className="  ">
        {" "}
        <img
          src={CloudImage}
          className="absolute top-[-10] right-[32%] hidden lg:block"
          alt=""
        />
        <Navbar />
        <Outlet />
      </main>{" "}
    </div>
  );
};

export default PageContainer;
