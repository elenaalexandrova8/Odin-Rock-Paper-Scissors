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
function playRound(computerChoice,humanChoice){
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
        return "computer wins";}
    else if ((computerChoice==loosingValue) && (humanChoice==winningValue)){
        ++humanScore;
        return "human wins";}
    else if (computerChoice==humanChoice)
        return "it's a tie";
    else 
        return false;
}

let buttonsParent=document.querySelector("#buttons");
let gameDiv=document.querySelector("#gameDiv");
//following for the output on the page
let userGuess=document.querySelector('.userGuess');
let computerGuess=document.querySelector(".computerGuess");
let roundWinner=document.querySelector(".roundWinner");
let scores=document.querySelector(".scores");

let humanScore=0;
let computerScore=0;

buttonsParent.addEventListener('click',(event) =>{
    let userGuessNode=document.createElement('p');
    let computerGuessNode=document.createElement('p');
    let roundWinnerNode=document.createElement('p');
    let scoresNode=document.createElement('p');

    let computerChoice=getComputerChoice();
    let humanChoice=event.target.id;

    switch (humanChoice) {
        case 'rock':
            userGuessNode.textContent="Rock";
            break;
        case 'paper':
            userGuessNode.textContent="Paper";
            break;
        case 'scissors':
            userGuessNode.textContent="Scissors";
            break;
    }
    computerGuessNode.textContent=computerChoice;
    roundWinnerNode.textContent=playRound(computerChoice, humanChoice);
    if (roundWinnerNode.textContent=='Cant find who the winner is.') {
        userGuessNode.textContent="??";
    }
    scoresNode.textContent=`${computerScore} / ${humanScore}`;

    userGuess.appendChild(userGuessNode);
    computerGuess.appendChild(computerGuessNode);
    roundWinner.appendChild(roundWinnerNode);
    scores.appendChild(scoresNode);
});
