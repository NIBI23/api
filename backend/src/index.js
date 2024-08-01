const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://mongodb:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

