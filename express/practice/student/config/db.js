const mongoose = require('mongoose');

//method to connect to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {useNewUrlParser: true}
        );
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB();
