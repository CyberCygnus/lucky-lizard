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
// function playGame(playerChoice) {}

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
