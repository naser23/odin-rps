"use strict";


const choiceArray = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3); 
    return choiceArray[choice].toLowerCase();
}


function playerSelection() {
    let playerInput;
    let filteredInput = playerInput.toLowerCase().trim();

    if (filteredInput !== "rock" && filteredInput !== "paper" && filteredInput !== "scissors") {
        alert("please select one of the three options.")
        playerSelection()
    } else {
        playRound(filteredInput);
    }
    
}



function playRound(playerChoice) {
    let computer = computerPlay();
    let player = playerChoice;
    let playerVictory = "player wins!";
    let machineVictory ="computer wins!";
    // console.log(`player: ${player}, computer: ${computer}`);


    if (player == "rock" && computer == "scissors") { // player wins results
        game(playerVictory);
    } else if (player == "scissors" && computer == "paper") {
        game(playerVictory)
    } else if (player == "paper" && computer == "rock") {
        game(playerVictory)
    } else if (computer == "rock" && player == "scissors") { // computer wins results
        game(machineVictory)
    } else if (computer == "scissors" && player == "paper") {
        game(machineVictory)
    } else if (computer == "paper" && player == "rock") {
        game(machineVictory)
    } else {
        console.log("tie")
        playerSelection()
    }

}


function game(winner) {
    let victor = winner;

    while(playerScore < 4 && computerScore < 4) {
        if (victor === "player wins!") {
            playerScore++;
            console.log(`Player: ${playerScore}: Computer: ${computerScore}`);
            console.log(playerScore < 5 || computerScore < 5);
            playerSelection();
        } else if (victor === "computer wins!") {
            computerScore++;
            console.log(`Player: ${playerScore}: Computer: ${computerScore}`);
            console.log(playerScore < 5 || computerScore < 5);
            playerSelection();
         }

        }


}
