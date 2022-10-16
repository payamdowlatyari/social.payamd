import React from 'react';
import useStyles from './styles';

const Footer = () => {

const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <span className="text-muted">
         Designed by <a href="https://www.payamd.com/" rel="noreferrer noopener" target="_blank">payamd.com</a>  &copy; 2022 
        </span>
    </footer >
  );
}

export default Footer;