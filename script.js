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
const options = document.querySelectorAll(".wbutton");
let userScore = 0;
let computerScore = 0;

//choices
options.forEach((option) => {
    option.addEventListener("click", function () {
    const userSelection = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const computerSelection = cOptions[Math.floor(Math.random() * 3)];

    compare(userSelection, computerSelection);
    updateScore();
    if (declareWin()) {
        userScore = computerScore = 0;
        updateScore();
    }
  });
});

//finding out who won
function compare(userSelection, computerSelection) {
    if (userSelection == computerSelection) {
        return "It's a tie!";
    } else if (userSelection === "Rock" && computerSelection === "Paper" ||
        userSelection === "Paper" && computerSelection === "Scissors" ||
        userSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
    } else {
        userScore++;
    }
}

function updateScore() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
  }

function declareWin() {
    if (userScore === 5 || computerScore === 5) {
      const winner =
        userScore === 5
          ? "You win the game! Congratulations!"
          : "Computer wins the game! Try again next time!";
      alert(winner);
      return true;
    }
    return false;
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