import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/Nav';

const mapStateToProps = (state) => ({
  user: state.user,
  reduxState: state.getEmployers
});



	class EmploymentTable extends Component {
		







		
export default connect(mapStateToProps)(EmploymentTable);
