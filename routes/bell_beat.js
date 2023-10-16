const express = require('express');

const bellBeatController = require('../controllers/bell_beat');

const router = express.Router();

router.get('/bell_beat', bellBeatController.getBellBeat)

router.post('/bell_beat', bellBeatController.postBellBeat);

router.get('/bell_beats', bellBeatController.getBellBeats);

router.post('/call_edit_bell_beat', bellBeatController.getEditBellBeat);

router.post('/edit_bell_beat', bellBeatController.postEditBellBeat);

router.post('/delete_bell_beat', bellBeatController.postDeleteBellBeat);

module.exports = router;