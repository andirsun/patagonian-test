const express = require('express');
const multer = require('multer');
const path = require('path');
const { carController } = require('../controllers');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../public/`);
  },
  filename: (req, file, cb) => {
    cb(null, `data.csv`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('file'), carController.upload);

module.exports = router;
