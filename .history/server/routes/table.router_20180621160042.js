const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//  GET route template
 router.get('/', (req, res, next) => {
	let queryText = `SELECT * FROM companies ORDER BY purchase_date DESC;`;
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
});

/**
 * POST route template
 */
router.post('/', (req, res, next) => {
	console.log('POST Route');
	console.log(req.body);
		const queryText = `INSERT INTO companies ("company_name", "market", "application_status", "application_date", "response_received", "phone_interview_date", "notes") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
		pool.query(queryText, [ req.body.company_name, req.body.market, req.body.application_status, req.body.application_date, req.body.response_received, req.body.phone_interview_date, req.body.notes])
			.then((result) => {
				res.sendStatus(201);
			})
			.catch((err) => {
				console.log(err);
				res.sendStatus(500);
			});
	 {
		res.sendStatus(403);
	}
});


module.exports = router;


