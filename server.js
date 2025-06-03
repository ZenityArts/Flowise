const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/getfile/:filename', (req, res) => {
  const filePath = `/mnt/data/${req.params.filename}`;
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
