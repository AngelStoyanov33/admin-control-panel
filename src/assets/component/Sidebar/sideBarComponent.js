import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ThemeProvider } from "@mui/material/styles";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { sidebarData } from "./sidebarComponentData";
import { Link } from "react-router-dom";
import "./sidebarComponent.css";
import { darkTheme, lightTheme } from "../Dashboard/dashboardThemes";

const drawerWidth = 240;

export default function Sidebar({ content }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>{/* Navbar*/}</Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {sidebarData.map((item, index) => {
              return (
                <ListItem button key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-text">{item.title}</span>
                  </Link>
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          {content}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
