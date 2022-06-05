let userSelection = promt("Do you choose rock, paper or scissors?")

let computerSelection = Math.random();

if (computerSelection < 0.34) {
    computerSelection = "Paper";
} else if (computerSelection <= 0.67) {
    computerSelection = "Rock";
} else {
    computerSelection = "Scissors";
}



function declareWin(userSelection, computerSelection) {
    if (userSelection == paper && computerSelection == scissors || 
        userSelection == scissors && computerSelection == rock ||
        userSelection == rock && computerSelection == paper) {
        return "Computer wins!";
    }   
    else if(userSelection == computerSelection) {
        return "It's a Tie!";
    } else {
        return "You win!";
    }
}

console.log("User Selection: " + userSelection);
console.log("Computer Selection: " + computerSelection);
declareWin(userSelection, computerSelection)


