const BellBeat = require('../models/bell_beat');
const Reason = require('../models/reason');

exports.getBellBeats = (req, res, next) => {
    BellBeat.find()
     .populate('reasonId')
     .then(bellBeatDocs => {
        res.render('bellBeat/list_bell_beat', {
            pageTitle: 'list_bell_beats',
            path: '/bell_beats',
            bellBeats: bellBeatDocs
        });
     })
     .catch(err => console.log(err));
}

exports.getBellBeat = (req, res, next) => {
    Reason.find()
    .then(reasonsDoc => {
        res.render('bellBeat/new_bell_beat', {
            pageTitle: 'New Bell Beat',
            path: '/new_bell_beat',
            reasons: reasonsDoc
        });
    })
    .catch(err => console.log(err));
}

exports.postBellBeat = (req, res, next) => {
    const reasonId = req.body.reason;
    const description = req.body.description;

    if (reasonId !== '123') {
        const newBellBeat = new BellBeat({
            reasonId: reasonId,
            description: description,
            userId: req.user
        })
        newBellBeat.save()
         .then(success => {
            return res.redirect('/bell_beats');
         })
         .catch(err => console.log(err));
    }
}

exports.getEditBellBeat = (req, res, next) => {

}

exports.postEditBellBeat = (req, res, next) => {

}

exports.postDeleteBellBeat = (req, res, next) => {

}