const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },

    slug: String,
    description: {
        type: String,
        required: [false, 'Please add a name'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    phone: {
        type: String,
        maxlength: [120, 'Phone number cannot be longer than 20 character']
    },
     email: {
         type: String,
         match: [
             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
             'Please add a valid email'

         ]
     },
     address: {
         type: String,
         required: [false, 'Please add an address']          
     },
     location: {
        //  GeoJson  
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
     },

     careers: {
        //  Array of strings
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
     },
     averageRating: {
         type: Number,
         min: [1, 'Rating must be at least 1'],
         max: [10, 'Rating cannot be more than 10'],
     },
     averageCost: Number,
     photo: {
         type: String,
         default: 'no-photo.jpg'
     },
     housing: {
         type: Boolean,
         default: false
     },
     jobAssistance: {
         type: Boolean,
         default: false
     },
     jobGuarantee: {
         type: Boolean,
         default: false
     },
     acceptGi: {
         type: Boolean,
         default: false
     },
     createdAt: {
         type: Date,
         default: Date.now
     },

     

});


module.exports = mongoose.model('Bootcamp', BootcampSchema);