const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const httpStatus = require('http-status');
const passport = require('passport');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const baseRoutes = require('./routes');
const { errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/', baseRoutes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorHandler);

module.exports = app;
