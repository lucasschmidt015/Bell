const express = require('express');

const bellBeatController = require('../controllers/bell_beat');

const router = express.Router();

router.get('/bell_beats', bellBeatController.getBellBeat)

router.post('/bell_beat', bellBeatController.postBellBeat);

router.get('/edit_bell_beat', bellBeatController.getEditBellBeat);

router.post('/edit_bell_beat', bellBeatController.postEditBellBeat);

module.exports = router;