const express = require('express');
const router = express.Router();
const pickController = require('../main/pick/pick.controller');
const PickController = new pickController();

router.get('/picklist', PickController.getPickedList);
router.put('/:contentsId/pick', PickController.pickedContents);

module.exports = router;
