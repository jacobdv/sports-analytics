# Overview
Analytics can be used for a variety of purposes, but at the core I believe all analytics is used to predict which team will win a game. That could be a game in Week One, Week Seven, or the Super Bowl, but it always comes down to trying to predict who will win a game. Even individual analysis or contract valuation analysis is looking at the value a player contributes to their team relative to other players or to their cost. The other analytic sub-field that comes to mind for me is comparing current and historical players, which may not be for decision making in the same way the others are, but it is looking at how a player contributed to wins, or how a team created wins.

### NFL
The NFL tends to be where the majority of my analytic interests lie. Initially, I was going to sort the data with Pandas and organize the stats by game, creating my own database for game, season, and career stats. Some of the organization for this is still present (and is being removed), though with incorporating the nflfastR package (https://www.nflfastr.com/index.html), this piece is wholly unnecessary. Pro Football Focus data will also be pulled in where applicable. Individual projects and directories will also contain more specific information in their own README.md files.

### NBA
The NBA is generally less interesting to me than the NFL or college basketball (March Madness really) but it does provide a consistent environment and team-base to test scripts and general basketball data handling with. This is most likely to see development around the playoffs. (The media saliency around the playoffs means I tend to be most motivated in any sport around the games that matter the most, which provides a constant timecrunch in trying to get work done while it is still applicable.)

### NCAAB
March Madness is the impetus for my interest in sports statistics and analytics as a whole. I've been building March Madness algorithms since the 2015-16 season. That first year was disorganized; the second year I predicted the results of 29/32 first round games, with this success leading me to continue to update the algorithms and create new attempts, though none have quite gotten back to this level of first round success. This

### MLB
I've never really been a baseball fan but sports analytics as we think of it today really began here with Bill James and sabermetrics so I would like to explore this at some point for the historical importance. 

### Disclaimer
All data is pulled from Sports-Reference (https://www.sports-reference.com/) unless otherwise noted. They do a fantastic job of updating pages quickly and accurately, and have simplified my work considerably. Most data is copied in from their pages using the "Get as CSV" option with the dropdown arrow above most tables. The major exception to this is the NFL data coming from nflfastR.