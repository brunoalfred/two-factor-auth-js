// * Importing the Bootcamp model in the controller class
const Bootcamp = require('../models/Bootcamp');




//  @description  Get All Bootcamps
//  @route       GET /api/v1/bootcamps
//  @access      Public

exports.getBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: 'Show all the Bootcamps' });
}



// @description  Get Single Bootcamps
//  @route       GET /api/v1/bootcamps/:id
//  @access      Public

exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Get  bootcamp ${req.params.id}` });
}



// @description    Creating a new Bootcamp
//  @route         POST /api/v1/bootcamps
//  @access        Private

exports.createBootcamp = async (req, res, next) => {

    try {
        // ? creating a new value into the collection
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201)
            .json({ succes: true, data: bootcamp });
    } catch (error) {
        res.status(400)
            .json({success: false});
    }


}




//  @description    Update the Bootcamp
//  @route          PUT   /api/v1/bootcamps/:id
//  @access         Private

exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}



//  @description    Delete a Bootcamp
//  @route          DELETE   /api/v1/bootcamp/:id
//  @access         Private

exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ succes: true, msg: `Delete bootcamp with id ${req.params.id}` });
}



