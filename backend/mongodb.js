const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

dbName = 'QuizAppDB'

MongoClient.connect(url, {useNewUrlParser : true}, 
	(err,client)=>{
		if(err){
			console.log('Unable to connect to db');
		}
		// console.log('Connected correctly');
		const db = client.db(dbName);
		db.collection('users').insertOne({
			username : 'sachmo',
			password: 'sachipo',
			email : 'tsachmo1999@gmail.com',
			rollNo : 'cb.en.u4cse17141',
			mobile : '1234566784'
		})
	}
);