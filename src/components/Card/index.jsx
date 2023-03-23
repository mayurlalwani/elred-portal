import { Box } from "@mui/material";
import React, { createElement, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CustomDrawer from "../Drawer";
const Card = ({
  title,
  icon,
  children,
  showContactsInfo
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (anchor, open) => event => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return <Box id="card-main-container" sx={{
    border: "solid 1px rgba(0, 0, 0, 0.12)",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "20px",
    height: "100%"
  }}>
      <Box sx={{
      display: "flex",
      justifyContent: "space-between"
    }}>
        <Box sx={{
        display: "flex"
      }}>
          {createElement(icon)}
          <h4>{title}</h4>
        </Box>
        <EditIcon sx={{
        color: "#E72D38"
      }} onClick={toggleDrawer("right", true)} />
      </Box>
      <Box sx={{
      mt: 2
    }}>{children}</Box>
      <CustomDrawer showContactsInfo={showContactsInfo} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </Box>;
};
export default Card;