const catchAsync = require('../utils/carchAsync');
const { carService } = require('../services');

const upload = catchAsync(async (req, res) => {
  const response = await carService.loadData();
  res.send(response);
});

module.exports = {
  upload,
};
