import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/Nav';

const mapStateToProps = (state) => ({
  user: state.user,
  reduxState: state.getEmployers
});

const React = require('react')
const ReactDOM = require('react-dom')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
const EditTable = require('material-ui-table-edit')
const container = document.createElement('div')


	class EmploymentTable extends Component {
		



		 
		
		 
		  render () {
			return (
			  <EditTable
				onChange={onChange}
				rows={rows}
				headerColumns={headers}
				enableDelete={true}
			  />
			)
		  }
		})
		 
		ReactDOM.render(
		  <Main />,
		  container
		)





export default connect(mapStateToProps)(EmploymentTable);
