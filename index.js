// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Started</h1>`;

const deckCards = [
  'Agility.png',
  'Agility.png',
  'Boat.png',
  'Boat.png',
  'Citizenship.png',
  'Citizenship.png',
  'Hack.png',
  'Hack.png',
  'Nerd-Rage.png',
  'Nerd-Rage.png',
  'Nuka-Cola.png',
  'Nuka-Cola.png',
  'Robotics.png',
  'Robotics.png',
  'Shock.png',
  'Shock.png'
];

const deck = document.querySelector('.deck');
let opened = [];
let matched = [];
const modal = document.getElementById('modal');
const reset = document.querySelector('.reset-btn');
const playAgain = document.querySelector('.play-again-btn');
const movesCount = document.querySelector('.moves-counter');
let moves = 0;
const star = document.getElementById('star-rating').querySelectorAll('.star');
let starCount = 3;
const timeCounter = document.querySelector('.timer');
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;
function shuffle() {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Match.floor(Match.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function startGame() {
  const shuffledDeck = shuffle(deckCards);

  for (let i = 0; i < shuffledDeck.length; i++) {
    const liTag = document.createElement('LI');
    liTag.classList.add('card');
    const addImage = document.createElement('IMG');
    liTag.appendChild(addImage);
    addImage.setAttribute('src', 'img/' + shuffledDeck[i]);
    addImage.setAttribute('alt', 'image of vault');
    deck.appendChild(liTag);
  }
}

startGame();
