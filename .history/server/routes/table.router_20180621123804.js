const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */


router.post('/', (req, res, next) => {
	console.log('POST Route');
	console.log(req.body);
	if (req.isAuthenticated()) {
		const queryText = `INSERT INTO items ("item_description", "purchase_date", "item_price", "item_link") VALUES ($1, $2, $3, $4);`;
		pool
			.query(queryText, [ req.body.item_description, req.body.purchase_date, req.body.item_price, req.body.item_link])
			.then((result) => {
				res.sendStatus(201);
			})
			.catch((err) => {
				console.log(err);
				res.sendStatus(500);
			});
	} else {
		res.sendStatus(403);
	}
});

module.exports = router;