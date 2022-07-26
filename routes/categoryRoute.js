const express = require('express');
const categoryContreller = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryContreller.createCategory); // http://localhost:3000/categories

module.exports = router;