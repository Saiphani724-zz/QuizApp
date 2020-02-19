var exports=module.exports={};


exports .Add = function(a,b)
{
	console.log(a+b);
	
  return a+b;
}

exports .Login = function(username,password)
{
	const express = require('express');

	const app = express();
	var cors = require('cors');
	const port = 5000;

	const MongoClient = require('mongodb').MongoClient;

	const url = 'mongodb://127.0.0.1:27017';

	dbName = 'QuizAppDB'

	app.use(cors());
	var userFound = false;
	// console.log(username,password);
	
	// return true;
	MongoClient.connect(url, { useNewUrlParser: true },
		(err, client) => {
			if (err) {
				console.log('Unable to connect to db');
			}
			console.log('Connected correctly');
			const db = client.db(dbName);
			// db.collection('users').findOne(
			// 	{
			// 		'username': uname.toLowerCase(),
			// 	}
			// 	, (err, user) => {
			// 		if (err) {
			// 			console.log("Error is", err);
			// 			return;
			// 		}
			// 		// console.log(user);
			// 		if (user === null);
			// 		else if (user.personalInfo.password === password)
			// 			userFound = true;
			// 		// console.log(userFound);
			// 		if (userFound)
			// 			return true
			// 		else
			// 			return false
			// 	})
			return true;
		});
}