const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
    });
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email})
    .then(userDoc => {

        if (!userDoc) {
            return res.redirect('/login');
        }

        bcrypt.compare(password, userDoc.password)
        .then(doMath => {
            if (doMath) {
                req.session.isLoggedIn = true;
                req.session.user = userDoc;
                return req.session.save(err => {
                    res.redirect('/');
                })
            }
            //Password wrong
            res.redirect('/login');
        })

    })
    .catch(err => console.log(err));

}

exports.getSignUp = (req, res, next) => {
    res.render('auth/signup', {
        pageTitle: 'Signup',
        path: '/signup',
    })
}

exports.postSignUp = (req, res, next) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userConfirmPassword = req.body.confirmPassword;

    User.findOne({ email: userEmail })
    .then(userDoc => {

        if (userDoc) {
            return res.redirect('/signup');
        }

        return bcrypt.hash(userPassword, 12)
            .then(incryptPassword => {
                const newUser = new User({
                    email: userEmail,
                    password: incryptPassword
                });
                return newUser.save();
            })
            .then(response => {
                res.redirect('/login');
            })
    })
    .catch(err => console.log(err));
}

exports.signOut = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/login');
    })
    
}