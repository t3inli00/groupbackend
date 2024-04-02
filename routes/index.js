const express = require('express');
const healthCheck = require('./healthCheckRoute');
const petCategory = require('./petCategoryRoute');

const router = express.Router();

router.use(healthCheck);
router.use(petCategory);

module.exports = router;

