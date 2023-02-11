import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Toolbar, Button, Menu, MenuItem} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import { useNavigate, Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';

const Header = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleClick = (e) => {
          e.preventDefault();
          setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
          setAnchorEl(null);
    };
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
      navigate(0);
      setUser(null);
    };
  
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [navigate]);
  
    return (
      <AppBar className={classes.appBar} position="sticky" color="inherit">
        <Link to="/" className={classes.brandContainer}>
        <HomeIcon/> 
        </Link>  
          {user?.result ? (
            <div className={classes.profile}>
               <Toolbar className={classes.toolbar}>
               <Button className={classes.menu}
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                <Typography variant="inherit">{user?.result.firstname}</Typography>
                <ArrowDropDownIcon /> 
                <PersonIcon/>
                </Button>
              <Menu id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                >
              <MenuItem>
              <Link className={classes.menuItem} onClick={logout}>Logout</Link>
              </MenuItem>
              </Menu>

              </Toolbar>

            </div>
          ) : (
              <Menu id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                >
                <MenuItem>
                    <Link className={classes.menuItem} to="/">Login</Link>
                </MenuItem>
              </Menu>
          )}
            
      </AppBar>
    );
  };

export default Header;

