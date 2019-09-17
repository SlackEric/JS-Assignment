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
  startButton: null,
  preSelected: null,
  checkMatching: false
  // and much more
};

var instruction;
var gameBoard;
var score;
var score_value = 0;

setGame();

/*******************************************
/     game process
/******************************************/
function setGame() {
  // register any element in your game object
  instruction = document.querySelector('.game-instruction__content');
  gameBoard =  document.querySelector('.game-board');
  score = document.querySelector('.game-stats__score--value');
}

function startGame() {
    addCards();
    bindCardClick();
}

function handleCardFlip() {
  if (game.checkMatching) {
    return;
  }
  this.classList.add('card--flipped');
  const currentSelected = this;
  //click
  if (currentSelected === game.preSelected) {
    currentSelected.classList.remove('card--flipped');
    game.preSelected = null;
    return;
  }
  //check if this is the second card
  if (game.preSelected) {
      //match
      if(game.preSelected.dataset.tech === currentSelected.dataset.tech) {
          unBindCardClick(game.preSelected);
          unBindCardClick(currentSelected);
          game.preSelected = null;
          updateScore();
          return;
      }
      //not match
      //display card for 1 sec
      game.checkMatching = true;
      setTimeout(()=>{
        currentSelected.classList.remove('card--flipped');
        game.preSelected.classList.remove('card--flipped');
        game.preSelected = null;
        game.checkMatching = false;
      }, 1000);
      return;
  }
  
  game.preSelected = currentSelected;
}

function shuffle(arr) {
  var i,
      j,
      temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;    
}

function addCards() {
    var html;
    var rand;
    var card_array = [];
    
    for (i = 0; i < 2; i++) {
      rand = CARD_TECHS[Math.floor(Math.random() * CARD_TECHS.length)];
      html = '';
      html += '<div class="card ' + rand + '" data-tech=' + rand +'>';
      html += '<div class="card__face card__face--front"></div>';
      html += '<div class="card__face card__face--back"></div>';
      html += '</div>';
      card_array.push(html);
      card_array.push(html);
    }

    shuffle(card_array);
    
   //gameBoard.innerHTML = html;
   for(i=0; i < card_array.length; i++) {
     gameBoard.innerHTML += card_array[i];
   }
}

function nextLevel() {}

function handleGameOver() {}

/*******************************************
/     UI update
/******************************************/
function updateScore() {
    score_value++;
    score.innerHTML = score_value.toString(); 
}

function updateTimerDisplay() {}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() 
{
  instruction.style.display = "none";
  startGame();
}

function unBindCardClick(card) {
    card.removeEventListener('click', handleCardFlip);
}

function bindCardClick() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.addEventListener('click', handleCardFlip);
  });
}
