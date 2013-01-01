
var mysql = require('mysql'),
	TEST_DATABASE = 'nwp',
	TEST_TABLE = 'T_USER';

var client = mysql.createClient({
	host : 'localhost',
	port : 3306,
	user: 'oscar',
	password: '123456',
	database : TEST_DATABASE
});

client.query(
	'SELECT * FROM ' + TEST_TABLE,
	function selectCb(err, results, fields) {
		if (err) {
			throw err;
		}
		console.log(results);
		//console.log(fields);
		client.end();
	}
);
