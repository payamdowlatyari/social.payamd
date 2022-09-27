import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <AppBar className={classes.appBar} position="sticky">
           <Grid>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
      </AppBar>
      <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={1}>
            <Grid item xs={12} md={10} className={classes.postCard}>
              <Posts className={classes.postItem} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
      </Grow>
    </Container>
  );
};

export default App;
