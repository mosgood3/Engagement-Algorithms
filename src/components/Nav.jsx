import { useState } from "react";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Show open button only when menu is closed */}
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-4 right-4 text-white p-2 rounded-md bg-slate-800 shadow-md z-50"
        >
          <RiArrowLeftDoubleFill size={20} />
        </button>
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 lg:w-1/5 md:1/4 sm:w-1/2 h-full bg-slate-800 text-white p-6 shadow-lg flex flex-col transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside the menu */}
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-xl font-bold"
        >
          <RiArrowRightDoubleFill />
        </button>

        <h2 className="text-lg font-semibold mt-4">Navigate</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#what-are-algos"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600 transition"
            >
              What are Algorithms?
            </a>
          </li>
          <li>
            <a
              href="#engagement-algorithms"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600 transition"
            >
              Engagement Algorithms
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
