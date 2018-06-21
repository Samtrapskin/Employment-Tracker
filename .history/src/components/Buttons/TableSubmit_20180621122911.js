import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
  },
});




function TableSubmit(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button size="small" className={classes.button}>
          Submit
        </Button>
        </div>
    </div>
  );
}

TableSubmit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableSubmit);
