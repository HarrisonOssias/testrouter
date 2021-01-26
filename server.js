const express = require('express');

const server = express();

const path = require('path');

const bodyParser = require('body-parser');

server.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

server.use(bodyParser.urlencoded({ extended: false }));

server.post('/name', function (req, res) {
	const name = req.body.name;
	res.send('hello ' + name);
});

server.listen(3001);

console.log('server running');
