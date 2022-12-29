const express = require('express');
const router = express.Router();
const pickController = require('../main/pick/pick.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const PickController = new pickController();

router.get('/picklist', authMiddleware, PickController.getPickedList);
router.put('/:contentsId/pick', authMiddleware, PickController.pickedContents);

module.exports = router;
