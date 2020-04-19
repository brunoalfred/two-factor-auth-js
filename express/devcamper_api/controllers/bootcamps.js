// @description  Get All Bootcamps
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