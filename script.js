let userScore = parseInt(0);
let computerScore = parseInt(0);


//player choice
let userSelection = document.getElementsByClassName('button').addEVentListener('click')
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