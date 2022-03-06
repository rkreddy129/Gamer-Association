/* eslint-disable node/no-unsupported-features/es-syntax */
const res = require('express/lib/response');
const { connection } = require('../app');


/**
* A method to generate error message  by checking whether sql error or runtime error
z* @param {Object} e - An error object
* @returns Error message
*/
const generateErrorMessage = e => {
    let errMessage;
    if (e.sqlMessage ? (errMessage = e.sqlMessage) : (errMessage = e.message))
        return errMessage;
};

/**
* A utility function which takes query as input & executes in database
* @method
* @param {String} query - A string representing a query to execute 
* @requires mysqlPool A connected mySql instance of application
* @returns promise which resolves when query execution sucessfull & rejects when error occurs
*/
const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};


module.exports = {
    generateErrorMessage,
    executeQuery
};
