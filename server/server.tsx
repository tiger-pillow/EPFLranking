const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const mainRoutes = require('./routes/mainRoutes.tsx');

require('dotenv/config');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mainRoutes);

const PORT = process.env.PORT || 4000;

// DB connection
mongoose.connect(process.env.DB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});