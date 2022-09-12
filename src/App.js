import Home from "./components/home/home.js";
import Skill from "./components/skill/skill.js";
import Projects from "./components/projects/projects.js";
import About from "./components/about/about.js";
import Contact from "./components/contact me/contact.js";
import Footer from "./components/footer/footer.js";


function App() {
  return (
    <div className="App">
     <Home/>
     <Skill/>
     <Projects />
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
