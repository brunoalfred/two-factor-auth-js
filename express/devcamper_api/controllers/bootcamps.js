// @description  Get All Bootcamps
//  @route       GET /api/v1/bootcamps
//  @access      Public

exports.getBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Show all the Bootcamps' });
} 