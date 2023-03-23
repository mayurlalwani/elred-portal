import { Box, Drawer, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { createElement, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CustomDrawer from "../Drawer";

interface ICardProps {
  title: string;
  icon: any;
  children: any;
  showContactsInfo?: boolean;
}

const Card = ({ title, icon, children, showContactsInfo }: ICardProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <Box
      id="card-main-container"
      sx={{
        border: "solid 1px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        padding: "20px",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          {createElement(icon)}
          <h4>{title}</h4>
        </Box>
        <EditIcon
          sx={{ color: "#E72D38" }}
          onClick={toggleDrawer("right", true)}
        />
      </Box>
      <Box sx={{ mt: 2 }}>{children}</Box>
      <CustomDrawer
        showContactsInfo={showContactsInfo}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </Box>
  );
};

export default Card;
