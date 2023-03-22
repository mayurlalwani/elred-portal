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
      sx={{
        border: "solid",
        display: "flex",
        flexDirection: "column",
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
      <Box>{children}</Box>
      <CustomDrawer
        showContactsInfo={showContactsInfo}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </Box>
  );
};

export default Card;
