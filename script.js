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