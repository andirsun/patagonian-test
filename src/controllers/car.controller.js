const httpStatus = require('http-status');
const catchAsync = require('../utils/carchAsync');
const ApiError = require('../utils/ApiError');

const upload = catchAsync(async (req, res) => {
  console.log(req.file);
  // try {
  //   res.send({
  //     uptime: process.uptime(),
  //     message: 'OK',
  //     timestamp: Date.now(),
  //   });
  // } catch (e) {
  // }
  // throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, e);
});

module.exports = {
  upload,
};
