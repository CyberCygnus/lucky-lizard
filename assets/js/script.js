// variables
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
// functions

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
  const dealerChoiceDisplay = document.getElementById("dealer-choice-symbol");

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
  }

  dealerChoiceDisplay.innerHTML = dealer;
}

// event listeners

/**
 * Handles player's choice input by binding click events to choice symbols.
 * Initiates the game round upon a choice.
 */
document.querySelectorAll(".choice").forEach(function (button) {
  button.addEventListener("click", function (event) {
    let playerChoice = event.target.innerText;
    playGame(playerChoice);
  });
});
