const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const carController = require('../controllers/car.controller');

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('data'), carController.upload);

module.exports = router;
