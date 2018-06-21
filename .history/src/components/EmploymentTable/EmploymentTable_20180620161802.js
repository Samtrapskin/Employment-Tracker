import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/Nav';
import injectTapEventPlugin

injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const mapStateToProps = (state) => ({
  user: state.user,
  reduxState: state.getEmployers
});

const ReactDOM = require('react-dom')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
const EditTable = require('material-ui-table-edit')
const container = document.createElement('div')

document.body.appendChild(container)
		const headers = [
		  {value: 'Name', type: 'TextField', width: 200},
		  {value: 'Address', type: 'TextField', width: 200},
		  {value: 'Phone', type: 'TextField', width: 200},
		  {value: 'Date', type: 'DatePicker', width: 200},
		  {value: 'Enabled', type: 'Toggle', width: 50},
		  {value: 'Last Edited By', type: 'ReadOnly', width: 100}
		]
		 
		const rows = [];
		 
		const onChange = (row) => {
		  console.log(row)
		}
		 
		const Main = React.createClass({
		  getChildContext () {
			return {muiTheme: getMuiTheme(baseTheme)}
		  }
		});
		 
		  
	class EmploymentTable extends Component {
		
		childContextTypes: {
			muiTheme: React.PropTypes.object.isRequired
		  };

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
	}
		 
	
	




export default connect(mapStateToProps)(EmploymentTable);
