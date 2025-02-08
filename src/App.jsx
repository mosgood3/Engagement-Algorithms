import { useState } from 'react'
import './index.css'
import bgImage from './assets/Images/bg.jpg';
import me from './assets/Images/me.jpg';
import { Menu } from "lucide-react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen flex flex-col items-center relative">
      {/* Hero Section */}
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

      {/* Navigation Menu */}
      <div className="fixed top-1/2 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg hidden md:block">
        <h2 className="text-lg font-semibold mb-2">Navigate</h2>
        <ul className="space-y-2">
          <li>
            <a href="#attention-economy" className="hover:text-gray-300">
              Attention Economy
            </a>
          </li>
          <li>
            <a href="#what-we-can-do" className="hover:text-gray-300">
              What Can We Do?
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 md:hidden text-white p-2 rounded-md"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-slate-900 text-white p-6 shadow-lg flex flex-col">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-xl font-bold"
          >
            ✕
          </button>
          <h2 className="text-lg font-semibold mt-4">Navigate</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#attention-economy" onClick={() => setMenuOpen(false)}>
                Attention Economy
              </a>
            </li>
            <li>
              <a href="#what-we-can-do" onClick={() => setMenuOpen(false)}>
                What Can We Do?
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* About the Author Section */}
      <div className="w-full max-w-3xl p-6 md:p-12 rounded-lg flex flex-row items-center text-center md:text-left">
        <img
          src={me}
          alt="Your Name"
          className="w-14 h-14 md:w-14 md:h-14 rounded-full mb-4 md:mb-0 mr-6"
        />
        <div>
          <h3 className="text-lg font-semibold">By Matthew Osgood</h3>
          <p className="text-gray-700 mt-2 text-xs">
            Feb. 2, 2025 updated 9:45am
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full max-w-3xl p-6 md:p-6 text-gray-900 leading-relaxed">
        <p className="text-lg">
          "If you're not paying for the product, you are the product." - Tristan Harris
        </p>

        <h2 id="attention-economy" className="text-2xl font-semibold mt-6">
          What Are Algorithms?
        </h2>
        <p className="mt-2">
  At a high level, an algorithm is a set of instructions used to complete a task. We follow algorithms in everyday life—for example, making a sandwich by layering bread, meat, and cheese in a specific order. In computing, algorithms function the same way, guiding a computer through a sequence of steps to solve problems and perform tasks.
</p>

<p className="mt-4">
  Algorithms become increasingly complex when they gain the ability to learn and adapt on their own, a process known as artificial intelligence or machine learning. Think of the sandwhich example—you might receive feedback from someone, adjust the ingredients or technique, and refine the recipe over time. Similarly, machine learning algorithms improve by analyzing data, identifying patterns, and continuously optimizing their performance.  
</p>

<div className="mt-6 flex">
  <div className="bg-gray-900 w-2 rounded-l-lg"></div>
  <div className="bg-gray-100 p-4 rounded-r-lg flex-1">
    <p className="text-gray-700">
      The term <strong>"algorithm"</strong> comes from the name of Persian mathematician 
      <strong> Al-Khwarizmi</strong>, whose work in the 9th century laid the foundation 
      for modern computing. Without his contributions, algorithms as we know them 
      today might not exist!
    </p>
  </div>
</div>






        <h2 id="what-we-can-do" className="text-2xl font-semibold mt-6">
          What Can We Do?
        </h2>
        <p className="mt-2">
          Understanding how these systems work is the first step. Taking control
          of our attention by limiting notifications, setting time limits, and
          curating our own content can help.
        </p>

        <p className="mt-6 italic text-gray-600">
          Stay aware. Stay intentional. Don’t let the algorithm control you.
        </p>
      </div>
    </div>
  );
}

export default App
