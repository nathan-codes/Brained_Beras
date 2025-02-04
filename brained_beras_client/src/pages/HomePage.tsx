import { BearLogo, HeadingImage } from "../assets";
import About from "./About";
import Partner from "./Partner";
import Roadmap from "./Roadmap";
import Social from "./Social";

const HomePage = () => {
  return (
    <div className=" ">
      <header className="pt-[2rem]" id="home">
        <img
          src={HeadingImage}
          className="w-[22rem] lg:w-[22rem] mx-auto my-2 "
          alt="heading"
        />

        <img src={BearLogo} alt="bear" className="mx-auto lg:w-[22rem] " />
      </header>

      <main className="lg:mt-[-8rem]">
        {/* About Section */}
        <About />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Partner Section */}
        <Partner />

        {/* Social Section */}
        <Social />
      </main>

      <footer className="relative bg-white text-center py-5 border-y-[4px] mt-[-2rem]  p-10">
        Copyright: © 2025 $Brained Bears. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
