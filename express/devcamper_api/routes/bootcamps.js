const express = require('express');
const router = express.Router();

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps');


// For the methods with no id required
router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp);



//  For methods that require id
router
    .route('/id')
    .get(getBootcamp)
    .put(createBootcamp)
    .delete(deleteBootcamp);


    































































// router.get('/', (req, res) => {
//     res
//         .status(200)
//         .json({ success: true, msg: 'Show all the Bootcamps' });
// });

// router.get('/:id', (req, res) => {
//     res
//         .status(200)
//         .json({ success: true, msg: `Get  bootcamp ${req.params.id}` });
// });

// router.post('/', (req, res) => {
//     res
//         .status(200)
//         .json({ success: true, msg: 'Create a new Bootcamps ' })
// });

// router.put('/:id', (req, res) => {
//     res
//         .status(200)
//         .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
// });

// router.delete('/:id', (req, res) => {
//     res
//         .status(200)
//         .json({ success: true, msg: `Delete a bootcamp with id: ${req.params.id}` })
// });

module.exports = router;