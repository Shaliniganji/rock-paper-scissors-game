const choices = document.querySelectorAll(".choice");

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

choices.forEach(button => {

    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        const computerChoice = options[Math.floor(Math.random() * 3)];

        playerChoiceElement.textContent = "Your Choice : " + capitalize(playerChoice);
        computerChoiceElement.textContent = "Computer Choice : " + capitalize(computerChoice);

        let result = "";

        if (playerChoice === computerChoice) {

            result = "🤝 It's a Draw!";

        }

        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {

            result = "🎉 You Win!";
            playerScore++;

        }

        else {

            result = "💻 Computer Wins!";
            computerScore++;

        }

        resultElement.textContent = result;

        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;

    });

});

resetBtn.addEventListener("click", () => {

    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    playerChoiceElement.textContent = "Your Choice :";
    computerChoiceElement.textContent = "Computer Choice :";

    resultElement.textContent = "Make your move!";

});

function capitalize(word) {

    return word.charAt(0).toUpperCase() + word.slice(1);

}