import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../Card";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Grid } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import LinkIcon from "@mui/icons-material/Link";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { sxStyles } from "./index.styles";
import { useAppState } from "../../store";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        height: "100%",
      }}
      {...other}
    >
      {value === index && (
        <Box
          id="tab-box"
          sx={{
            p: 3,
            height: "100%",
          }}
        >
          <Typography
            sx={{
              height: "100%",
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function CustomTabs() {
  const [value, setValue] = React.useState(0);
  const styles = sxStyles();
  const [state, dispatch] = useAppState();
  const { emails, contacts } = state;
  const tabArray = [
    "Info",
    "FAQ",
    "Complaints and feedback",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabArray.map((item, index) => (
            <Tab
              sx={{
                textTransform: "none",
              }}
              label={item}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          height: "90%",
        }}
      >
        <TabPanel value={value} index={0}>
          <Grid
            container
            rowGap={2}
            sx={{
              height: "100%",
            }}
          >
            <Grid container spacing={2} rowGap={2}>
              <Grid item xs={4}>
                <Card
                  title="Contact"
                  icon={ContactPageIcon}
                  showContactsInfo={true}
                >
                  <Box>
                    <Box>
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
                  <Box sx={styles.count}>
                    +
                    {emails.length > 2 && emails.slice(2, emails.length).length}
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card title="Address" icon={RoomIcon}>
                  <Typography>C-1/351/4, GIDC Makarpura,</Typography>
                  <Typography>Vadodara - 390010,Gujarat, India</Typography>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card title="Hours of operations" icon={PunchClockIcon}>
                  <Typography>
                    Monday to Friday - 09:00 Am To 06:00 Pm
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card title="Social Media & Links" icon={LinkIcon}>
                  contents
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card title="Statement" icon={FormatQuoteIcon}>
                  <Typography>You think it, we ink it. </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
