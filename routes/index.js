
const associationRouter = require('../routes/associationDetails');

module.exports = app => {
  // Add headers
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DEconstE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // set header to return token if it is about to expiry 
    res.setHeader('Access-Control-Expose-Headers', 'X-auth-token');


    // Pass to next layer of middleware
    next();
  });
  app.use('', associationRouter);
};

