# Overview
Analytics can be used for a variety of purposes, but at the core I believe all analytics is used to predict which team will win a game. That could be a game in Week One, Week Seven, or the Super Bowl, but it always comes down to trying to predict who will win a game. Even individual analysis or contract valuation analysis is looking at the value a player contributes to their team relative to other players or to their cost. The other analytic sub-field that comes to mind for me is comparing current and historical players, which may not be for decision making in the same way the others are, but it is looking at how a player contributed to wins, or how a team created wins.

### NFL
The NFL tends to be where the majority of my analytic interests lie. Data will be sorted a few different ways, beginning with game by game data being brought in using CSVs from Sports-Reference pages each week of the season. These original CSV are located in the "imports" folder for any given game. Games are sorted by year and week and will each run through a preprocessing script to clean the data and pull it into DataFrames that match a format I'll be using. <=HERE=> Eventually, compiled CSVs will be created for each team, with an outer join style merge so that full team data is contained in a single CSV. This may be a point that a legitimate relational database would be beneficial to use. Otherwise, I may just be recreating this functionality with Pandas, which seems unnecessary if the tools already exist.

### NBA
The NBA is generally less interesting to me than the NFL or college basketball, March Madness really, but it does provide a consistent environment and team-base to test scripts and general basketball data handling with. This is most likely to see development around the playoffs. (I tend to be most motivated in any sport around the games that matter the most, which provides a constant timecrunch in trying to get work done while it is still applicable.)

### NCAAB
March Madness. The impetus for my interest in sports statistics and analytics as a whole. I've been building March Madness algorithms since the 2015-16 season. That first year was disorganized; the second year I predicted the results of 29/32 first round games, with this success leading me to continue to update the algorithms and create new attempts, though none have quite gotten back to this level of first round success. 

### MLB
I've never really been a baseball guy but sports analytics as we think of it today really began here with Bill James and sabermetrics so I would like to explore this at some point for the historical importance.

### Disclaimer
All data is pulled from Sports-Reference unless otherwise noted. They do a fantastic job of updating pages quickly and accurately, I assume, and have simplified my work considerably. Most data is copied in from their pages using the "Get as CSV" option with the dropdown arrow above most tables. 