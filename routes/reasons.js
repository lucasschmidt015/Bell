const express = require('express');

const reasonController = require('../controllers/reasons');

const router = express.Router();

router.get('/list_reasons', reasonController.listReasons);

router.get('/new_reason', reasonController.getNewReason);

router.post('/new_reason', reasonController.postNewReason);

router.get('/edit_reason', reasonController.getEditReason);

router.post('/edit_reason', reasonController.postEditReason);

router.post('/delete_reason', reasonController.deleteReason);

module.exports = router;