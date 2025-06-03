const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/getfile/:filename', (req, res) => {
  const file = path.join('/mnt/data/strokes/', req.params.filename);
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.send(data);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Zenity Stroke File Server is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
