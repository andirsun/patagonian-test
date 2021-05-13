const fs = require('fs');
const csv = require('csv-parser');
const { v4: uuidv4 } = require('uuid');
const { Car } = require('../models');

const loadData = async () => {
  const dataStream = fs.createReadStream(`${__dirname}/../public/data.csv`);
  dataStream.setEncoding('UTF8');
  // Handle Stream data with pipes to avoid node collapse memory leak
  dataStream
    .pipe(csv())
    .on('data', async (data) => {
      // Insert Car as a Sequelize Model into Sqlite DB
      await Car.create({
        UUID: uuidv4(),
        VIN: data.VIN,
        make: data.Make,
        model: data.Model,
        mileage: data.Mileage,
        year: data.Year,
        price: data.Price,
        zip_code: data.Zip_Code,
      });
    })
    .on('end', () => {
      // Return some reponse
      return { status: 'Ok' };
    });
};
module.exports = {
  loadData,
};
