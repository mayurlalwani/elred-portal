import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Avatar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import PrimaryButton from "../Button";
import Search from "../Search";
import DownIcon from "../../assets/angle-down-solid.svg";
import { sxStyles } from "./index.styles";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const styles = sxStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="header-container" sx={styles.headerContainer}>
      <Box className="header-contents" sx={styles.headerContents}>
        <Box className="logo-search" sx={styles.logoSearch}>
          <div className="logo">
            <Link to="/">
              <img src={LogoImg} width="50px" height="50px" alt="logo" />
            </Link>
          </div>

          <div className="search">
            <Search placeholder="Search..." direction="row" />
          </div>
        </Box>
        <Box className="right-section" sx={styles.rightSection}>
          <PrimaryButton
            startIcon={<ShoppingCartOutlinedIcon />}
            title="Checkout(200)"
            width="210px"
            onClick={() => {}}
          />

          <Box
            className="avatar-profile"
            sx={styles.avatarProfile}
            // sx={{ ml: 2, mr: 2, backgroundColor: "white", cursor: "pointer" }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
              }}
            >
              M
            </Avatar>

            <Typography
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                ml: 2,
                mr: 2,
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              User Admin
            </Typography>
            <img height="10px" width="10px" src={DownIcon} />
          </Box>
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
        </Menu>
      </Box>
    </Box>
  );
};
export default Header;
