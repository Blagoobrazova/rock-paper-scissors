//DESIGN

let startbtn = document.getElementById("startbtn");
let startContainer = document.getElementById("startContainer");
let intro = document.getElementById("intro");
let nobtn = document.getElementById("refusePlaying");
let yesbtn = document.getElementById("acceptGame");
let playScreen = document.getElementById("playScreen");
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
    playScreen.style.display = "inline";
});

//--------GAME----------

let computerSelectionTitle = document.getElementById("compWeaponTitle");
const options = document.querySelectorAll(".wbutton");
let userScore = 0;
let computerScore = 0;

//choices
options.forEach((option) => {
    option.addEventListener("click", function () {
    const userSelection = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const computerSelection = cOptions[Math.floor(Math.random() * 3)];

    compare(userSelection, computerSelection); //play
    showComputerSelection (computerSelection);
    updateScore();
    if (declareWin() === true) {
        updateScore();
    }
  });
});

function showComputerSelection (computerSelection) {
    document.getElementById("compWeapon").textContent = computerSelection;
}

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

//declare winner after 5 wins and change to restart screen
let reloadScreen = document.getElementById("reloadScreen");
let computerComment = document.getElementById("computerComment");
let happyPCimg = document.getElementById("happyPC");
let sadPCimg = document.getElementById("sadPC");
let winnerTitle = document.getElementById("winnerTitle");
let reloadbtn = document.getElementById("reloadbtn");

reloadbtn.addEventListener('click', function handleClick() {
    userScore = computerScore = 0;
    playScreen.style.display = "inline";
    reloadScreen.style.display = "none";
});

function declareWin() {
    if (userScore === 5) {
        playScreen.style.display = "none";
        reloadScreen.style.display = "inline";
        return true;
    } else if (computerScore === 5) {
        playScreen.style.display = "none";
        reloadScreen.style.display = "inline"
        computerComment.innerHTML = "thank you for playing!"
        winnerTitle.innerHTML = "You lost!"
        sadPCimg.style.display = "none";
        happyPCimg.style.display = "inline";
        return true;
    } else {
        return false;
    }
}