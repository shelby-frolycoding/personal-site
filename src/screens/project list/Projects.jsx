import "./Projects.css"
import WorksTitle from "../../components/ImageComps/Works"
import Layout from "../../components/Layout/Layout"
import P1 from "../../components/ImageComps/p1"
import P2 from "../../components/ImageComps/p2"
import P3 from "../../components/ImageComps/p3"
import P4 from "../../components/ImageComps/p4"


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCss3Alt, faGithub, faGithubAlt, faHtml5, faInstagram, faJs, faLinkedinIn, faNode, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
// import { faGem } from "@fortawesome/free-solid-svg-icons";


export default function Projects(props) {
  return (
    
    <div className="Work-Page">
      <Layout />
      <div className= "wdiv">
        <WorksTitle className="works" /></div>
      <P1 className="p" /> <div className="p-words"><p className="aboutp"> This is my first ever project. 
        <button class="big-button">the site</button>
        <button class="big-button">the code</button></p>
      </div>
      <br/>
      <P2 className="p" />
      <div className="p-words">
        <p className="about-p2">
        <button class="big-button">the site</button>
        <button class="big-button">the code</button>
        </p>
         </div>
      <br/>
      <P3 className="p" /><div className="p-words"><p className="aboutp">
      <button class="big-button">the site</button>
        <button class="big-button">the code</button>
      </p>
         </div>
      <br />
      <P4 className="p" /><div className="p-words"><p className="aboutp">
      <button class="big-button">the site</button>
        <button class="big-button">the code</button>
      </p>
         </div>
         <div class="bb"></div>
  </div>
  );
}