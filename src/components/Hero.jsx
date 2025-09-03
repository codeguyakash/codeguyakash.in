// import heroimage from '../assets/images/heroimage.png';

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="flex-row-reverse md:flex items-center justify-center md:gap-20 mt-20">
      <div id="hero-content">
        <h1 className="welcome text-4xl font-bold">WELCOME, FRIENDS</h1>
        <h2 className="text-2xl my-2">Full Stack developer?</h2>
        <div className="">
          <p>
            I'm Akash a Developer who turns ideas into reality.
            <br />
            I’m here to build, break, and innovate!"
          </p>
          <div id="hire-btn-div" className="mt-5">
            <a
              id="hire-btn"
              className=" text-black border border-black hover:text-white hover:bg-black py-2 px-4 transition duration-300"
              href="mailto:codeguyakash@gmail.com">
              HIRE ME
            </a>
          </div>
        </div>
      </div>

      <div id="hero-image" className="">
        <div className="w-100 h-120 bg-gray-300 rounded-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;
