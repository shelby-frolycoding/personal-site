import { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import Logo from "../Logo/Logo";
import Menu from "../../components/Menu/Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faBars
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav(props) {
 
  const [menuToggle, setMenuToggle] = useState(false);

 
  return (
    <div className="all-nav">
      <div className="burger-boi">
        <FontAwesomeIcon
          icon={faBars}
          name="menuToggle"
          onClick={() => setMenuToggle((prev) => !prev)}
        />
      </div>
      <div className="all-icons">
        <Link className="home-link" to="/">
          {/* <Logo /> */}
        </Link>
      </div>
      <CSSTransition
        timeout={300}
        in={menuToggle}
        unmountOnExit
        classNames="menu"
      >
        <Menu />
      </CSSTransition>
     
    </div>
  );
}