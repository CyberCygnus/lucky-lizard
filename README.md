Lucky Lizard

The Lucky Lizard game is a fun variation of the traditional Rock, Paper, Scissors game, with the addition of two more choices: Lizard and Spock (represented by emojis).

(#table-of-content)

- [Features](#features)
  - [Existing Features](#existing-features)
    - [Logo](#logo)
    - [Interactive Gameplay](#interactive-gameplay)
    - [Dealer's Choice Highlight](#dealers-choice-highlight)
    - [Dynamic Feedback](#dynamic-feedback)
    - [Detailed Game Outcomes](#detailed-game-outcomes)
    - [End of Game Logic \& Reset](#end-of-game-logic--reset)
    - [Modal Window with Game Rules](#modal-window-with-game-rules)
    - [Responsive Design](#responsive-design)
  - [Features Left to Implement](#features-left-to-implement)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Code Explanations](#code-explanations)
  - [CSS Flex Property in `.choice`](#css-flex-property-in-choice)
  - [JavaScript](#javascript)
    - [`dealerChoice()`](#dealerchoice)
    - [Determining the Winner](#determining-the-winner)
    - [Main Game Logic](#main-game-logic)
    - [Game Flow](#game-flow)
    - [Detailed Game Outcomes Message:](#detailed-game-outcomes-message)
    - [End of Game Logic \& UI](#end-of-game-logic--ui)
    - [Introduced game reset functionality](#introduced-game-reset-functionality)
    - [Modal Window Implementation](#modal-window-implementation)
    - [Event Handlers](#event-handlers)
- [Credits](#credits)
  - [Code Snippets and Inspiration](#code-snippets-and-inspiration)
  - [Media](#media)

## Features

### Existing Features

#### Logo

A friendly smiling cartoon lizard representing the dealer.

#### Interactive Gameplay

Players engage in rounds of extended Rock, Paper, Scissors, Lizard, Spock by clicking on symbols. Clear visual and textual feedback is provided for each round's outcome.

#### Dealer's Choice Highlight

The dealer's symbol choice is visually represented, with a unique background color for each choice, offering an additional visual cue for players.

#### Dynamic Feedback

Real-time feedback is provided through the main message field, indicating round winners and the overall game outcome.

#### Detailed Game Outcomes

Each round displays a detailed message explaining the interaction between the player's and dealer's choices, enhancing understanding of game mechanics.

#### End of Game Logic & Reset

The game detects when a player or dealer reaches a score threshold, concluding the game. Players are then presented with options to start a new game or exit.

#### Modal Window with Game Rules

A modal window, accessible via a button, offers players a comprehensive overview of the game's rules, ensuring clarity.

#### Responsive Design

The game interface is adaptive to various screen sizes, ensuring a consistent experience across devices.

### Features Left to Implement

- **Inactive Player Choice Buttons**: Player choice buttons behave like radiobuttons, unchosen ones are darkened.
- **Light Effects for Buttons**: Winning symbol is displayed with a lighter color or other visual effects.
- **Audio-Effects**: Enhance gameplay with sound effects.
- **Betting Mechanism**: Players can place bets on game outcomes.
- **TRNG Implementation**: Enhancing game randomness by integrating a True Random Number Generator.

## Testing

### Validator Testing

- HTML

- CSS

- JavaScript
  - [Jshint validator](https://jshint.com/)

### Unfixed Bugs

## Deployment

## Code Explanations

### CSS Flex Property in `.choice`

In `style.css`, `flex: 0 1 calc(20% - 10px);` is used in the `.choice` class. This property is shorthand for setting three properties of a flex item: `flex-grow`, `flex-shrink`, and `flex-basis`.

- `flex-grow: 0;` - This allows the item to grow and take up any extra space in the container if it's available. The `0` value means all flex items will not grow beyond their initial size even if there is additional space in the container.

- `flex-shrink: 1;` - This means that the item can shrink if the container becomes too small. A value of `1` means all flex items will shrink at the same rate if necessary.

- `flex-basis: calc(20% - 10px);` - This sets the initial main size of the item before it's distributed space according to the flex factors (`flex-grow` and `flex-shrink`). `calc(20% - 10px)` is used to calculate the width of each item. It's set to 20% of the container's width minus 10px for the margin around items.
  Source: [Using CSS flexible boxes - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

### JavaScript

The script uses a set of global variables to manage the game state:

- `gameRules`: An object that maps each choice to an array of choices it can defeat.
- `playerScore` and `dealerScore`: Counters for the player's and dealer's scores.

---

#### `dealerChoice()`

**Purpose:**  
Generates a random choice for the dealer among the available game symbols.

**Returns:**  
A string representing the dealer's choice.

**Implementation:**  
The function selects a random choice from the `choices` array using a combination of `Math.random()` and array indexing.

---

#### Determining the Winner

`determineWinner(player, dealer)`

**Purpose:**  
Compares the player's and dealer's choices to decide the round's outcome.

**Parameters:**

- `player`: A string representing the player's choice.
- `dealer`: A string representing the dealer's choice.

**Returns:**  
A string indicating the winner: 'player', 'dealer', or 'draw'.

**Implementation:**  
The function uses the `gameRules` object to compare the choices. If the player's choice is found in the dealer's defeat list, the player wins, and vice versa. If both choices match, it's a draw.

---

#### Main Game Logic

`playGame(playerChoice)`

**Purpose:**  
Executes the main game logic. This includes determining the winner, updating scores, and reflecting the results in the UI.

**Parameters:**

- `playerChoice`: A string representing the player's choice.

**Implementation:**  
After determining the round's winner using `determineWinner()`, the function updates the appropriate score counter (`playerScore` or `dealerScore`). It also updates the game's UI elements (`messageElement`, `playerScoreElement`, `dealerScoreElement`, and `dealerChoiceDisplay`) to reflect the results.

---

#### Game Flow

- **`gameInProgress` State Variable**:  
  A state variable, `gameInProgress`, has been added to track if a game round is currently ongoing. This prevents new rounds from starting while one is already in progress, ensuring game integrity. The `playGame` function now checks if a game round is in progress before initiating a new one. This ensures that players can't trigger multiple game rounds by clicking rapidly.

- **`setTimeout()` for Game Flow Control**:  
  The `setTimeout()` method is used to introduce a delay in the game flow, especially after the dealer makes a choice and before the result is displayed. This gives a more organic feel to the game, as if the dealer is taking a moment to decide.

---

#### Detailed Game Outcomes Message:

**Purpose:**  
To provide players with a comprehensive message detailing the outcome of each round based on the choices made by both the player and the dealer.

**Parameters:**

- `playerChoice`: A string representing the player's selected symbol.
- `dealerChoice`: A string representing the dealer's randomly selected symbol.

**Implementation:**  
The function retrieves the corresponding action verb (e.g., "crushes", "cuts") based on the player's and dealer's choices from a predefined list of interactions. The message is then formatted using the retrieved action verb and the names of the chosen symbols. The final message format is: `[Winner's Symbol][Winner's Symbol Name] [Action] [Defeated Symbol Name]`. This message is then displayed to the player to provide clarity on the round's outcome.

---

#### End of Game Logic & UI

**Purpose:**  
To detect when the game has reached its conclusion (either the player or the dealer achieves the winning score) and to present the user with appropriate end-of-game options.

**Parameters:**

- `winner`: A string indicating who won the game, either 'player' or 'dealer'.

**Implementation:**  
The function checks the scores of both the player and the dealer. If either score reaches the predetermined winning threshold (e.g., a score of 10), the game concludes. The UI is then updated to display the overall winner and present options to the player, such as starting a new game or exiting.

---

#### Introduced game reset functionality

**Purpose:**  
To reset the game state, allowing players to start a new game without refreshing the page or manually resetting game elements.

**Parameters:**  
None.

**Implementation:**  
The function resets all game-related variables to their initial states, such as setting scores to zero. It also updates the UI elements to reflect the reset state, clearing any messages and resetting visual indicators. This ensures that players can seamlessly start a new game round after the previous game concludes.

---

#### Modal Window Implementation

**Purpose:**  
To provide players with a comprehensive overview of the game's rules in an easily accessible and user-friendly manner.

**Parameters:**  
None.

**Implementation:**  
A modal window is implemented using a combination of HTML, CSS, and JavaScript. The modal is initially hidden and is displayed when the player clicks on a designated button or link. The modal contains detailed game rules and interactions, ensuring players have a clear understanding of the game mechanics. The modal can be closed by the player, either by clicking on a close button or by clicking outside the modal area.

---

#### Event Handlers

**Purpose:**  
Bind user interactions with the game symbols to trigger game rounds.

**Implementation:**  
For each choice symbol (button) with the class `.choice`, a click event listener is attached. Upon a click, the chosen symbol is passed to the `playGame()` function, initiating a game round.

## Credits

### Code Snippets and Inspiration

- [The modal window](https://www.w3schools.com/howto/howto_css_modals.asp)
- [CSS flex box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- ['setTimeout() for Game Flow Control](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- Array for `outcomes` object is used for storing key-value pairs. [MDN Web Docs - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Media

- **Symbols:** [Emojipedia](https://emojipedia.org/lizard/)
- **'Lucky-Lizard'-Logo:** Midjourney [cybercygnus](https://www.midjourney.com/app/jobs/343f6324-f9bb-4cc4-9f90-0733cf52b706/)
  - Isolated, added alpha-channel, and scaled with [Gimp](https://www.gimp.org/)
