// Fetching the current score and highest score from local Storage and capturing in Game over page
document.querySelector("#current-score").innerHTML = localStorage.getItem("currentscore");
document.querySelector("#highest-score").innerHTML = localStorage.getItem("highestscore");
