const About = () => {
    
  return (
    <div name="about" className="w-full h-screen bg-[#D0DEE1] text-[#041658]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#1281BD]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Videl Araya, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Phasellus nec velit lectus. Fusce sollicitudin aliquet lacus, a
              lacinia ante finibus sed. Suspendisse sit amet ipsum ante. Donec
              id faucibus ex, vitae porta mi. Sed placerat, ipsum et dapibus
              pellentesque, elit nibh ullamcorper metus, at euismod ligula ex ac
              felis. Cras aliquam malesuada sem, at finibus libero efficitur a.
              Donec rutrum tortor sed sem commodo, in lobortis orci iaculis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
