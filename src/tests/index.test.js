const supertest = require('supertest');
const fs = require('fs');
const csv = require('csv-parser');
const app = require('../index');
const { Car } = require('../models');

const request = supertest(app);

it('Testing the backend health endpoint', async (done) => {
  const res = await request.get('/health');
  // Jest validations
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('OK');
  expect(typeof res.body.timestamp).toBe('number');
  done();
});

describe('Test /cars upload test data set and then check if exists data in DB', () => {
  const filePath = `${__dirname}/data-set-test.csv`;

  it('First step upload file', async (done) => {
    fs.readFile(filePath, async (err, data) => {
      if (err) throw new Error('File not found');

      const response = await request.post('/cars').attach('file', data);
      expect(response.body.status).toBe('Ok');
      done();
    });
  });

  it('Second Step, check data in Database', async (done) => {
    const filePathServer = `${__dirname}/data-set-test.csv`;

    const dataStream = fs.createReadStream(filePathServer);
    dataStream.setEncoding('UTF8');
    dataStream
      .pipe(csv())
      .on('data', async (data) => {
        // Search for inser car with VIN unique id
        const car = await Car.findOne({
          where: {
            VIN: data.VIN,
          },
        });

        // High level type testing
        expect(typeof car).toBe('object');
      })
      .on('end', () => {
        done();
      });
  });
});
