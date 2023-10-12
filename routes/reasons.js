const express = require('express');

const reasonController = require('../controllers/reasons');

const router = express.Router();

router.get('/list_reasons', reasonController.listReasons);

router.post('/new_reason', reasonController.newReason);

router.get('/edit_reason', reasonController.getEditReason);

router.post('/edit_reason', reasonController.postEditReason);

router.post('/delete_reason', reasonController.deleteReason);

module.exports = router;