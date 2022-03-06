# Problem statement 

A backend application needs to be developed where coaches can store their team member details like player name, matches played, how much they have won and how much they have lost. Coaches can use this application to find the players based on their name and the sport which they have played. Based on the statistics of matches they have played, the most efficient player is shown on top in the search results. Admin can also find the players across all the teams whereas coaches can search only among their teams which they coach for.


# prerequisite
   Please find attached mysql database for this application with few dummy data.
   Nodejs,mysql installed in system
   
# Installing packages
    npm install

# Running the application 
   npm start


-----------------------------------------------------------------------------------------------------

# End points details


## /insertPlayerDetails

     Description :          API to insert player details 
     Body parameters : 
                            1) name : Player name 
                            2) matches : Player total matches played
                            3) losts : Player lost matches
                            4) wins : Player won matches
                            5) sport : Player played sport
                            6) team :  A team in which player plays
    Response : 
                            Return success response message if provided all neccessary parameters
                            Return invalid data response message if didn't provide neccessary parameters
                    
## /getPlayerdetailsByNameOrSport

     Description :        
              API to get player details based on their name or sport . If coach provided is admin then its searches cross all teams otherwise it searches with in coach's team
     Body parameters : 
                            1) playername     : Player name ( optional if sport is provided)
                            2) coachName     : Coach name (Mandatory)
                            3) isAdminSearch :  true if we want admin search otherwise false (Mandatory)
                            4) sport         : Player sport ( optional if playername is provided)

    Response : 
                            Return success response message if provided all neccessary parameters
                            Return invalid data response message if didn't provide neccessary parameters
                            Returns player statistics based on their name or sport in  most efficient player first order . Admins search across all teams wheras coach search within his team
                            



    