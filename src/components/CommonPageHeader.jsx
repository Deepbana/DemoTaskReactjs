import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import proimage from "../assets/images/proimage.png";

export default function CommonPageHeader(props) {
  const { selectedOption } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  const optionText = {
    1: "Dashboard",
    2: "Order",
    3: "Customers",
    4: "Inventory",
    5: "Conversation",
    6: "Setting",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: { sm: 'block' } }}>
            {/* {selectedOption == 1 ? "Dashboard" : "Order"} */}
            {optionText[selectedOption] || "Default"}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{alignItems: "center"}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" className='profile-dropdown' style={{background: "#FEF5EA",
    borderRadius: "5px",
    height: "30px"}}>
              <span style={{ fontSize: "14px" }}>Nanny’s Shop</span>
              <ExpandMoreIcon />
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <NotificationsIcon style={{ color: "#5570f1" }} />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src={proimage} width={25} height={25} alt="Profile" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
