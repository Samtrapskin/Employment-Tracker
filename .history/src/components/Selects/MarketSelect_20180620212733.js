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
        <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="age-simple">Market Area</InputLabel>
        <Select
          value={this.state.name}
          onChange={this.handleChange}
          input={<Input name="name" id="name-disabled" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="hai">Hai</MenuItem>
          <MenuItem value="olivier">Olivier</MenuItem>
          <MenuItem value="kevin">Kevin</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
          
      );
    }}
  
  MarketSelect.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MarketSelect);
  