// import external
const express = require('express');
const cors = require("cors");
require('dotenv').config();
const passport = require("passport");

// import interal
const db = require('./src/config/db');
const routes = require('./src/routes/routes');
const errorHandler = require("./src/middleware/errorsHandler");


// app and port declared
const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
require("./src/lib/passport")(passport);
app.use(passport.initialize());


app.get('/', (req, res) => {
  res.send('hi electronics server');
});

// routes
app.use('/api', routes);

// error handler
app.use(errorHandler);


app.listen(port, () => {
  console.log('listing the server port',)
});


