import './index.css'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Article from './components/Article.jsx'


function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center relative">
      <Hero />
      <Nav />
      <About />
      <Article />
    </div>
  );
}

export default App
