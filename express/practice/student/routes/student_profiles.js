const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    res.status(200).json({success: true, msg: 'Show all Students'});


} );

router.get('/:id', (req, res) => {

    res.status(200).json({success: true, msg: 'Show a Single Student'});

});

router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Create a Student'});
});

router.put('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Update a Student'});
});

router.delete('/', (req, res) => {
    res.status(200).json({sucess: true, msg: 'Delete a Student'});
})
module.exports = router;

