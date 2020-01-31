const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

dbName = 'QuizAppDB'

MongoClient.connect(url, { useNewUrlParser: true },
	(err, client) => {
		if (err) {
			console.log('Unable to connect to db');
		}
		// console.log('Connected correctly');
		const db = client.db(dbName);
		db.collection('users').findOne({
			'username': "sai",
			'password': "191219"
		}, (err, user) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log(user);

			}
		});
	}
);