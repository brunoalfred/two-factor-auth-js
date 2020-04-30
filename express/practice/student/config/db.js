const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

//method to connect to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`MongoDB connected: mongodb://${conn.connection.host}:${conn.connection.port}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
