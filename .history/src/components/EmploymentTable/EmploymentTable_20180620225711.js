import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../../components/Nav/Nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SimpleSelect from '../../components/Selects/SimpleSelect';
import MarketSelect from '../../components/Selects/MarketSelect';
import NotesSelect from '../../components/Selects/NotesSelect';
import DateSelect from '../../components/Selects/DateSelect'
import CompanyNameForm from '../../components/InputForms/CompanyNameForm';



const mapStateToProps = (state) => ({
  user: state.user,
  reduxState: state.getEmployers
});

const CustomTableCell = withStyles(theme => ({
	head: {
	  backgroundColor: theme.palette.common.black,
	  color: theme.palette.common.white,
	},
	body: {
	  fontSize: 14,
	},
  }))(TableCell);
  
  const styles = theme => ({
	root: {
	  width: '100%',
	  marginTop: theme.spacing.unit * 3,
	  overflowX: 'auto',
	},
	table: {
	  minWidth: 700,
	},
	row: {
	  '&:nth-of-type(odd)': {
		backgroundColor: theme.palette.background.default,
	  },
	},
  });

	class EmploymentTable extends Component {
		render() {
			return (

			
			<div>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<CustomTableCell>Comany Name</CustomTableCell>
								<CustomTableCell>Market Area</CustomTableCell>
								<CustomTableCell>Applied ??</CustomTableCell>
								<CustomTableCell>Application Date</CustomTableCell>
								<CustomTableCell>Response Received ??</CustomTableCell>
								<CustomTableCell>Phone / Interview date</CustomTableCell>
								<CustomTableCell>Notes</CustomTableCell>


							</TableRow>
						</TableHead>
						<TableBody>
						
									<TableRow>
										
										<CustomTableCell><CompanyNameForm /></CustomTableCell>
										<CustomTableCell><MarketSelect /></CustomTableCell>
										<CustomTableCell><SimpleSelect /></CustomTableCell>
										<CustomTableCell><DatePicke
/></CustomTableCell>
										<CustomTableCell><SimpleSelect /></CustomTableCell>
										<CustomTableCell></CustomTableCell>
										<CustomTableCell><NotesSelect/></CustomTableCell>




									</TableRow>
								
						</TableBody>
					</Table>
				</Paper>
				<SimpleSelect />

			</div>

				
			
			);

			return (
				<div>
					
					<Nav />
				</div>
			);
		
	}
}

export default connect(mapStateToProps)(EmploymentTable);
