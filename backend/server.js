const express = require('express');

const app = express();
var cors = require('cors');
const port = 5000;

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
	const users =  {'sai': '1919', 'sachmo':'sachipo'}
	
	if (users[uname.trim().toLowerCase()] === password) 
		res.send({"userFound" : true})
	else
		res.send({"userFound" : false})
})



app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})