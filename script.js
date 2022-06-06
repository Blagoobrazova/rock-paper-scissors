//player choice
// let userSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();

//computer choice
let computerSelection = Math.ceil(Math.random() *3);

function computerPlay() {
    if (computerSelection < 1) {
    computerSelection = "paper";
    } else if (1 <= computerSelection <= 2) {
    computerSelection = "rock";
    } else {
    computerSelection = "scissors";
    }
}

//finding out who won (in one round)
function playRound (userSelection, computerSelection) {

    //check for a tie
    if (userSelection == computerSelection) {
        return "It's a tie!";
    }

    //scenarios in which the user loses
    if (userSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    }
    if (userSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper";
    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    }

    //scenarios in which the user wins
    if (userSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    }
    if (userSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    }
    else if (userSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    }
}

//play 5 rounds and print the result of the each round
function game() {  
    for (let i = 0; i < 5; i++) { 
    let userSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    console.log(computerSelection)
    console.log(userSelection)
    playRound()
    console.log(playRound(userSelection, computerSelection))
    }
}



