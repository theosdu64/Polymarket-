import * as React from "react";
import "./BurgerMenu.css";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Home from "@mui/icons-material/Home";
import Switch from "@mui/material/Switch";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Info from "@mui/icons-material/Info";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        id="burger-menu"
        color="inherit"
        aria-label="open navigation menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "background.default",
              color: "text.primary",
              mt: 1,
              minWidth: 250,
              borderRadius: 3,
              "& .MuiMenuItem-root": {
                fontWeight: 600,
              },
            },
          },
        }}
        disableAutoFocusItem
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EmojiEventsIcon fontSize="medium" htmlColor="#ffb700" />
          </ListItemIcon>
          Leaderboards
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MonetizationOnIcon fontSize="small" htmlColor="#379c65" />
          </ListItemIcon>
          Rewards
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectricalServicesIcon fontSize="small" htmlColor="#c03065" />
          </ListItemIcon>
          APIs
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DarkModeIcon fontSize="small" htmlColor="#2f63dd" />
          </ListItemIcon>
          Dark mode
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            "& p": {
              fontWeight: 600,
              color: "#8093a8", // ← couleur spécifique
              margin: 0,
            },
          }}
        >
          <p>Accuracy</p>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            "& p": {
              fontWeight: 600,
              color: "#8093a8",
              margin: 0,
            },
          }}
        >
          <p>Support</p>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            "& p": {
              fontWeight: 600,
              color: "#8093a8",
              margin: 0,
            },
          }}
        >
          <p>Documentation</p>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            "& p": {
              fontWeight: 600,
              color: "#8093a8",
              margin: 0,
            },
          }}
        >
          <p>Terms of Use</p>
        </MenuItem>
      </Menu>
    </>
  );
}
