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
              <TextField
                fullWidth
                label=""
                id="fullWidth"
                placeholder="eg. salesteam@br.in"
              />
              <Box sx={styles.addMoreButton}>
                <AddCircleOutlineIcon sx={{ color: "#E72D38" }} />
                <Typography color="#E72D38" ml={1} fontWeight={600}>
                  Add More
                </Typography>
              </Box>
            </Box>

            <Box mt={3}>
              <Typography fontWeight={600}>Contact Number</Typography>
              <TextField
                fullWidth
                label=""
                id="fullWidth"
                placeholder="eg. 8519701740"
              />
              <Box sx={styles.addMoreButton}>
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
            onClick={() => {}}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
