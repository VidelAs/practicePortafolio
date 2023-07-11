import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#D0DEE1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#1281BD]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f]">
          Videl Araya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#17213f]">
          I'm a Developer.
        </h2>
        <p className="text-[#5f6063] py-4 max-w-[700px]">
          Aliquam ut eros varius, maximus ipsum ac, dictum sem. Etiam pharetra
          metus quis nibh accumsan, vitae blandit ante malesuada. Nullam
          vulputate eros nec dui pharetra cursus. Nunc hendrerit dolor non purus
          scelerisque ornare. Nam turpis erat, pulvinar a diam et, venenatis
          convallis justo. Cras interdum nulla eget ex fringilla, eget tempus
          nulla tempus.
        </p>
        <div>
          <button className="text-[#041658] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#B0B6B8] hover:border-[#B0B6B8]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
