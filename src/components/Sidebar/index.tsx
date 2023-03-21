import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PaymentsIcon from "@mui/icons-material/Payments";
import InfoIcon from "@mui/icons-material/Info";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { createElement } from "react";
import LogoImg from "../../assets/logo.png";
import PaymentImg from "../../assets/payment.png";
import { sxStyles } from "./index.styles";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const styles = sxStyles();
  const location = useLocation();
  console.log(location.pathname);
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
        <Box id="logo-section" sx={styles.logoSection}>
          <Box id="logo" sx={styles.logo}>
            <img
              src={LogoImg}
              width="40px"
              height="40px"
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Typography fontWeight={600} marginTop={2} fontSize="12px">
            A.T Inks
          </Typography>
        </Box>

        <Box id="menu-section" sx={{ ml: 2 }}>
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
                    height: "60px",
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

        <Box id="help-section" sx={styles.helpSection}>
          <Box sx={styles.helpContents} id="help-content">
            <ContactSupportIcon />
            <Typography fontWeight={600}>Need help?</Typography>
            <Typography textAlign="center">
              Our support team is at your disposal
            </Typography>
            {/* <ColorButton>Get Help</ColorButton> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
