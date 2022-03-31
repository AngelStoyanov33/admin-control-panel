import React from "react";
import * as FaMaterialIcons from "react-icons/fa";
import * as AiMaterialIcons from "react-icons/ai";
import * as IoMaterialIcons from "react-icons/io";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import MonitorIcon from "@mui/icons-material/Monitor";
import MapIcon from "@mui/icons-material/Map";
import CodeIcon from "@mui/icons-material/Code";
import VpnLockIcon from "@mui/icons-material/VpnLock";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard/",
    icon: <FaMaterialIcons.FaHome />,
    className: "nav-text",
  },
  {
    title: "Grafana Monitoring",
    path: "/dashboard/grafana",
    redirect: process.env.REACT_APP_GRAFANA_URL,
    icon: <MonitorIcon />,
    className: "nav-text",
  },
  {
    title: "Prometheus",
    path: "/dashboard/prometheus",
    redirect: process.env.REACT_APP_PROMETHEUS_URL,
    icon: <MonitorHeartIcon />,
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
  {
    title: "Kubernetes Portal",
    path: "/dashboard/k8s",
    redirect: process.env.REACT_APP_K8S_PORTAL_URL,
    icon: <VpnLockIcon />,
    className: "nav-text",
  },
];
