# Does-It-Fly-Game
A childhood game played in India where players need to quickly think on their feet and decide whether the animal/bird displayed to them can fly or not.

[Launch Game](https://ani0104.github.io/Does-It-Fly-Game/index.html)

# Technologies Used:  
JavaScript, HTML, CSS

# Pseudocode
1)	Define the database
a)	Create an array to store the questions, answers and image links

2)	Define required variables
a)	Get all the DOM elements
b)	Capture and store the current and highest score 

3)	Upon loading the app should:
a)	Start at the Start Game Page. Upon clicking ‘start game’ button, it should go to the main game page and 
i)	start the questions.
ii)	Start the timer
iii)	Present random animal/birds from the ‘database’ to the player

4)	Handle a player not clicking any buttons during play
a)	Not taking any action during play should result in going to the game over page once the timer is down to 0. It should still display the scores.

5)	Handle a player answering incorrectly
a)	Answering incorrectly should immediately take the player to the game over page and display their score along with the highest score.

6)	Display the Scores on Game over page
a)	Displaying the current player score
b)	Displaying the Highest score so far (use windows local storage)



# Next Steps: 
- Add more features(Does it ...(crawl, slither, run,etc))
-	Add music to the game
-	Add complexity levels (easy, medium, hard,etc)
-	Responsive design
-	Finger move option

