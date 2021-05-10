const httpStatus = require('http-status');
const catchAsync = require('../utils/carchAsync');
const ApiError = require('../utils/ApiError');

const index = catchAsync(async (req, res) => {
  try {
    res.send({
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    });
  } catch (e) {
    throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, e);
  }
});

module.exports = {
  index,
};
