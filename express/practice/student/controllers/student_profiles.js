
// @ description     Get all Student  Profile
// @ Route           /api/vi/student_profiles
// @ access           Public

exports.getStudentProfiles = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: 'Show all Students'});
}

// @ description      Get a Single Student Profile
// @ Route            /api/v1/student_profiles/1
// @ access


exports.getStudentProfile = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: 'Show a Single Student'});


}


// @ description   Create a Student Profile
// @ Route         /api/v1/student_profile
// @ access        Private
exports.createStudentProfile = (req, res, next) => {
    res.st
}

