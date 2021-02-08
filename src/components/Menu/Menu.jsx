import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div className="menu">
      <Link className="menu-link" to="/">
        Home
      </Link>
      <Link className="menu-link" to="/about">
        About Me
      </Link>
      <Link className="menu-link" to="/projects">
        Projects
         </Link>
      <Link className="menu-link" to="/contact">
        Contact
      </Link>
    </div>
  );
}