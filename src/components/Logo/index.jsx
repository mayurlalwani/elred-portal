import { Box, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import { sxStyles } from "./index.styles";
export const Logo = () => {
  const styles = sxStyles();
  return <Box id="logo-section" sx={styles.logoSection}>
      <Box id="logo" sx={styles.logo}>
        <img src={LogoImg} width="40px" height="40px" style={{
        borderRadius: "50%"
      }} />
      </Box>
      <Typography fontWeight={600} marginTop={2} fontSize="12px">
        A.T Inks
      </Typography>
    </Box>;
};