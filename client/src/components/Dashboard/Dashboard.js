      
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Grid } from '@material-ui/core';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';    
import { getUsers } from '../../actions/auth';
import useStyles from './styles';


const Dashboard = () => {

  // const user = useSelector((state) => state.username);

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [user, dispatch]);
     
  return (
    <>
      <AppBar position="relative" className={classes.root}> 
            <Grid item xs={12} className={classes.form}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid> 
       </AppBar> 
      </>
 );

}

export default Dashboard;