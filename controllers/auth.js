const isAuthenticated = false;


exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuth: isAuthenticated
    });
}

exports.postLogin = (req, res, next) => {

}

exports.getSignUp = (req, res, next) => {
    res.render('auth/signup', {
        pageTitle: 'Signup',
        path: '/signup',
        isAuth: isAuthenticated
    })
}

exports.postSignUp = (req, res, next) => {

}

exports.signOut = (req, res, next) => {

}