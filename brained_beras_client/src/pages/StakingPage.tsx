import { HeadingImage } from "../assets";

const StakingPage = () => {
  return (
    <div>
      <header className="pt-[2rem]" id="home">
        <img
          src={HeadingImage}
          className="w-[15rem] lg:w-[18rem] mx-auto my-2 "
          alt="heading"
        />
      </header>
      <main></main>
      <footer className="fixed bottom-0 w-full bg-white text-center py-2 border-y-[4px] mt-[-1rem]  p-10">
        Copyright: © 2025 $Brained Bears. All Rights Reserved.
      </footer>
    </div>
  );
};

export default StakingPage;
