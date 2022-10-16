import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../Login/styles';
import { signup } from '../../actions/auth';

const SignUp = ({ currentId }) => {
  const [userData, setUserData] = useState({ username: '', password: '', firstname: '', lastname: '' });
  const user = useSelector((state) => (currentId ? state.user.find((user) => user._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const clear = () => {
    setUserData({ username: '', password: '', firstname: '', lastname: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentId) {
      dispatch(signup(userData));
      clear();
    } 
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

      <div className={classes.formGroup}>
        <TextField name="firstname" variant="standard" label="First Name" size="small" value={userData.firstname} onChange={(e) => setUserData({ ...userData, firstname: e.target.value })} />
        <TextField name="lastname" variant="standard" label="Last Name" size="small" value={userData.lastname} onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} />
        <TextField name="username" variant="standard" label="Username" size="small" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        <TextField name="password" variant="standard" label="Password" size="small" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      </div>
        <div className={classes.buttons}>
            <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit">Sign Up</Button>
        </div>
      </form>
    </Paper>
  );
};

export default SignUp;
