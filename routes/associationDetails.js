const router = require('express').Router();

const associationController = require('../controllers/association.controller');
const isAdminMiddleware = require('../middleware/isAdminMiddleware');

/**
 * A block router method to get Prepare Quote blocks data 
 * @author 
 * @method POST
 * @param {String} insertPlayerDetails Express router path
 * @param {Controller} associationController controller module
 * @requires insertPlayerDetails inserts data to player table
 * @returns Status code 200 if successful with success message , other error codes if error
 *   occurs
 */
router.post('/insertPlayerDetails', associationController.insertPlayerDetails);

/**
 * A block router method to update block quantity 
 * @author 
 * @method POST
 * @param {String} getPlayerdetailsByNameOrSport Express router path
 * @param {Controller} associationController controller module
 * @requires isAdminMiddleware middleware module to get admin details of coach
 * @requires getPlayerdetailsByNameOrSport returns player details according to the user requirement
 * @returns Status code 200 if successful with success message , other error codes if error
 *   occurs
 */
router.post('/getPlayerdetailsByNameOrSport', isAdminMiddleware, associationController.getPlayerdetailsByNameOrSport);


module.exports = router;