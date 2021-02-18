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
      <P1 className="p" /> <div className="p-words"> <p  className="aboutp">This is my first ever project that was 
      made after only learning coding for a little over 2 weeks. I used HTML, CSS, and JavaScript. Before this project, 
      I had no idea what an API was or how to use it in code. 
      I ended up usign a NASA API to let users search asteriods and metereos that pass near Earth.  
      My first project stays untouched, a testament to growth.
      <p className= "extra">made with: html, css, javascript, nasa api</p>
      <button class="big-button">the site</button> 
        <button class="big-button">the code</button>
        <br/>
        </p>
      </div>
      <br/>
      <P2 className="p" />
      <div className="p-words">
        <p className="aboutp">
          Bookends is my second project and my favorite solo project so far. This is my first project utilizing 
          React and using Airtabel as a database. Bookends lets users track their reading and journal. Made before any 
          significant learning on mobile responsiveness and before learning backend technologies, Bookends is a project 
          I hope to contiue to build on!
          <p className= "extra">made with: html, css, jsx, react, airtable</p>
        <br/>
        <button class="big-button">the site</button>
        <button class="big-button">the code</button></p>
         </div>
      <br/>
      <P3 className="p" /><div className="p-words"><p className="aboutp"> GetLost is a mock up of an online,  retail site. 
      This was my first experience working with a group and got the abolsute pleasure of working together for a few weeks. 
      GetLost is full CRUD utilizing a MongoDB/Heroku backend. Users and Admins can sign in, shop, and explore products. 
      I got experience using GitHub is a real life, team setting.
      <p className= "extra">made with: html, css, javascript, react, express, mongoDB, heroku</p>
      <button class="big-button">the site</button>
        <button class="big-button">the code</button>
        <br />
      </p>
         </div>
      <br />
      <P4 className="p" /><div className="p-words"><p className="aboutp">
      I had less than a week to create a full-CRUD, fullstack app leveraging Ruby, postgreSql,  and Ruby on Rails. I'm 
        really proud of what I accomlished 
        on a such a tight deadline. MyPlantPal is a house-plant care tracker, 
        letting user knows when it's time to take care of their little green friends. 
        Stay tuned for polishing and relaunching of this project!
        <p className= "extra">made with: html, css, jsx, react, ruby, ruby on rails, postgrsql, heroku</p>
      <button class="big-button">the site</button>
        <button class="big-button">the code</button>
        
      </p> 
        
         </div>
         <div class="bb"></div>
  </div>
  );
}