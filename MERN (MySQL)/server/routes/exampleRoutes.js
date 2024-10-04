// routes/exampleRoutes.js
const express = require('express');
const router = express.Router();

const exampleController = require('../controllers/exampleController');

router.post('/', exampleController.createExample);
router.get('/', exampleController.getAllExamples);
router.get('/:id', exampleController.getExampleById);
router.put('/:id', exampleController.updateExample);
router.delete('/:id', exampleController.deleteExample);

module.exports = router;
