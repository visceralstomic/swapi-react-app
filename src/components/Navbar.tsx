import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {List, ListItemButton, ListItemIcon, ListItemText, Switch, useTheme} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AdbIcon from '@mui/icons-material/Adb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SnowmobileIcon from '@mui/icons-material/Snowmobile';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorModeContext } from "../App";



const ItemList = () => {
    return (
        <List>
        <ListItemButton
            sx={{
                borderRadius: "5px",
                mt: "5px"
            }} 
            component={Link} 
            to="/people">
            <ListItemIcon>
                <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="People" />
        </ListItemButton>

        <ListItemButton 
             sx={{
                borderRadius: "5px",
                mt: "5px"
            }} 
            component={Link} to="/planets">
            <ListItemIcon>
                <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="Planets" />
        </ListItemButton>

        <ListItemButton 
             sx={{
                borderRadius: "5px",
                mt: "5px"
            }} 
            component={Link} to="/films">
            <ListItemIcon>
                <LocalMoviesIcon />
            </ListItemIcon>
            <ListItemText primary="Films" />
        </ListItemButton>


        <ListItemButton 
             sx={{
                borderRadius: "5px",
                mt: "5px"
            }} 
            component={Link} to="/starships">
            <ListItemIcon>
                <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText primary="Starships" />
        </ListItemButton>

        <ListItemButton 
             sx={{
                borderRadius: "5px",
                mt: "5px"
            }} 
            component={Link} to="/vehicles">
            <ListItemIcon>
                <SnowmobileIcon />
            </ListItemIcon>
            <ListItemText primary="Vehicles" />
        </ListItemButton>

        <ListItemButton 
             sx={{
                borderRadius: "5px",
                mt: "5px"
            }} 
            component={Link} to="/species">
            <ListItemIcon>
                <AdbIcon />
            </ListItemIcon>
            <ListItemText primary="Species" />
        </ListItemButton>



    </List>
    )
}

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="long-menu">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <ItemList />
      </Menu>
    </div>
  );
}



const Navbar: React.FC = () => {
    const theme = useTheme();
    const colorContext = useContext(ColorModeContext);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        colorContext.toggleColorMode();
    }

    return (
        <div className="nav-container">
            <div className="nav-header">
                <div className="nav-logo">
                    <Link to="/">
                       Star <br /> Wars
                    </Link>
                </div>
            </div>
            <nav className="nav">
                <ItemList />
            </nav>

            <div className="nav-footer">
                <div className="nav-footer-container">
                    <div className="mode-icons">
                        <LightModeIcon className="moon-sun sun" />
                        <Brightness3Icon className="moon-sun moon"/>
                    </div>
                    <span className="color-text">
                        { theme.palette.mode === "light" ? "Light mode" : "Dark mode" }
                    </span>
                    <div className="switch-color">
                        <Switch
                            color="primary"
                            checked={theme.palette.mode === "dark" ? true : false}
                            onChange={handleColorChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                    <LongMenu />
                </div>
            </div>
        </div>
    )
}


export default Navbar;

