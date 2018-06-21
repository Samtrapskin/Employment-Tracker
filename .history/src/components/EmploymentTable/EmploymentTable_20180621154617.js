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
import TableSubmit from '../../components/Buttons/TableSubmit';




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
	  fontSize: 50,
	},
  }))(TableCell);
  
  const styles = theme => ({
	root: {
	  width: '1000%',
	  marginTop: theme.spacing.unit * 3,
	  overflowX: 'auto',
	},
	table: {
	  minWidth: 300,
	},
	row: {
	  '&:nth-of-type(odd)': {
		backgroundColor: theme.palette.background.default,
		margin: 16,
	  },
	},
	});
	



	

	class EmploymentTable extends Component {

		componentDidMount() {
			this.props.dispatch({ type: 'GET_APPLICATION' });
		}

		handleClick = () => {
			console.log('add expense', this.state);
			this.setState({
				actionType: 'add'
			});
			this.props.dispatch({
				type: 'ADD_APPLICATION',
				payload: this.state
			});
	
			
		};



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
								<CustomTableCell></CustomTableCell>



							</TableRow>
						</TableHead>
						<TableBody>
						
									<TableRow>
										
										<CustomTableCell><CompanyNameForm /></CustomTableCell>
										<CustomTableCell><MarketSelect /></CustomTableCell>
										<CustomTableCell><SimpleSelect /></CustomTableCell>
										<CustomTableCell><DateSelect /></CustomTableCell>
										<CustomTableCell><SimpleSelect /></CustomTableCell>
										<CustomTableCell><DateSelect /></CustomTableCell>
										<CustomTableCell><NotesSelect/></CustomTableCell>
										<CustomTableCell><TableSubmit onClick={this.handleClick} /></CustomTableCell>





									</TableRow>
								
						</TableBody>
					</Table>
				</Paper>

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
