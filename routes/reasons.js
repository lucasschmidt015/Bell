const express = require('express');

const reasonController = require('../controllers/reasons');

const router = express.Router();

router.get('/list_reasons', reasonController.listReasons);

router.get('/new_reason', reasonController.getNewReason);

router.post('/new_reason', reasonController.postNewReason);

router.post('/call_edit_reason', reasonController.callEditReason);

router.post('/edit_reason', reasonController.postEditReason);

router.post('/delete_reason', reasonController.deleteReason);

module.exports = router;