import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { login } from '../../actions/auth';

const Login = ({ currentId }) => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const user = useSelector((state) => (currentId ? state.user.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(login(userData));
      clear();
    } 
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

      <div className={classes.formGroup}>
        <TextField name="username" variant="outlined" label="Username" size="small" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        <TextField name="password" variant="outlined" label="Password" size="small" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      </div>
        <div className={classes.buttons}>
            <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit">Login</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Login;
