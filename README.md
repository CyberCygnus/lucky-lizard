# Lucky Lizard

## Features

### Existing Features

### Features Left to Implement

- Another feature idea

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

## Credits

### Content

### Media
