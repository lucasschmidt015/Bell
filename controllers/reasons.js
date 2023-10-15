const Reason = require('../models/reason');

exports.listReasons = (req, res, next) => {

    Reason.find({ userId: req.user._id })
    .then(reasons => {
        res.render('reason/list_reason', {
            pageTitle: 'Reasons',
            path: '/reasons',
            reasons: reasons
        })
    })
    .catch(err => console.log(err));
}

exports.getNewReason = (req, res, next) => {
    res.render('reason/new_reason', {
        pageTitle: 'New Reason',
        path: '/new_reason',
    });
}

exports.postNewReason = (req, res, next) => {
    const reasonName = req.body.reason_name;
    const songUrl = req.body.songUrl;

    const newReason = new Reason({
        name: reasonName,
        songUrl: songUrl,
        userId: req.user,
    })
    newReason.save()
     .then(success => {
        res.redirect('/list_reasons');
     })
     .catch(err => console.log(err));
}

exports.callEditReason = (req, res, next) => {
    const reasonId = req.body.reason_id;

    Reason.findById(reasonId)
     .then(reasonDoc => {
        res.render('reason/edit_reason', {
            pageTitle: 'Editing Reason',
            path: '/new_reason',
            reason: reasonDoc
        })
     })
     .catch(err => console.log(err));
}

exports.postEditReason = (req, res, next) => {
    const reason_id = req.body._id;
    const reason_name = req.body.reason_name;
    const songUrl = req.body.songUrl;

    Reason.findById(reason_id)
     .then(reasonDoc => {
        reasonDoc.name = reason_name;
        reasonDoc.songUrl = songUrl;
        return reasonDoc.save();        
     })
     .then(success => {
        res.redirect('/list_reasons');
     })
     .catch(err => console.log(err));
}

exports.deleteReason = (req, res, next) => {
    const reasonId = req.body.reason_id;
    Reason.findByIdAndRemove(reasonId)
    .then(success => {
        res.redirect('/list_reasons');
    })
    .catch(err => console.log(err));
}
