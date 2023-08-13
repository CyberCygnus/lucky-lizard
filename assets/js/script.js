// Variables
const gameRules = {
  "🪨": ["✂️", "🦎"],
  "📃": ["🪨", "🖖"],
  "✂️": ["📃", "🦎"],
  "🦎": ["🖖", "📃"],
  "🖖": ["✂️", "🪨"],
};
let playerScore = 0;
let dealerScore = 0;
let gameInProgress = false;
// Functions
/**
   Generates a random choice for the dealer among the available game symbols.
   The symbol represents the dealer's choice.
   */
function dealerChoice() {
  let choices = ["🪨", "📃", "✂️", "🦎", "🖖"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
// game logic
/**
 * Determines the winner of the game round based on player and dealer choices.
 */
function determineWinner(player, dealer) {
  if (player === dealer) {
    return "draw";
  }
  if (gameRules[player].includes(dealer)) {
    return "player";
  } else {
    return "dealer";
  }
}
/**
 * calculates the winner, updates scores, and displays results.
 */
function playGame(playerChoice) {
  if (gameInProgress) return; // <-- prevent new rounds while one is ongoing
  gameInProgress = true; // <-- Mark the start of a game round
  const dealer = dealerChoice();
  const winner = determineWinner(playerChoice, dealer);
  const messageElement = document.getElementById("result-message");
  const playerScoreElement = document.getElementById("player-score-value");
  const dealerScoreElement = document.getElementById("dealer-score-value");
  const dealerChoiceSymbol = document.getElementById("dealer-choice-symbol");

  dealerChoiceSymbol.innerText = dealer; // Show dealer's choice
  dealerChoiceSymbol.style.fontSize = "4em"; // Make the dealer's choice symbol four times bigger

  // Change background color of dealer-choice-symbol div based on dealer's choice
  switch (dealer) {
    case "🪨":
      dealerChoiceSymbol.style.backgroundColor = "#343333";
      break;
    case "📃":
      dealerChoiceSymbol.style.backgroundColor = "#08607d";
      break;
    case "✂️":
      dealerChoiceSymbol.style.backgroundColor = "#901002";
      break;
    case "🦎":
      dealerChoiceSymbol.style.backgroundColor = "#116351";
      break;
    case "🖖":
      dealerChoiceSymbol.style.backgroundColor = "#7d7507";
      break;
  }
  switch (winner) {
    case "player":
      playerScore++;
      messageElement.innerText = "You win!";
      playerScoreElement.innerText = playerScore;
      break;
    case "dealer":
      dealerScore++;
      messageElement.innerText = "Dealer wins!";
      dealerScoreElement.innerText = dealerScore;
      break;
    default:
      messageElement.innerText = "It's a draw!";
      break;
  }

  setTimeout(() => {
    gameInProgress = false; // <-- Mark the end of a game round
    if (playerScore >= 10) {
      endGame("Player");
    } else if (dealerScore >= 10) {
      endGame("Dealer");
    } else {
      dealerChoiceSymbol.innerText = "";
      dealerChoiceSymbol.style.backgroundColor = "transparent";
      messageElement.innerText = "Make your choice!";
    }
  }, 1000);
}

function endGame(winner) {
  const messageElement = document.getElementById("result-message");
  messageElement.innerHTML = `${winner} wins the game! <br>  
  <button id="exit">Exit</button> <button id="new-game">New Game</button>`;

  document.getElementById("exit").addEventListener("click", function () {
    // exit logic here
    // Redirect to a different page or close the window/tab
    // window.close();
  });

  document.getElementById("new-game").addEventListener("click", function () {
    resetGame();
  });
}

function resetGame() {
  playerScore = 0;
  dealerScore = 0;
  const playerScoreElement = document.getElementById("player-score-value");
  const dealerScoreElement = document.getElementById("dealer-score-value");
  playerScoreElement.innerText = playerScore;
  dealerScoreElement.innerText = dealerScore;
  document.getElementById("result-message").innerText = "Make your choice!";
}

// Event Listener
document.querySelectorAll(".choice").forEach(function (button) {
  button.addEventListener("click", function (event) {
    let playerChoice = event.target.innerText;
    playGame(playerChoice);
  });
});
