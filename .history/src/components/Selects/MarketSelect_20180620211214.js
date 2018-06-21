import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
  
  class MarketSelect extends React.Component {
    state = {
      age: '',
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Market</InputLabel>
            <Select
              value={this.state.area}
              onChange={this.handleChange}
              inputProps={{
                Market: 'area',
                id: 'age-simple',
              }}
            >
            
              <MenuItem value={Area'>Advertising</MenuItem>
              <MenuItem value={10}>Banking</MenuItem>
              <MenuItem value={30}>Design</MenuItem>
              <MenuItem value={30}>Entertainment</MenuItem>
              <MenuItem value={30}>Finance</MenuItem>
              <MenuItem value={30}>Healhtcare</MenuItem>
              <MenuItem value={30}>Legal</MenuItem>
              <MenuItem value={20}>Marketing</MenuItem>
              <MenuItem value={30}>Public Relations</MenuItem>
              <MenuItem value={30}>Retail</MenuItem>
         







            </Select>
          </FormControl>
          
      );
    }
  }
  
  MarketSelect.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MarketSelect);
  