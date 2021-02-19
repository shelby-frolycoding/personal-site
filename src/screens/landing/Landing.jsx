import "./Landing.css"
import Title from "../../components/ImageComps/LandingTitle"
import Layout from "../../components/Layout/Layout"
import ContactLogo from "../../components/ImageComps/ContactLogo"
import MeLogo from "../../components/ImageComps/MeLogo"
import WorkLogo from "../../components/ImageComps/WorkLogo"
import { Link } from "react-router-dom";


export default function Landing(props) {
 
  return (

    <div className="landing">
      <Layout/>
      <Title />
      <div className="land-logos" >
        
      <Link className="logo-link" to="/projects">
         <WorkLogo className="l-logo" /> 
        </Link>
        <Link className="logo-link" to="/about">
        <MeLogo className= "l-logo"/> 
        </Link>
        <Link className="logo-link" to="/contact">
          <ContactLogo className="l-logo" />
        </Link>
      
      </div>
      <p className="fanny">
        let's make something fantastic
     </p>
     <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
 
</div>
    </div>

  );
}