const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    res
        .status(200)
        .json({success: true, msg: 'Show all Students'});


} );

router.get('/:id', (req, res) => {

    res
        .status(200)
        .json({success: true, msg: `Show a Single Student with id ${req.params.id}`});

});

router.post('/', (req, res) => {
    res
        .status(200)
        .json({success: true, msg: 'Create a Student'});
});

router.put('/:id', (req, res) => {
    res
        .status(200)
        .json({success: true, msg: `Update a Student with id ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res
        .status(200)
        .json({success: true, msg: `Delete a Student with id ${req.params.id}`});
})



module.exports = router;
