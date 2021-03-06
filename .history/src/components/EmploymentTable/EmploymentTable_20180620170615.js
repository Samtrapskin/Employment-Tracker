import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/Nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const mapStateToProps = (state) => ({
  user: state.user,
  reduxState: state.getEmployers
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
										
										<CustomTableCell></CustomTableCell>
										<CustomTableCell></CustomTableCell>
										<CustomTableCell></CustomTableCell>
										<CustomTableCell></CustomTableCell>
										<CustomTableCell></CustomTableCell>
										<CustomTableCell></CustomTableCell>
										<CustomTableCell></CustomTableCell>




									</TableRow>
								
						</TableBody>
					</Table>
				</Paper>
				<InputForm />
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
