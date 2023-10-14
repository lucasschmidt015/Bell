//Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');

//Routes
const authRouter = require('./routes/auth');
const bellBeatRouter = require('./routes/bell_beat');
const reasonsRouter = require('./routes/reasons');

//Controllers
const homeController = require('./controllers/home');
const _404Controller = require('./controllers/error');

//Models
const User = require('./models/user');

const { parsed: { MONGODB_URI } } = require('dotenv').config();

const app = express();

const store = MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        secret: 'Your-secret-key',
        resave: false,
        saveUninitialized: false,
        store: store
    })
)

app.use(csrfProtection);

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
});

app.use((req, res, next) => {
    res.locals.isAuth = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
})

app.get('/', homeController.getHome);

app.use(authRouter);
app.use(bellBeatRouter);
app.use(reasonsRouter);

app.use(_404Controller.get404);

mongoose.connect(MONGODB_URI)
.then(() => {
    app.listen(3000)
})
.catch(err => console.log(err));
