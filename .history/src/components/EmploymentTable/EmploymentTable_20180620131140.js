import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/Nav';
import InputForm from '../../components/InputForm/InputForm';
import { withStyles } from '@material-ui/core/styles';
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

const CustomTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const styles = (theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default
		}
	}
});



	let id = 0;
	function createData(name, calories, fat, carbs, protein) {
		id += 1;
		return { id, name, calories, fat, carbs, protein };
	}

	const data = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9)
	];

	class EmploymentTable extends Component {
		render() {
			return (

				<ImpurtForm />
				
				<Paper className>
					<Table className>
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
							{data.map((n) => {
								return (
									<TableRow className key={n.id}>
										
										<CustomTableCell numeric>{n.calories}</CustomTableCell>
										<CustomTableCell numeric>{n.fat}</CustomTableCell>
										<CustomTableCell numeric>{n.carbs}</CustomTableCell>
										<CustomTableCell numeric>{n.protein}</CustomTableCell>
										<CustomTableCell numeric>{n.protein}</CustomTableCell>
										<CustomTableCell numeric>{n.protein}</CustomTableCell>
										<CustomTableCell numeric>{n.protein}</CustomTableCell>




									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
				

				
			
			);

			return (
				<div>
					
					<Nav />
				</div>
			);
		
	}
}

export default connect(mapStateToProps)(EmploymentTable);
