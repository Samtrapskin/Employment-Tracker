import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

  class TextFields extends React.Component {
    state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    };
  
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
      
        <TextField
        id="multiline-static"
        label="Multiline"
        multiline
        rows="4"
        placeholder="Notes"
        className={classes.textField}
        margin="normal"
      />
      