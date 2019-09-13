// css class for different card image
const CARD_TECHS = [
  'html5',
  'css3',
  'js',
  'sass',
  'nodejs',
  'react',
  'linkedin',
  'heroku',
  'github',
  'aws'
];

// only list out some of the properties,
// add more when needed
const game = {
  score: 0,
  level: 1,
  timer: 60,
  timerDisplay: null,
  scoreDisplay: null,
  levelDisplay: null,
  timerInterval: null,
  startButton: null
  // and much more
};

var instruction;
var gameBoard;

setGame();

/*******************************************
/     game process
/******************************************/
function setGame() {
  // register any element in your game object
  instruction = document.querySelector('.game-instruction__content');
  gameBoard =  document.querySelector('.game-board');
}

function startGame() {
    addCards();
    bindCardClick();
}

function handleCardFlip() {
  this.classList.add('card--flipped');
}

function addCards() {
    var html = '';
    var rand;
    
    for (i = 0; i < 4; i++) {
      rand = CARD_TECHS[Math.floor(Math.random() * CARD_TECHS.length)];

      html += '<div class="card html5" data-tech="${rand}">';
      html += '<div class="card__face card__face--front"></div>';
      html += '<div class="card__face card__face--back"></div>';
      html += '</div>';
    }
    
   gameBoard.innerHTML = html;
}

function nextLevel() {}

function handleGameOver() {}

/*******************************************
/     UI update
/******************************************/
function updateScore() {}

function updateTimerDisplay() {}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() 
{
  instruction.style.display = "none";
  startGame();
}

function unBindCardClick(card) {}

function bindCardClick() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.addEventListener('click', handleCardFlip);
  });
}
