import "./App.css"
import { Route, Switch} from "react-router-dom";
import Landing from "./screens/landing/Landing";
import AboutMe from "./screens/about/AboutMe"
import Projects from "./screens/project list/Projects"
import Contact from "./screens/contact/Contact"



function App() {
  
  return (
    
    <div className="App">
     
         <Switch >
         <Route exact path="/">
         <Landing  />
        </Route>
        <Route exact path="/about">
        <AboutMe />
        </Route>
        <Route exact path="/projects">
          <Projects />
          </Route>
          <Route exact path="/contact">
         <Contact />
       
        </Route>
         
        </Switch> 
      
      </div>

  );
}

export default App;
