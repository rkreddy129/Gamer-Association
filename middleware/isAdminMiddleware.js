const { executeQuery } = require('../utils/utilities');

/**
 * isAdminMiddleware is used to attach the admin details of coach
 */
async function isAdminMiddleware(req, res, next) {
    try {
        let { coachName } = req.body;
        if (!coachName) {
            let error = new Error('Please provide coach name.');
            error.statusCode = 400;
            throw error;
        }
        let query = `SELECT * FROM coach_details where coachName= '${coachName}'`;
        let result = await executeQuery(query);
        if (result.length) {
            req.body.coachDetails = { team: result[0].team_name, isAdmin: result[0].is_admin };
        } else {
            let error = new Error('Provided coach details not found.');
            error.statusCode = 400;
            throw error;
        }
        next();
    } catch (e) {
        return res.status(500).json({ Message: generateErrorMessage(e), status: 'false' });
    }

}

module.exports = isAdminMiddleware;