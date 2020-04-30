const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

//method to connect to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/student',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
