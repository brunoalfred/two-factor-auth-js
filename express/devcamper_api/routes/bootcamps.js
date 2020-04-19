
app.get('/api/v1/bootcamps', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: 'Show all the Bootcamps' })
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Get  bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: 'Create a new Bootcamps ' })
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete a bootcamp with id: ${req.params.id}` })
});

