import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CustomTabs from "../../components/CustomTabs";
import { Logo } from "../../components/Logo";
import Layout from "../Layout";
import { sxStyles } from "./index.styles";

const AboutUs = () => {
  const styles = sxStyles();
  const description =
    "Lorem Ipsum dolor sit amet, cosectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.";
  const [companyDescription, setCompanyDescription] = useState(description);

  return (
    <Layout>
      <Box id="main-container" sx={styles.mainContainer}>
        <Box sx={styles.aboutContents} id="about-contents">
          <Box id="title">
            <h3>About Us</h3>
          </Box>
          <Box id="company-details" sx={styles.companyDetails}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logo />
              <Typography sx={{ fontSize: "12px" }}>Verify Company</Typography>
            </Box>
            <Box id="description" sx={styles.description}>
              <Typography ml={3} color="#666666">
                {companyDescription}
                <EditIcon />
              </Typography>
            </Box>
          </Box>

          <Box id="tab-section" sx={styles.tabSection}>
            <CustomTabs />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AboutUs;
