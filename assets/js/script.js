// Define the word pairs for the game
const words = ['Exciting', 'Alive', 'Brilliant', 'Absolute', 'Achieve', 'Charm'];

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

  card.addEventListener('click', flipCard);

  cardContainer.appendChild(card);
});

// Adding event listener for the restart button
const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', () => {
  location.reload();
});

// Adding event listeners for the cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));
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
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
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

// Declare a variable to hold the timer
let timerInterval;
let seconds = 0;

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    // Update the timer display in the HTML
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = formatTime(seconds);
  }, 1000);
}

// Function to format the time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Function to add leading zero to single-digit numbers
function padZero(number) {
  return number.toString().padStart(2, '0');
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Adding event listener for the timer button
const timerButton = document.getElementById('timerButton');
timerButton.addEventListener('click', function() {
  if (this.textContent === 'Start Timer') {
    startTimer();
    this.textContent = 'Stop Timer';
  } else {
    stopTimer();
    this.textContent = 'Start Timer';
  }
});
