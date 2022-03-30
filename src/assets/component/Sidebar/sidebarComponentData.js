import React from "react";
import * as FaMaterialIcons from "react-icons/fa";
import * as AiMaterialIcons from "react-icons/ai";
import * as IoMaterialIcons from "react-icons/io";
import MapIcon from "@mui/icons-material/Map";
import CodeIcon from "@mui/icons-material/Code";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard/",
    icon: <FaMaterialIcons.FaHome />,
    className: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard/test",
    icon: <FaMaterialIcons.FaHome />,
    className: "nav-text",
  },
  {
    title: "Map",
    path: "/dashboard/map",
    icon: <MapIcon />,
    className: "nav-text",
  },
  {
    title: "Git",
    path: "/dashboard/git",
    icon: <CodeIcon />,
    className: "nav-text",
  },
];
