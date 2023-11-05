import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// pages import
import LoginLogout from "./UserHistoryPages/LoginLogout"
import ChangePassword from "./UserHistoryPages/ChangePassword"
import Profile from "./UserHistoryPages/Profile"
import Transaction from "./UserHistoryPages/Transaction"
import AccountStatus from "./UserHistoryPages/AccountStatus"
import HistoryNotification from "./UserHistoryPages/HistoryNotification"
import OrderPurchase from "./UserHistoryPages/OrderPurchase"
import DepositeWithdrawal from "./UserHistoryPages/DepositeWithdrawal"
import SupportEmailChat from "./UserHistoryPages/SupportEmailChat"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (

    <>
      <div className="history-wrapper">
        <div className="M-login-header">
          <h2>User History</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/User History</span>
          </div>
        </div>

        <div className="container-fluid white-bg bets-bg history-bg">
          <Box sx={{
            flexGrow: 1,
            maxWidth: { xs: 320, sm: 480 },
            bgcolor: 'background.paper',
          }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="inherit"
                textColor="primary"
                overflow="scroll"
                //   variant="fullWidth"
                varient="scrollable"
                scrollButtons
                //   aria-label="full width tabs example"
                aria-label="visible arrows tabs example"
                sx={{
                  backgroundColor: '#fff',
                  padding: 'inherit',
                  [`& .${tabsClasses.scrollButtons}`]: {
                    '&.Mui-disabled': { opacity: 0.3 },
                  },
                }}
              >
                <Tab label="Login & Logout" {...a11yProps(0)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Change Password" {...a11yProps(1)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Profile" {...a11yProps(2)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Transaction"  {...a11yProps(3)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Account Status"  {...a11yProps(4)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Notification"  {...a11yProps(5)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Order & Purchase" {...a11yProps(6)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Deposite & Withdrawal"  {...a11yProps(7)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
                <Tab label="Support/ Email/ Chat"  {...a11yProps(8)} sx={{ fontSize: "1.06rem", padding: "24px 6px", }} />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
              <LoginLogout />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ChangePassword />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <Transaction />
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <AccountStatus />
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              <HistoryNotification />
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              <OrderPurchase />
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              <DepositeWithdrawal />
            </TabPanel>
            <TabPanel value={value} index={8} dir={theme.direction}>
              <SupportEmailChat />
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}