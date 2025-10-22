//File: db.js in root directory

import myMongoose from 'mongoose';

// Saving my MongoDB URI
const mongoURL = 'mongodb://localhost:27017/myDBTest';

// Creating a function to connect to MongoDB
const connectToMongo = async () => {
    try {
        await myMongoose.connect(mongoURL);
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error('Error connecting to MongoDB:', e.message);
    }
};


export default connectToMongo;