import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../Card";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Grid } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);
  const [contactList, setContactList] = React.useState([]);

  const tabArray = [
    "Info",
    "FAQ",
    "Complaints and feedback",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabArray.map((item, index) => (
            <Tab
              sx={{ textTransform: "none" }}
              label={item}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <Grid container rowGap={2}>
            <Grid container spacing={2} rowGap={2}>
              <Grid item xs={4}>
                <Card
                  title="Contact"
                  icon={ContactPageIcon}
                  showContactsInfo={true}
                >
                  contents
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card title="Address" icon={ContactPageIcon}>
                  <Typography>C-1/351/4, GIDC Makarpura,</Typography>
                  <Typography>Vadodara - 390010,Gujarat, India</Typography>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card title="Hours of operations" icon={ContactPageIcon}>
                  <Typography>
                    Monday to Friday - 09:00 Am To 06:00 Pm
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card title="Social Media & Links" icon={ContactPageIcon}>
                  contents
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card title="Statement" icon={ContactPageIcon}>
                  <Typography>You think it, we ink it. </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
