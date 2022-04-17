import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaMaterialIcons from "react-icons/fa";
import * as AiMaterialIcons from "react-icons/ai";
import { sidebarData } from "./sidebarComponentData";
import "./sidebarComponent.css";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaMaterialIcons.FaBars />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiMaterialIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-text">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </React.Fragment>
  );
}

export default Sidebar;
