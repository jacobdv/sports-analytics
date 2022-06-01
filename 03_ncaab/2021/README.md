# Retroactive Explanation/Exploration (June 2022)
This was a great year for my analysis and visualizations. I don't know if that will be reflected in the accuracy of the picks, but the analysis is much more thorough, and incorporates a lot more of the tools that I learned through the Data Analytics and Visualization program. 
# Visualizations/Charting
The 2021_NCAA_Graphing includes a lot (all of?) of the same calculations that occur in the algorithm as well, but with the goal of graphing them. To this end, the final cell uses Matplotlib to create a scatter plot of two variables against each other (My Algorithm against Win Percentage is the default here). There are a collection of graphs in the Graphs folder, entirely with Win Percentage as the x-axis.<br /><br />
Additionally, the assets folder contains a relatively barebones interactive web visualization to look at Pace and Win Percentage and their correlations with Field Goal Percentage and Free Throw Percentage. This could use further work to allow tooltips to pop up on hover, or filtering to look only at tournament teams, but is still informative regarding overall trends right now. Most notably, FG% is more correlated than FT% with W%. 
# Algorithm/Results
The data for the 2021_NCAA_Tournament file is pulled in the same as what was used in the 2019 algorithm, included in the 2021_Resources folder. There is a very similar preprocessing step with dropping columns that are automatically created because of how Sports-Reference is set up, and then renaming the columns I'm keeping. <br /><br />
The first cell with any analysis is cell 9, creating my zwaz DataFrame to hold the created stats that will be incorporated in the algorithm. Key created columns: 
 - "FF" is the "Four Factors of Basketball Success" put forward by Dean Oliver (https://www.basketball-reference.com/about/factors.html), multiplied by 1000 to make it easier to evaluate.
 - "TDiff" is calculated in three stages. First, it is the team's block and steal percentages added together, subtracting their turnover percentage, to get a rough sense of the percentage differential in their turnover creation. Teams that protect the ball well or create turnovers well should be positive at this stage. Next, this percentage is multiplied by the team's pace, to determine the number of possessions created with this turnover differential. Finally, the possessions is multiplied by the team's points per possession to calculate the points created with each turnover.
 - Scoring is evaluated with "FT", "T2", and "T3", with each calculating the expected number of points coming from that method of scoring.
 - "F" examines foul frequency of a team and uses national average pace and free throw percentage to roughly calculate the number of points given up through fouls. 
 - "Z-Alg" finishes this by summing the positive and negative points created for each of these situations.
# Results
The metrics above are all used to calculate "Z-Alg" which is then used to compare teams in a similar method to 2019, taking an ordered list of the tournament teams and iteratively comparing them until a winner is selected. After the logging of the predicted winners, there is another portion where I create a new DataFrame to include "tWins" or tournament wins for that year. This was then exported as a CSV and loaded into the RFC_Experiemnting Notebook which used basic box score statistics to try to predict tournament wins using a Decision Tree Classifier, Random Forest Classifier, and Logistic Regression, with moderate success. This needs to be explored more in current years. Looking at overall success:
 - Round of 64: 22/32 (68.75%)
 - Round of 32: 8/16 (50.00%)
 - Sweet Sixteen: 2/8 (25.00%)
 - Elite Eight: 1/4 (25.00%)
 - Final Four: 1/2 (50.00%)
 - Championship: 1/1 (100.00%)<br /><br />
 - Total: 35/63 (55.55%)
# Final Notes
This may be the most successful model since the first year. First round success is so key to the later rounds even being able to be successful. This model did a nice job not getting attached to the weaker teams who looked good because of a weaker conference, I believe because of the incorporation of national averages in the team evaluations. This gave some scale for their opponents in the regular season. And it picked the champion!