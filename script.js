let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    //Random number from 1-3 where,
    //Rock = 1, Paper = 2, Scissors = 3

    let choice = Math.floor(Math.random()*3 + 1);

    switch(choice){
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }

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
function updateScore(){
    score.textContent = playerScore + " : " + compScore;
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

    updateScore();
    return result;
}

//Make buttons
const rock = document.querySelectorAll(".player-btn")[0];
const paper = document.querySelectorAll(".player-btn")[1];
const scissors = document.querySelectorAll(".player-btn")[2];

rock.addEventListener("click",() => console.log(playRound(getComputerChoice(),"Rock")));
paper.addEventListener("click",() => console.log(playRound(getComputerChoice(),"Paper")));
scissors.addEventListener("click", () => console.log(playRound(getComputerChoice(),"Scissors")));
