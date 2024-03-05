// Define the word pairs for the game
const words = ['apple', 'banana', 'orange', 'grape', 'melon', 'strawberry', 'pineapple', 'peach'];

// Duplicate the word pairs to create matching pairs
const wordPairs = [...words, ...words];

// Shuffle the word pairs
wordPairs.sort(() => Math.random() - 0.5);

// Create the memory cards
const cardContainer = document.getElementById('card-container');

wordPairs.forEach((word, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.word = word;
  card.textContent = '?'; // Hide word initially

  card.addEventListener('click', () => {
    card.textContent = word; // Reveal word
    // Implement card flip logic here
  });

  cardContainer.appendChild(card);
});

// Implement card flip logic and game rules
let firstCard, secondCard;
let lockBoard = false;
let hasFlippedCard = false;
let count = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.textContent = this.dataset.word;

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // second click
  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.word === secondCard.dataset.word;

  if (isMatch) {
    count += 2;
    if (count === wordPairs.length) {
      // All cards have been matched, game over
      alert('Congratulations! You won!');
    }
    disableCards();
  } else {
    // Not a match, flip cards back
    lockBoard = true;
    setTimeout(() => {
      firstCard.textContent = '?';
      secondCard.textContent = '?';
      resetBoard();
    }, 1000);
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
// Add interactivity and game logic
const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', () => {
  location.reload();
// Add event listeners for the restart button
const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));


// Add additional JavaScript code to handle game logic, interactivity, and responsiveness