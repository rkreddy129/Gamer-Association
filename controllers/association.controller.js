const { generateErrorMessage, executeQuery } = require('../utils/utilities');

const associationController = {

    insertPlayerDetails: async (req, res) => {
        try {
            let { name, matches, losts, wins, sport, team } = req.body;
            //Checking mandatory request inputs
            if (!(name && matches && losts && wins && sport && team)) {
                let error = new Error('Invalid data');
                error.statusCode = 400;
                throw error;
            }
            //Inserting player details into player_details table
            let sql = `INSERT INTO player_details (names, matches, losts, wins, sport, team) VALUES ('${name}', ${matches},${losts},${wins},'${sport}','${team}')`;
            await executeQuery(sql);
            res.status(200).json({ Message: 'Player Added', status: 'true' });
        } catch (e) {
            return res.status(500).json({ Message: generateErrorMessage(e), status: 'false' });

        }
    },


    getPlayerdetailsByNameOrSport: async (req, res) => {
        try {
            let { coachDetails, playername, sport, isAdminSearch } = req.body;
            // Checking mandatory request inputs 
            if (!(coachDetails && isAdminSearch) && !(playername || sport)) {
                let error = new Error('Invalid data');
                error.statusCode = 400;
                throw error;
            }
            // Throwing error when requested for admin search & coach is not admin
            if (isAdminSearch && !coachDetails.isAdmin) {
                let error = new Error('Provided coach is not an admin');
                error.statusCode = 400;
                throw error;
            }

            let query;
            // Searching in entire player DB if coach is admin based on playername or sport
            if (isAdminSearch) {
                query = `Select * from player_details where ${playername ? `names = '${playername}'` : ''}  ${(sport && playername) ? 'and' : ''}   ${sport ? `sport = '${sport}'` : ''}`;
            } else {
                // Searching in player details among coach sepecific team  based on playername or sport
                query = `Select * from player_details where team = '${coachDetails.team}' and ${playername ? `names = '${playername}'` : ''}  ${(sport && playername) ? 'and' : ''}   ${sport ? `sport = '${sport}'` : ''}`;
            }
            let result = await executeQuery(query);
            if (result.length) {
                //winning percentage = wins / games 
                let efficiency = (playerDetails) => playerDetails.wins / playerDetails.matches
                result.sort((a, b) => efficiency(b) - efficiency(a))
                res.status(200).json({ playerDetails: result, status: 'true' });
            } else {
                return res.status(200).json({ Message: "No player details found", status: 'true' });
            }
        } catch (e) {
            return res.status(500).json({ Message: generateErrorMessage(e), status: 'false' });
        }
    },
};
module.exports = associationController;