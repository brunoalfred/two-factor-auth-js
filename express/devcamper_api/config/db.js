const mongoose = require('mongoose');

const connectDB = () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

}