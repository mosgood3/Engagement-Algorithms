import bgImage from '../assets/Images/bg.jpg';

const Hero = () => {
    return (
<div
        className="w-full h-80 flex justify-center items-end bg-gray-200 shadow-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <h1 className="sm:text-3xl text-2xl font-bold text-white p-6 bg-black bg-opacity-70 rounded-lg text-center">
          The Infinite Scroll: How Algorithms Are Controlling You
        </h1>
      </div>
    );
    };

export default Hero