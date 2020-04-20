const express = require('express');
const router = express.Router();


// Importing the controller methods for all routes
const {
    getStudentProfile,
    getStudentProfiles,
    createStudentProfile,
    updateStudentProfile,
    deleteStudentProfile,
} = require('../controllers/student_profiles');


//Routes with METHODS that dont involve :id parameter
router
    .route('/')
    .get(getStudentProfiles)
    .get(getStudentProfile);



//Routes with METHODS that do involve :id parameter
router
    .route('/:id')
    .post(createStudentProfile)
    .put(updateStudentProfile)
    .delete(deleteStudentProfile);































//
//
// router.get('/', (req, res) =>{
//
//     res
//         .status(200)
//         .json({success: true, msg: 'Show all Students'});
//
//
// } );
//
// router.get('/:id', (req, res) => {
//
//     res
//         .status(200)
//         .json({success: true, msg: `Show a Single Student with id ${req.params.id}`});
//
// });
//
// router.post('/', (req, res) => {
//     res
//         .status(200)
//         .json({success: true, msg: 'Create a Student'});
// });
//
// router.put('/:id', (req, res) => {
//     res
//         .status(200)
//         .json({success: true, msg: `Update a Student with id ${req.params.id}` });
// });
//
// router.delete('/:id', (req, res) => {
//     res
//         .status(200)
//         .json({success: true, msg: `Delete a Student with id ${req.params.id}`});
// })



module.exports = router;

