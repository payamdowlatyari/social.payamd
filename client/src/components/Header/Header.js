import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { AppBar, Typography, Toolbar} from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Typography from '@material-ui/core/Typography';
// import HomeIcon from '@material-ui/icons/Home';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';
// import { logout } from '../../actions/auth';

const Header = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();
  
    const logout = (() => {
      dispatch({ type: actionType.LOGOUT });
  
      navigate('/auth');
  
      setUser(null);
    }, []);
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, logout]);
  
    return (
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
            Social Blog
          {/* <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" />
          <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" /> */}
        </Link>
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
              <Typography className={classes.userName} variant="h6">{user?.result.firstname}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Link to="/auth" variant="contained" color="primary">Login</Link>
          )}
        </Toolbar>
      </AppBar>
    );
  };
//     const dispatch = useDispatch();
   
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = useState(null);
    
//     const users = useSelector((state) => state.auth);
//     console.log(users);

//     const handleClick = (e) => {
//         e.preventDefault();
//       setAnchorEl(e.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     const handleUsername = () => {
//        return localStorage.getItem('username');
//     };

//     return (
//         <nav className="navbar">
//             <div className="container-fluid">

//                 <Typography variant="h6">
//                     <Link className={classes.title} to="/"><HomeIcon/></Link>
//                 </Typography>

//                 <Button className={classes.menu}
//                 aria-controls="simple-menu"
//                 aria-haspopup="true" 
//                 onClick={handleClick}>
//                  {handleUsername()} <ArrowDropDownIcon/>
//                 </Button>

//                 <Menu id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//                 >
//                 <MenuItem onClick={handleClose}> 
//                    <Link className={classes.menuItem} to="/dashboard">Dashboard</Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                     <Link className={classes.menuItem} to="/signup">Sign Up</Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                     <Link className={classes.menuItem} to="/login">Login</Link>
//                 </MenuItem>
//                 <MenuItem onClick={() => dispatch(logout())}>
//                     <Link className={classes.menuItem} to="/logout">Logout</Link>
//                 </MenuItem>
//                 </Menu>

//             </div>
//         </nav>
//     );
//   }

export default Header;

