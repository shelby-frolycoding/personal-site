import "./Landing.css"
import Title from "../../components/ImageComps/LandingTitle"
import Layout from "../../components/Layout/Layout"

export default function Landing(props) {
 
  return (

    <div className="landing">
      <Layout/>
     <Title className= "landing-title"/>
    </div>

  );
}