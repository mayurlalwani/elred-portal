import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import LogoImg from "../../assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Search from "../Search";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "black",
  textTransform: "none",
  marginRight: 50,
  width: "200px",
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="header-container">
      <div className="header-contents">
        <div className="logo-search">
          <div className="logo">
            <Link to="/">
              <img src={LogoImg} width="90px" height="70px" alt="logo" />
            </Link>
          </div>

          <div className="search">
            <Search placeholder="Search..." direction="row" />
          </div>
        </div>
        <div className="right-section">
          <ColorButton
            variant="contained"
            startIcon={<ShoppingCartOutlinedIcon />}
          >
            Checkout (200)
          </ColorButton>
          <Box
            className="avatar-profile"
            sx={{ ml: 2, mr: 2, backgroundColor: "white" }}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>

            <Typography
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ ml: 2 }}
            >
              User Admin
            </Typography>
          </Box>
        </div>

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
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
        </Menu>
      </div>
    </header>
  );
};

export default Header;
