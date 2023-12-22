const path = require('path');

const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

// /admin/products => GET
router.get('/admin/products', adminController.getProducts);


module.exports = router;