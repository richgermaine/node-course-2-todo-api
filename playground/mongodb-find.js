//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
		
//	db.collection('Todos').find({
//		_id: new ObjectID('5a92eb215dc4c0c3ea890dd2')
//		}).toArray().then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, (err) => {
//		console.log('Unable to fetch todos', err);
//	});
	
	db.collection('Users').find().count().then((count) => {
		console.log(`Users count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch users', err);
	});
	
	db.collection('Users').find({
		name: "Rich"
	}).toArray().then((docs) => {
		console.log(docs);
	}, (err) => {
		console.log('Unable to fetch users', err);
	});
//	client.close();
});