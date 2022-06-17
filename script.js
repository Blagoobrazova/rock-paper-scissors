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

//if the user refuses to play
nobtn.addEventListener('click', function handleClick() {
    nobtn.style.display = "none";
    yesbtn.innerHTML = "Fine, let's play";
    typeWriter(" No?.. Oh, well, alright... I'll be here in case you change your mind.", 75,0);
});

//if the user accepts the game
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
let userSelection = document.getElementsByClassName('wbutton').addEVentListener('click')
//let userSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();

//computer choice
function computerPlay() {
    let random = Math.ceil(Math.random() *3);
    if (random < 1) {
        return "paper";
    } else if (1 <= random <= 2) {
        return "rock";
    } else {
        return "scissors";
    }
}
//finding out who won (in one round)
function declareWin (userSelection, computerSelection) {

    //check for a tie
    if (userSelection == computerSelection) {
        return "It's a tie!";
    }

    //scenarios in which the user loses
    if (userSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    }
    if (userSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beat paper";
    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    }

    //scenarios in which the user wins
    if (userSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return "You win! Rock beats scissors";
    }
    if (userSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return "You win! Scissors beat paper";
    }
    else if (userSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return "You win! Paper beats rock";
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