console.log("Hello World");

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

function playRound(computerSelection,playerSelection){
    let result;
    
    if((playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")
    ){
        result = "You win";
    }else if(playerSelection == computerSelection){
        result = "It's a tie";
    }else{
        result = "You lose";
    }

    return result;
}

function playGame(rounds = 5){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < rounds; i++){
        let result = playRound(getComputerChoice(),getPlayerChoice());
        if(result == "You win"){
            playerScore++;
        }else if(result == "You lose"){
            compScore++;
        }
        console.log(result);
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + compScore);

    if(playerScore > compScore){
        console.log("You win the game!");
    }else if(playerScore == compScore){
        console.log("It's a tie game!");
    }else {
        console.log("You lose the game!");
    }
}

//Make buttons
const rock = document.querySelectorAll(".player-btn")[0];
const paper = document.querySelectorAll(".player-btn")[1];
const scissors = document.querySelectorAll(".player-btn")[2];

rock.addEventListener("click",() => console.log(playRound(getComputerChoice(),"Rock")));
paper.addEventListener("click",() => console.log(playRound(getComputerChoice(),"Paper")));
scissors.addEventListener("click", () => console.log(playRound(getComputerChoice,"Scissors")));
