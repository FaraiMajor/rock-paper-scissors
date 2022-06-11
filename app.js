let selection = "",
    computerScore = 0,
    playerScore = 0;


function computerPlay() {
    let play = Math.floor(Math.random() * plays.length) + 1;
    if (play === 1) {
        selection = "rock";
        return selection;
    } else if (play === 2) {
        selection = "paper";
        return selection;
    } else {
        selection = "scissors";
        return selection;
    }
}


function playRound(playerSelection, computerSelection) {
    let playerHand = prompt("Enter one: rock, paper, or scissors");
    computerSelection = computerPlay();
    playerSelection = playerHand;

    if (playerSelection.toLoweCase() === "rock" && computerSelection === "scissors") {
        console.log("You won! rock beats scissors");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! paper beats rock");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! scissors beats paper");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost! rock beats scissors");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost! paper beats rock");
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost! scissors beats paper");
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('You win!     (You: ' + playerScore + '  Computer: ' + computerScore +
            ')');
    } else {
        console.log('You lose...  (You: ' + playerScore + '  Computer: ' + computerScore +
            ')');
    }
}
game();