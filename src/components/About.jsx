import me from '../assets/Images/me.jpg';

const About = () => {
    return (
<div className="w-full max-w-3xl p-6 md:p-12 rounded-lg flex flex-row items-center text-center md:text-left">
        <img
          src={me}
          alt="Your Name"
          className="w-14 h-14 md:w-14 md:h-14 rounded-full mb-4 md:mb-0 mr-6"
        />
        <div>
          <h3 className="text-lg font-semibold">By Matthew Osgood</h3>
          <p className="text-gray-700 mt-2 text-xs">
            Feb. 6, 2025 updated 9:45am
          </p>
        </div>
      </div>
    );
    };

export default About