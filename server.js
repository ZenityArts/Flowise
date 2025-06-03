const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/getfile/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join('/mnt/data', filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found");
    }
    const content = fs.readFileSync(filePath, 'utf8');
    res.send(content);
});

module.exports = app;
