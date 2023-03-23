import { Box } from "@mui/material";
import React, { createElement, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CustomDrawer from "../Drawer";
import { sxStyles } from "./index.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppState } from "../../store";

const Card = ({ title, icon, children, showContactsInfo, showDeleteIcon }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, dispatch] = useAppState();

  const toggleDrawer = (anchor, open) => (event) => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDeleteContact = () => {
    dispatch({
      type: "changeState",
      data: {
        emails: [],
        contacts: [],
      },
    });
  };
  const styles = sxStyles();

  return (
    <Box id="card-main-container" sx={styles.cardMainContainer}>
      <Box sx={styles.cardContents}>
        <Box sx={{ display: "flex" }}>
          {createElement(icon)}
          <h4>{title}</h4>
        </Box>
        <Box>
          {showDeleteIcon && (
            <DeleteIcon
              sx={{ color: "#E72D38", cursor: "pointer" }}
              onClick={handleDeleteContact}
            />
          )}
          <EditIcon
            sx={{ color: "#E72D38", cursor: "pointer" }}
            onClick={toggleDrawer("right", true)}
          />
        </Box>
      </Box>
      <Box mt={2} display="flex">
        {children}
      </Box>
      <CustomDrawer
        showContactsInfo={showContactsInfo}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </Box>
  );
};
export default Card;
