const express = require('express');

const app = express();
var cors = require('cors');
const port = 5000;

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

dbName = 'QuizAppDB'

app.use(cors());


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
				}
				, (err, user) => {
					if (err) {
						console.log("Error is", err);
						return;
					}
					// console.log(user);
					if (user === null);
					else if (user.personalInfo.password === password)
						userFound = true;
					// console.log(userFound);
					if (userFound)
						res.send({ "userFound": true })
					else
						res.send({ "userFound": false })
				})
		});
})

app.get('/register', function (req, res) {
	reqBody = req.query
	reqBody.username = reqBody.username.toLowerCase()

	userData = {
		username: reqBody.username,
		personalInfo: {
			password: reqBody.password,
			email: reqBody.email,
			mobile: reqBody.mobile,
			rollNo: reqBody.rollNo
		},
		QuizInfo: {}
	}


	MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
		if (err) {
			console.log('Unable to connect to db');
			return;
		}
		console.log('Connected correctly');
		const db = client.db(dbName);

		db.collection('users').findOne(
			{ 'username': userData.username }
			, (err, user) => {
				if (err) {
					console.log("Error is", err);
					return;
				}
				if (user === null) {
					db.collection('users').insertOne(userData)
					console.log("Inserted");

					res.send({ isRegisterSuccess: true })
				}
				else {
					console.log("Not Inserted");
					res.send({ isRegisterSuccess: false })
				}
			})
	})

})


app.get('/getQuizes', function (req, res) {
	MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
		if (err)
			console.log(err);
		else {
			const db = client.db(dbName);
			var myCursor = db.collection('quizes').find(
				{prvQuiz : req.query.prvQuiz == 'true'}
				);
			let arr = [];
			let i = 0;
			myCursor.forEach(function (data) {
				data.flag = i;
				i = (i + 1) % 2;
				arr.push(data);
			}, function () {
				// console.log(arr);
				res.send(arr);
			});
		}
	});
})

app.get('/getQuiz', function (req, res) {
	console.log(req.query.quizCode);
	
	MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
		if (err)
			console.log(err);
		else {
			const db = client.db(dbName);
			db.collection('quizes').findOne(
				{quizCode : req.query.quizCode },
				(err,data) =>{
					res.send(data);
				}
			);
		}
	});
})


app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})