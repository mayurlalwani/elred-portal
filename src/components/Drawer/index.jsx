import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Box, Drawer, Grid, TextField, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../Card";
import PrimaryButton from "../Button";
import { sxStyles } from "./index.styles";
import { useAppState } from "../../store";

const CustomDrawer = ({ isDrawerOpen, toggleDrawer, showContactsInfo }) => {
  const styles = sxStyles();
  const [state, dispatch] = useAppState();

  const { emails, contacts } = state;
  const handleAddEmail = () => {
    let values = [...emails];
    values.push([]);
    dispatch({
      type: "changeState",
      data: {
        emails: values,
      },
    });
  };
  const handleAddContact = () => {
    let values = [...contacts];
    values.push([{}]);
    dispatch({
      type: "changeState",
      data: {
        contacts: values,
      },
    });
  };
  const handleChangeEmail = (e, index) => {
    const { value } = e.target;
    const list = [...emails];
    list[index] = value;
    dispatch({
      type: "changeState",
      data: {
        emails: list,
      },
    });
  };
  const handleChangeContact = (e, index) => {
    const { value } = e.target;
    const list = [...contacts];
    list[index] = value;
    dispatch({
      type: "changeState",
      data: {
        contacts: list,
      },
    });
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
          <Box
            sx={{
              display: "flex",
            }}
          >
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
              columnSpacing={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              <Grid item xs={12}>
                <Card
                  title="Sales Team"
                  icon={ContactPageIcon}
                  showContactsInfo={false}
                  showDeleteIcon={true}
                >
                  <Box>
                    <Box display="flex">
                      {emails.slice(0, 2).map((email) => (
                        <Typography fontSize="14px">
                          {email} {email === emails[0] ? "/" : ""}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ mt: 1, display: "flex" }}>
                      {contacts.slice(0, 2).map((contact) => (
                        <Typography fontSize="14px">
                          {contact} {contact === contacts[0] ? "/ " : " "}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
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
          <Box
            id="edit-contact"
            sx={{
              flexGrow: 1,
            }}
          >
            <Box sx={styles.editEmail}>
              <Typography fontWeight={600}>Email ID</Typography>
              {emails.map((email, index) => (
                <TextField
                  fullWidth
                  label=""
                  id="fullWidth"
                  placeholder="eg. salesteam@br.in"
                  sx={{
                    mt: 2,
                  }}
                  onChange={(e) => handleChangeEmail(e, index)}
                  value={email}
                />
              ))}

              <Box sx={styles.addMoreButton} onClick={handleAddEmail}>
                <AddCircleOutlineIcon
                  sx={{
                    color: "#E72D38",
                  }}
                />
                <Typography color="#E72D38" ml={1} fontWeight={600}>
                  Add More
                </Typography>
              </Box>
            </Box>

            <Box mt={3}>
              <Typography fontWeight={600}>Contact Number</Typography>
              {contacts.map((field) => (
                <TextField
                  fullWidth
                  label=""
                  id="fullWidth"
                  placeholder="eg. 8519701740"
                  sx={{
                    mt: 2,
                  }}
                  value={field}
                  onChange={(e) => handleChangeContact(e, index)}
                />
              ))}

              <Box sx={styles.addMoreButton} onClick={handleAddContact}>
                <AddCircleOutlineIcon
                  sx={{
                    color: "#E72D38",
                  }}
                />
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
