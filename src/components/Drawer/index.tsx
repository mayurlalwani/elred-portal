import ContactPageIcon from "@mui/icons-material/ContactPage";
import {
  Box,
  Button,
  Drawer,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../Card";
import PrimaryButton from "../Button";
import { sxStyles } from "./index.styles";
import { useState } from "react";

interface ICustomDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: any;
  showContactsInfo?: boolean;
}

const CustomDrawer = ({
  isDrawerOpen,
  toggleDrawer,
  showContactsInfo,
}: ICustomDrawerProps) => {
  const styles = sxStyles();
  const [emailFields, setEmailFields] = useState([{}]);
  const [contactFields, setContactFields] = useState([{}]);

  const handleAddEmail = () => {
    let values = [...emailFields];
    values.push([{}]);
    setEmailFields(values);
  };

  const handleAddContact = () => {
    let values = [...contactFields];
    values.push([{}]);
    setContactFields(values);
  };

  const handleChangeEmail = (e: any, index: number) => {
    const { name, value } = e.target;
    const list = [...emailFields];
    list[index] = value;
    setEmailFields(list);
  };

  const handleSaveContact = () => {};

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer("right", false)}
    >
      <Box sx={styles.drawerContainer} id="drawer-container">
        <Box>
          <Box sx={{ display: "flex" }}>
            <ArrowBackIcon />
            <h3>Contacts</h3>
          </Box>
          <Typography color="#666666" mt={2}>
            Please provide the company's email & contacts
          </Typography>
        </Box>
        {showContactsInfo ? (
          <Box sx={styles.contactListInfo}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Card
                  title="Sales Team"
                  icon={ContactPageIcon}
                  showContactsInfo={false}
                >
                  contents
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card
                  title="Marketing Team"
                  icon={ContactPageIcon}
                  showContactsInfo={false}
                >
                  contents
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card
                  title="Marketing Team"
                  icon={ContactPageIcon}
                  showContactsInfo={false}
                >
                  contents
                </Card>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box id="edit-contact" sx={{ flexGrow: 1 }}>
            <Box sx={styles.editEmail}>
              <Typography fontWeight={600}>Email ID</Typography>
              {emailFields.map((email, index) => (
                <TextField
                  fullWidth
                  label=""
                  id="fullWidth"
                  placeholder="eg. salesteam@br.in"
                  sx={{ mt: 2 }}
                  onChange={(e) => handleChangeEmail(e, index)}
                  value={email}
                />
              ))}

              <Box sx={styles.addMoreButton} onClick={handleAddEmail}>
                <AddCircleOutlineIcon sx={{ color: "#E72D38" }} />
                <Typography color="#E72D38" ml={1} fontWeight={600}>
                  Add More
                </Typography>
              </Box>
            </Box>

            <Box mt={3}>
              <Typography fontWeight={600}>Contact Number</Typography>
              {contactFields.map((field) => (
                <TextField
                  fullWidth
                  label=""
                  id="fullWidth"
                  placeholder="eg. 8519701740"
                  sx={{ mt: 2 }}
                />
              ))}

              <Box sx={styles.addMoreButton} onClick={handleAddContact}>
                <AddCircleOutlineIcon sx={{ color: "#E72D38" }} />
                <Typography color="#E72D38" ml={1} fontWeight={600}>
                  Add More
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        <Box id="button" sx={styles.saveButton}>
          <PrimaryButton
            backgroundColor="#BE212A"
            title="Save"
            width="100%"
            height="50px"
            borderRadius="10px"
            onClick={handleSaveContact}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
