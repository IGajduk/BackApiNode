let express = require('express');
let mongoose = require('mongoose');

let cors = require('cors');
let MainRouter = require('./routes/index');
let morgan = require('morgan');
let ControllerError = require('./errors/ControllerError');
let session = require('express-session');
require('./config/passport');
let passport = require('passport');
let cookieParser = require('cookie-parser');




mongoose.connect('mongodb://localhost:27017/shopDB', {useNewUrlParser: true});

let app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(morgan('dev'));

app.use(cookieParser());
app.use(session({
    secret: 'asfknsdjkfsdbfj123',
    resave: true,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', async (req, res, next) => {
    console.log('/here');
    res.redirect('/products');
});


app.use(MainRouter);


app.use((req, res, next) => {
    next(new ControllerError('Not found', 404));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: err.msg,
        status: err.status
    });
});

app.listen(3000, () => {
    console.log('listening...!');
});