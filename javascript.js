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

//convert human choice to lower case and return it
function getHumanChoice(choice){
    if (choice.toLowerCase()=='rock')
        return 'rock';
    else if (choice.toLowerCase()=='paper')
        return 'paper';
    else if (choice.toLowerCase()=='scissors')
        return 'scissors';
    else
        return false;
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

//compare human and computer choices to winning and loosing values to find a winner for specific pair of human/computer choices
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

let humanScore=0;
let computerScore=0;
console.log("*****Welcome to the Rock, Paper, Scissors Game!*****")
console.log("Score: Computer / Human");
console.log(`              ${computerScore} / ${humanScore}`);
for (let i=0; i<5; i++){    //play 5 rounds
    let humanChoice=prompt('Enter your choice (rock, paper or scissors):');
    let computerChoice=getComputerChoice(); //get computer choice
    humanChoice=getHumanChoice(humanChoice); //rewrite human input in lower case, or return false if it's invalid
    if (humanChoice) {
        console.log("Choices: Computer / Human");
        console.log(`             ${computerChoice} / ${humanChoice}`);
        playRound(computerChoice, humanChoice);
        console.log("Score: Computer / Human");
        console.log(`              ${computerScore} / ${humanScore}`);
        console.log("----------");}
    else    
        console.log('Please enter correct human choice.')
}