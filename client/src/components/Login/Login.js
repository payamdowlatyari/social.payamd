import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
// import { login } from '../../actions/auth';

const Login = ({ currentId }) => {
  const [userData, setUserData] = useState({ username: '', password: '' });
 
  const dispatch = useDispatch();
  const classes = useStyles();
  // const navigate = useNavigate();

  useEffect(() => {
    if (userData) setUserData(userData);
  }, [userData, dispatch]);

  const clear = () => {
    setUserData({ username: '', password: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentId) {
      // dispatch(login(userData, navigate));
      clear();
    } 
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <div className={classes.formGroup}>
        <TextField name="username" variant="standard" label="Username" size="small" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        <TextField name="password" variant="standard" label="Password" size="small" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      </div>
        <div className={classes.buttons}>
            <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit">Login</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Login;
