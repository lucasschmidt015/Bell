//Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Routes
const authRouter = require('./routes/auth');
const bellBeatRouter = require('./routes/bell_beat');
const reasonsRouter = require('./routes/reasons');

//Controllers
const homeController = require('./controllers/home');
const _404Controller = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homeController.getHome);

app.use(authRouter);
app.use(bellBeatRouter);
app.use(reasonsRouter);

app.use(_404Controller.get404);

app.listen(3000)