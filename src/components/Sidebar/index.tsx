import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import {
  Box,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { createElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PrimaryButton from "../Button";
import { Logo } from "../Logo";
import { sxStyles } from "./index.styles";

const Sidebar = () => {
  const styles = sxStyles();
  const location = useLocation();
  const menuItems = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Orders",
      icon: PriorityHighIcon,
    },
    {
      name: "Team Members",
      icon: PeopleAltIcon,
    },
    {
      name: "Partners",
      icon: HandshakeIcon,
    },
    {
      name: "Product Listings",
      icon: InventoryIcon,
    },
    {
      name: "Awards & Honours",
      icon: EmojiEventsIcon,
    },
    {
      name: "About Us",
      icon: InfoIcon,
    },
    {
      name: "Payment Info",
      icon: PaymentsIcon,
    },
  ];

  return (
    <Box id="sidebar-main-container" sx={styles.sidebarMainContainer}>
      <Box id="sidebar-contents" sx={styles.sidebarContents}>
        <Logo />

        <Box id="menu-section" sx={{ ml: 2, flex: 1 }}>
          <MenuList>
            {menuItems.map((item, index) => (
              <NavLink
                to={`/about-us`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                style={({ isActive }) => ({
                  color:
                    location.pathname === "/about-us" &&
                    item.name === "About Us"
                      ? "#be212a"
                      : "#bababa",
                  background:
                    location.pathname === "/about-us" &&
                    item.name === "About Us"
                      ? "#fff2f2"
                      : "#ffffff",
                  textDecoration: "none",
                })}
              >
                <MenuItem
                  sx={{
                    height: "20%",
                    color:
                      location.pathname === "/about-us" &&
                      item.name === "About Us"
                        ? "#cb4d55"
                        : "#bababa",
                    backgroundColor:
                      location.pathname === "/about-us" &&
                      item.name === "About Us"
                        ? "#f9e9ea"
                        : "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  <ListItemIcon>{createElement(item.icon)}</ListItemIcon>
                  <Typography fontSize="14px" variant="inherit">
                    {item.name}
                  </Typography>
                </MenuItem>
              </NavLink>
            ))}
          </MenuList>
        </Box>

        <Box id="help-section" sx={{ display: "inline-flex" }}>
          <Box sx={styles.helpContents} id="help-content">
            <ContactSupportIcon />
            <Typography fontWeight={600}>Need help?</Typography>
            <Typography textAlign="center" fontSize="12px">
              Our support team is at your disposal
            </Typography>
            {/* <ColorButton>Get Help</ColorButton> */}
            <PrimaryButton
              height="30px"
              width="60%"
              title="Get Help"
              fontSize="10px"
              onClick={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
