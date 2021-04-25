const express = require('express');
const cors = require('cors');
// require routes only here
const authRouter = require('./components/auth/authRouter');

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());
app.use(cors());

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});
app.use('/auth', authRouter);

// exporting
module.exports = app;
