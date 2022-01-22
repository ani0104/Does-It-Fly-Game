// Database of questions
const database = [{qName:"Eagle", canFly:true, href:"https://i.pinimg.com/originals/33/e5/d4/33e5d48e7e0e717c2ebe50c914b12f54.gif"},
                  {qName:"Parrot", canFly:true, href:"https://img1.picmix.com/output/stamp/normal/7/3/2/1/901237_b7f22.gif"}, 
                  {qName:"Elephant", canFly:false, href:"https://i.pinimg.com/originals/84/b7/a2/84b7a2a6084c65781cc03eb95c04b875.gif"},
                  {qName:"Ostrich", canFly:false, href:"https://img1.picmix.com/output/stamp/normal/4/6/9/7/1767964_23295.gif"},
                  {qName:"Seagull", canFly:true, href:"https://i.pinimg.com/originals/65/69/fc/6569fc7028103469579e00fb9df8562e.gif"},
                  {qName:"Duck", canFly:true, href:"https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc.gif"},
                  {qName:"Penguin", canFly:false, href:"https://media.giphy.com/avatars/Rockhoppersocks/yvK9Kw3SXr6E.gif"},
                  {qName:"Kiwi", canFly:false, href:"https://media0.giphy.com/media/pva4MKq6xtJYEbc396/giphy.gif?cid=6c09b952w6314cnoxyi324fx3b2l9tyl2aoc5nnm47jgqwsa&rid=giphy.gif&ct=s"},
                  {qName:"Lion", canFly:false, href:"https://www.carlswebgraphics.com/lion-images/flying-lion.gif"}   ];

// Fetching HTML elements using DOM
const startGameButton = document.getElementById("start-game");
const questionContainer = document.getElementById("question-container");
const hideOnStartClick = document.getElementById("hide-on-start-click");
const questionElement = document.getElementById("question");
const questionImage = document.getElementById("question-image");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const timeCount = document.getElementById("timer-count");

// initiating required variables
let score = 0;
let highestScore = localStorage.getItem("currentscore");
let shuffledQuestionsIndex, response; 
let counter;

// adding event listener to Start Game button to initiate the game
startGameButton.addEventListener("click", function() {
   startGameButton.classList.add("hide");
   hideOnStartClick.classList.add("hide");
   questionContainer.classList.remove("hide");
   shuffledQuestionsIndex = generateRandomFunc();
   startQuestions();
   
});

function startQuestions() {
  showQuestion(shuffledQuestionsIndex);
  startTimer(10); 
}

function showQuestion(questionNumber){
  questionElement.innerText = database[questionNumber].qName;
  questionImage.src = database[questionNumber].href;
  response = database[questionNumber].canFly; 
}
// adding Event listeners to Yes and No Buttons. 
// Calculating the score, reinitiating the function if the answer is correct and navigating to gameover page if the answer is incorrect.
trueButton.addEventListener("click", function(){
   if(response == true && trueButton.innerHTML == "yes") {
       score++;
       console.log(score);
       shuffledQuestionsIndex = generateRandomFunc();
       showQuestion(shuffledQuestionsIndex);
   } else {
      localStorage.setItem("currentscore", score);
      if(score > highestScore) {
         localStorage.setItem("highestscore", score);
        }
      window.location.href = "gameover.html";
   }
   
});
falseButton.addEventListener("click", function(){
console.log(response + " 58");
if(response == false && falseButton.innerHTML == "no") {
   score++;
   console.log(score);
   shuffledQuestionsIndex = generateRandomFunc();
   showQuestion(shuffledQuestionsIndex);
} else {
  localStorage.setItem("currentscore", score);
  if(score > highestScore) {
   localStorage.setItem("highestscore", score);
  }
  window.location.href = "gameover.html";

}

});

// Enabling random questions and making sure that there aren't two consecutive duplicate questions
function generateRandomFunc(){
   let randomNumber = Math.floor(Math.random() * database.length);
   while(randomNumber==shuffledQuestionsIndex){
      randomNumber = Math.floor(Math.random() * database.length);
   }
   return randomNumber;
}

// Function to set an overall timer of 10 seconds. Finish as many questions as you can in this timeframe.
function startTimer(time) {
   counter = setInterval(timer, 1000);
   function timer(){
      timeCount.textContent = time;
      time--;
      if(time < 0) {
         localStorage.setItem("currentscore", score);
         if(score > highestScore) {
            localStorage.setItem("highestscore", score);
         }
         window.location.href = "gameover.html";
      }
   }
}



