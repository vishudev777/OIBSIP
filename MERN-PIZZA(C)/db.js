// const mongoose = require("mongoose");

// const mongoURL = 'mongodb+srv://firstuser:Phenomenon123@cluster0.m0mhk.mongodb.net/mern-pizza';

// mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

// let db = mongoose.connection;

// db.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

// db.on('error', (err) => {
//     console.error('Error connecting to MongoDB: ', err);
// });

// module.exports = mongoose;



const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://firstuser:Phenomenon123@cluster0.m0mhk.mongodb.net/mern-pizza';

mongoose.connect(mongoURL)
  .then(() => console.log('Connected to MongoDB for then catch'))
  .catch(err => console.error('Error connecting to MongoDB: ', err));

let db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB: ', err);
});

module.exports = mongoose;
