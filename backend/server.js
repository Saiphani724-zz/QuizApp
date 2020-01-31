const express = require('express');

const app = express();
var cors = require('cors');
const port = 5000;

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

dbName = 'QuizAppDB'

app.use(cors());

app.get('/api', (req, res) => {
	console.log(req);
	const users = [
		{ username: 'Sai', password: '1919' },
		{ username: 'sachmo', password: 'sachipo' },
	]
	res.json(users);
})

app.get('/login', function (req, res) {
	let uname = (req.query.username);
	let password = (req.query.password);
	var userFound = false;
	MongoClient.connect(url, { useNewUrlParser: true },
		(err, client) => {
			if (err) {
				console.log('Unable to connect to db');
			}
			console.log('Connected correctly');
			const db = client.db(dbName);
			db.collection('users').findOne(
				{
					'username': uname.toLowerCase(),
					'password': password
				}
				, (err, user) => {
					if (err) {
						console.log("Error is", err);
						return;
					}
					// console.log(user);
					if (user === null);
					else
						userFound = true;
					// console.log(userFound);
					if (userFound)
						res.send({ "userFound": true })
					else
						res.send({ "userFound": false })
				})
		});
})

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})