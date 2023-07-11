let playerScore = 0;
let compScore = 0;

function getComputerChoice(rock = rockPriority, paper = paperPriority, scissors = scissorsPriority){
    //each number sets the priority for that move. At defaut, every move has a 33.33% chance
    //Each move should have a probability of priority/total for being made. 

    let total = rock + paper + scissors;
    let choice = Math.floor(Math.random()*total + 1);

    //The three cases seperates the total over three intervals. 1 to rock, 
    //rock to (total - scissors), and  total - scissors to total
    if(choice <= total - (paper + scissors)){
        choice = "Rock";
    }else if(choice > rock && choice <= total - scissors){
        choice = "Paper";
    }else {
        choice = "Scissors";
    }
    
    console.log(choice);
    return choice;
}

function getPlayerChoice(choice){
    
    choice = choice.trim();
    choice = choice.toLowerCase();

    if(choice == "rock" || choice == "paper" || choice == "scissors"){
        choice = choice[0].toUpperCase() + choice.slice(1);   
    }else{
        choice = getPlayerChoice();
    }

    return choice;
}

const score = document.querySelector(".score div");
const gameResult = document.querySelector(".result");
function updateScore(){
    score.textContent = playerScore + " : " + compScore;

}

function updateScreen(computerSelection,playerSelection){
    //all fine names are just lower case of the selection string values
    let playerImg = playerSelection.toLowerCase();
    console.log(computerSelection);
    let compImg = computerSelection.toLowerCase();

    playerDisplayImg.setAttribute('src','./img/'+ playerImg +'.png');
    playerDisplayImg.setAttribute('alt',playerImg);

    compDisplayImg.setAttribute('src','./img/' + compImg + '.png');
    compDisplayImg.setAttribute('alt',compImg);

}

function playRound(computerSelection,playerSelection){
    let result;
    
    if((playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")
    ){
        result = "You win";
        playerScore++;
    }else if(playerSelection == computerSelection){
        result = "It's a tie";
    }else{
        result = "You lose";
        compScore++;
    }
    updateScreen(computerSelection,playerSelection);
    updateScore();
    return result;
}

function compBehavior(rock,paper,scissors){
    rockPriority = rock;
    paperPriority = paper;
    scissorsPriority = scissors;
}

//Make buttons
const rock = document.querySelectorAll(".player-btn")[0];
const paper = document.querySelectorAll(".player-btn")[1];
const scissors = document.querySelectorAll(".player-btn")[2];
const playerDisplayImg = document.querySelector('.player-display img');
const compDisplayImg = document.querySelector('.comp-display img');

const simple = document.querySelectorAll(".comp-btn")[0];
const normal = document.querySelectorAll(".comp-btn")[1];
const custom = document.querySelectorAll(".comp-btn")[2];

let rockPriority = 1;
let paperPriority = 1;
let scissorsPriority = 1;

rock.addEventListener("click",() => gameResult.textContent = playRound(getComputerChoice(),"Rock"));
paper.addEventListener("click",() => gameResult.textContent = playRound(getComputerChoice(),"Paper"));
scissors.addEventListener("click", () => gameResult.textContent = playRound(getComputerChoice(),"Scissors"));

simple.addEventListener("click", () => compBehavior(8,1,1));
normal.addEventListener("click", () => compBehavior(1,1,1));
custom.addEventListener("click",() => {
    let rock = 1;
    let paper = 1;
    let scissors = 1;
    do{
        rock = +prompt("How ofthen should the AI play rock. Set a positive integer from 1 - 10")
    }while(!(rock >= 1 && rock <= 10) && !(typeof rock != 'number'));
    do{
        paper = +prompt("How ofthen should the AI play paper. Set a positive integer from 1 - 10")
    }while(!(paper >= 1 && paper <= 10) && !(typeof paper != 'number'));
    do{
        scissors = +prompt("How ofthen should the AI play scissors. Set a positive integer from 1 - 10")
    }while(!(scissors >= 1 && scissors <= 10) && !(typeof scissors != 'number'));
    compBehavior(rock,paper,scissors);
})