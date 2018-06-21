import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });
  
  class SimpleSelect extends React.Component {
    state = {
      age: '',
      name: 'hai',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      render() {
        const { classes } = this.props;
    
       
            return (
                <form className={classes.root} autoComplete="off">
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </form>
            );
  }
}