import EditIcon from "@mui/icons-material/Edit";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CustomTabs from "../../components/CustomTabs";
import { Logo } from "../../components/Logo";
import Layout from "../Layout";
import { sxStyles } from "./index.styles";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutUs = () => {
  const styles = sxStyles();
  const description =
    "Lorem Ipsum dolor sit amet, cosectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.";
  const [companyDescription, setCompanyDescription] = useState(description);
  const [showTextField, setShowTextField] = useState(false);
  const [isVerifiedClick, setIsVerifiedClick] = useState(false);

  return (
    <Layout>
      <Box id="main-container" sx={styles.mainContainer}>
        <Box sx={styles.aboutContents} id="about-contents">
          <Box id="title" ml={5}>
            <h2>About Us</h2>
          </Box>
          <Box id="company-details" sx={styles.companyDetails}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon
                  sx={{ color: isVerifiedClick ? "blue" : "black" }}
                />
                {!isVerifiedClick && (
                  <Typography
                    onClick={() => setIsVerifiedClick(true)}
                    sx={styles.verifyText}
                  >
                    Verify Company
                  </Typography>
                )}
              </Box>
            </Box>
            <Box id="description" sx={styles.description}>
              <Typography ml={3} color="#666666">
                {!showTextField && (
                  <>
                    {companyDescription}
                    <EditIcon
                      sx={{
                        color: "#E72D38",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowTextField(!showTextField)}
                    />
                  </>
                )}
              </Typography>
              {showTextField && (
                <>
                  <TextField
                    id="outlined-controlled"
                    label="Description"
                    value={companyDescription}
                    onChange={(event) => {
                      setCompanyDescription(event.target.value);
                    }}
                    sx={{
                      width: "100%",
                    }}
                  />
                  <SaveIcon
                    sx={{
                      color: "#E72D38",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowTextField(!showTextField)}
                  />
                </>
              )}
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
