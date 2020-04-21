const mongoose = require('mongoose');

const connectDB = () => {

    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: false
    });

}