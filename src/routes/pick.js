const express = require('express');
const router = express.Router();
const pickController = require('../main/pick/pick.controller.js');
const PickController = new pickController();
//

router.get('/picklist', PickController.getPickedList);
router.put('/:contentsId/pick', PickController.pickedMovies);

module.exports = router;
