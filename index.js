// import external
const express = require('express');
const cors = require("cors");
require('dotenv').config();

// import interal
const db = require('./src/config/db');
const routes = require('./src/routes/routes');


// app and port declared
const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi electronics server');
});

// routes
app.use('/api', routes);


app.listen(port, () => {
  console.log('listing the server port',)
});


