
import Header from "./components/Headrer/Header"
import Home from "./components/home/Home"
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects.jsx/Project";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/Scrollup/Scrollup";
// import About from "./components/About"
// import Project from "./components/Project";
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <main className="main">
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Qualification/>
    <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    {/* <main>
      <About/>
      <Project/>
      <Skills/>
    </main>
    <Footer/> */}
    </>
  )
}

export default App;
