var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require('compression');
const cors = require('cors');
var indexRouter = require('../routes/index');
const { generateErrorMessage } = require('../utils/utilities');
 

const expressLoader = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(compression());
    app.use(logger('common'));
    app.use(logger('dev'));
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    indexRouter(app);
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });
    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        /* Checking whether any custom status code*/
        let statusCode = err.statusCode || 500;
        return res.status(statusCode).json({
            Message: generateErrorMessage(err),
            status: 'false'
        });
    });

};

module.exports = expressLoader