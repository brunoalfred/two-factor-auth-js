
// @ description     Get all Student  Profile
// @ Route           /api/vi/student_profiles
// @ access           Public

exports.getStudentProfiles = (req, res, next) => {
    console.log(req.body);
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
        .json({success: true, msg: `Show a Single Student with id ${req.params.id}`});


}


// @ description   Create a Student Profile
// @ Route         /api/v1/student_profiles
// @ access        Private
exports.createStudentProfile = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: 'Create a Single Student'});
}

// @ description    Update the Student's Profile
// @ Route          /api/v1/student_profiles/:id
// @ access         Private

exports.updateStudentProfile = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: 'Update a Single Student'});
}


// @ description    Delete the Student's Profile
// @ Route          /api/v1/student_profile/:id
// @ access         Private

exports.deleteStudentProfile = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: `Deleted Student with id ${req.params.id}`});
}