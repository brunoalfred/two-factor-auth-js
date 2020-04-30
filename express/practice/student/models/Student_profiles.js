const mongoose = require('mongoose');
const Student_profilesSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add the name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']

    }

});