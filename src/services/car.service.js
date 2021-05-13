const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const streamCsv = require('../utils/streamCsv');

const loadData = async () => {
  try {
    await streamCsv.loadData();
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error loading data to DB');
  }

  return { status: 'Ok' };
};

module.exports = {
  loadData,
};
