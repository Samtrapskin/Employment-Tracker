import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ButtonSizes(props) {
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

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableSubmit);
