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
function shuffle(array) {
  let currentIndex = array.length,    temporaryValue,    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
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

function removeCard(){
  while(deck.hasChildNodes()){
deck.removeChild(deck.firstChild)
  }
}

function timer(){
  time = setInterval(function(){
    seconds++;
    if(seconds  === 60){
      minutes++;
      seconds = 0;
    }
    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>"+"Timer:" + minutes + "Mins" + seconds + "Secs";
  }, 1000)
}


function stopTime(){
  clearInterval(time)
}

function resetEverything(){
  stopTime();
  timeStart = false;
  seconds = 0;
  minutes = 0;
  timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + 
  "Timer: 00:00";
  star[1].firstElementChild.classList.add("fa-star");
  star[2].firstElementChild.classList.add("fa-star");
  starCount = 3;
  moves = 0;
  movesCount.innerHTML = 0;
  matched = [];
  opened = [];
  removeCard();
  startGame();
}

function movesCounter(){
  movesCount.innerHTML ++;
  moves ++;
}

function starRating(){
  if (moves === 14){
    star[2].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
  if (moves === 18){
    star[1].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
}

function compareTwo(){
  if (opened.length ===2){
    document.body.stylepointerEvents = 'none';
  }
  if(opened.length ===2 && opened[0].src === opened[1].src){
match();
  } else if (opened.length === 2 && opened[0].src != opened[1].src){
    noMatch()
  }
}

function match(){
  setTimeout(function(){
    opened[0].parentElement.classList.add("match");
    opened[1].parentElement.classList.add("match");
    matched.push(...opened);
    document.body.style.pointerEvents = "auto";
    winGame();
    opened = [];
  },600);
  movesCounter();
  starRating();
}

function noMatch(){
  setTimeout(function(){
    opened[0].parentElement.classList.remove("flip");
    opened[1].parentElement.classList.remove("flip");
    document.body.style.pointerEvents = "auto";
    opened = [];
  },700)
  movesCounter();
  starRating();
  }