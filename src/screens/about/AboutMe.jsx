// import { Link } from "react-router-dom";
import "./AboutMe.css";
import MePic from "../../components/ImageComps/Me"
import Layout from "../../components/Layout/Layout"
import AboutTitle from "../../components/ImageComps/About"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faGithub, faGithubAlt, faHtml5, faInstagram, faJs, faLinkedinIn, faNode, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import pdf from "../../images/pdf.pdf"


export default function AboutMe(props) {
  return (
    
    <div className="About">
      <Layout/>
      <MePic className="me-pic" />
      <button class="filezz">
        <a href={pdf} rel="noreferrer" target="_blank" className="lol">download my resume</a>
      </button>

      <AboutTitle className="a-tt" />
      
     
        
      
      <div className = "about-cont">
        <div className="about-words"> <p className="bold"> Long ago, in a cornfield far away, a girl dreamed of using her wits and imagination to create and delight.</p>
        Whether it be a pen, a keyboard, or paint,
        I thrive and revel in creative and inventive pursuits.
        After years in retail, customer service, and even winning a barista championship, I yearned for more-- to make spectacular things, help businesses, and do it all with a bit of personality.
        My love for creation, technology, and progress led me to pursue a path into software engineering. I never want to stop learning and mastering these skills. 
        This is no longer just a career transition, but it has become an absolute passion for me. 
        <br/>
         
          
          
          <p className="ppp">I'm a fullstack engineer who specializes in front-end and I'm obsessed with all things styling and design. I also have helped businesses with
          branding and graphic design work and look forward to more. When it comes to my craft, 
          I gleefully wield my creativity--which is my most loved skill--and 
          approach everything like it's my next masterpiece. Yes, even styling buttons comes with its own beauty for me. 
          Whether I need to solve a problem or design a logo, my imagination helps me approach things from an artistic and inventive mindset.
          I want to create wonderful things for users and clients.</p>
         <br/> 
        <p className="bold">My dream is to help people and companies with
        their sites, products, and visions-- making fantastic things together. </p> </div>
      </div>
      <div className="skills">
        <FontAwesomeIcon icon={faHtml5} /><FontAwesomeIcon icon={faCss3Alt} /><FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faReact} /><FontAwesomeIcon icon={faGem} /><FontAwesomeIcon icon={faNode} /><FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faNpm}/>

      </div>
      <div className="social">
      <a href="https://www.linkedin.com/in/shelbysexton/" rel="noreferrer" target="_blank"> <FontAwesomeIcon className="soc" icon={faLinkedinIn} /></a>
      <a href="https://github.com/shelby-frolycoding" rel="noreferrer" target="_blank"><FontAwesomeIcon className="soc" icon={faGithubAlt} /></a>
      <a href="https://www.instagram.com/fantastic_froly/" rel="noreferrer" target="_blank"><FontAwesomeIcon className="soc" icon={faInstagram} /></a>
      </div>
      
      <div class="bb"></div>
    </div>
  );
}