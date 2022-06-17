//design

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

//game