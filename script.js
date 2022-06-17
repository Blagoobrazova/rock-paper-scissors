//DESIGN

let startbtn = document.getElementById("startbtn");
let startContainer = document.getElementById("startContainer");
let intro = document.getElementById("intro");
let nobtn = document.getElementById("refusePlaying");
let yesbtn = document.getElementById("acceptGame");
let title = document.getElementById("title");
let weapons = document.getElementById("choiceContainer");
let results = document.getElementById("resultsContainer");
let rules = document.getElementById("rules");

//intro
function typeWriter(text,speed,char) {
    if(char < text.length){
    intro.innerHTML += text.charAt(char);
    setTimeout(typeWriter, speed,text,speed,char+1);    
    }
}

function showYesNoBtns() {
    nobtn.style.display = "inline";
    yesbtn.style.display = "inline";
}

startbtn.addEventListener('click', function handleClick() {
    startContainer.style.display = "none";
    startbtn.style.display = "none";
    typeWriter("Listen, I feel a bit bored and exhausted from all the work I do all day. You know, playing videos for you, downloading your shady files… I'd use some entertainment too. Could you play with me?",50,0);
    setTimeout(showYesNoBtns, 10000);
});

//if user refuses to play
nobtn.addEventListener('click', function handleClick() {
    nobtn.style.display = "none";
    yesbtn.innerHTML = "Fine, let's play";
    typeWriter(" No?.. Oh, well, alright... I'll be here in case you change your mind.", 75,0);
});

//if user accepts the game
yesbtn.addEventListener('click', function handleClick() {
    nobtn.style.display = "none";
    yesbtn.style.display = "none";
    intro.style.display = "none";
    title.style.display = "flex";
    weapons.style.display = "flex";
    results.style.display = "flex";
    rules.style.display = "flex";
});

//GAME

let userScore = parseInt(0);
let computerScore = parseInt(0);

//player choice
const options = document.querySelectorAll(".wbutton");
options.forEach((option) => {
  option.addEventListener("click", function () {
  const userSelection = this.textContent;
  });
});

//computer choice
const cOptions = ["Rock", "Paper", "Scissors"];
const computerSelection = cOptions[Math.floor(Math.random() * 3)];

//finding out who won (in one round)
function declareWin (userSelection, computerSelection) {

    if (userSelection == computerSelection) {
        return "It's a tie!";
    } else if (userSelection === "rock" && computerSelection === "paper" ||
        userSelection === "paper" && computerSelection === "scissors" ||
        userSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose!";
    } else {
        userScore++;
    }
}

//play 5 rounds and print the result of the each round:

// for (let i = 0; i < 5; i++) { 
//     let userSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
//     const computerSelection = computerPlay()
//     console.log(userSelection);
//     console.log(computerSelection);
//     console.log(declareWin(userSelection, computerSelection))
//     console.log("Your score = " + userScore);
//     console.log("Computer score = " + computerScore);
// }