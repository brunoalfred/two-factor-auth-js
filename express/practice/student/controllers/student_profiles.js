
// @ description     Get all Student
// @ Route           /api/vi/student_profiles
// @ access           Public

exports.getStudentProfiles = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: 'Show all Students'});
}

exports.getStudentProfile = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: 'Show a Single Student'});


}

