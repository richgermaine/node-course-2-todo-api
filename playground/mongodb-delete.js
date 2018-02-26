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
		
	// deleteMany
//	db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//		console.log(result);
//	});
	// deleteOne
//	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//		console.log(result);
//	});
	//findOneAndDelete
//	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//		console.log(result);
//	});

	//db.collection('Users').deleteMany({name: 'Rich'}).then((result) => {
	//	console.log(result);
	//});
	
	db.collection('Users').deleteOne({_id: new ObjectID('5a9363585dc4c0c3ea893299')}).then((result) => {
		console.log(result);
	});
//	client.close();
});