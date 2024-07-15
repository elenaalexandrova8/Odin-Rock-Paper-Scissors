//generate and return string with computer choice
function getComputerChoice() {
    let num=Math.round(Math.random()*2);
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

//find winner computer vs human 
function playRound(computerChoice,humanChoice,computerScore, humanScore){
    let result=findWinner(computerChoice, humanChoice, 'rock', 'scissors');
    if (result==false) {
        result=findWinner(computerChoice, humanChoice, 'scissors', 'paper');
        if (result==false){
            result=findWinner(computerChoice, humanChoice, 'paper', 'rock');
            if (result==false)
                return 'Cant find who the winner is.';
            else 
                return result;
        }
        else
            return result;}
    else 
    return result;
}

//compare human and computer choices to winning and loosing values to find a winner for a specific pair of human/computer choices
function findWinner(computerChoice, humanChoice, winningValue, loosingValue){
    if ((computerChoice==winningValue) && (humanChoice==loosingValue)){ 
        ++computerScore;
        return "Computer gets a point";}
    else if ((computerChoice==loosingValue) && (humanChoice==winningValue)){
        ++humanScore;
        return "You get a point";}
    else if (computerChoice==humanChoice)
        return "it is a tie";
    else
        return false;
}

//remove borders from images clicked before
function removeOutline(){
    userGuessImages.forEach((element)=>element.setAttribute('style', 'outline:none'));
}

function addOutline(event){
    event.target.setAttribute('style', 'outline: 10px solid; outline-offset: -10px;');
    event.target.style.color=getRandomColor();
}

//update computer guess image according to computerChoice variable
function updateComputerGuessImg(imgComputerGuess, computerChoice){
    switch (computerChoice) {
        case 'rock':
            imgComputerGuess.src='img/rock.png';
            break;
        case 'paper':
            imgComputerGuess.src='img/paper.png';
            break;
        case 'scissors':
            imgComputerGuess.src='img/scissors.png';
            break;
    }
}

function displayRoundWinner(currentRoundWinner){
    const showRoundWinner=document.querySelector('.showRoundWinner');
    showRoundWinner.textContent=currentRoundWinner;
    document.getAnimations().forEach((anim)=>{anim.cancel();anim.play()}); 
}

function userGuessImageClicked(event){
    let imgComputerGuess=document.querySelector('.imgComputerGuess');
    let showScores=document.querySelector('.showScores');
    let currentRoundWinner='';

    let computerChoice=getComputerChoice();
    updateComputerGuessImg(imgComputerGuess, computerChoice);
    
    let humanChoice=event.target.id;
    switch (humanChoice) {
        case 'rock':
            removeOutline();
            addOutline(event);
            break;
        case 'paper':
            removeOutline();
            addOutline(event);
            break;
        case 'scissors':
            removeOutline();
            addOutline(event);
            break;
    }
    var popSound=new Audio('sound/pop.mp3');
    popSound.play();

    currentRoundWinner=playRound(computerChoice, humanChoice);
    displayRoundWinner(currentRoundWinner);
    showScores.textContent=`${humanScore} : ${computerScore}`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


let userGuessImages=document.querySelectorAll(".userGuessImage");

let humanScore=0;
let computerScore=0;

userGuessImages.forEach((element)=>
element.addEventListener('click',userGuessImageClicked));