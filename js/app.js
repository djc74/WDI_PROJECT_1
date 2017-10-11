$(() => {

  //settings at Start
  let currentLevel = 1;
  let score = 0;
  let counter = 30;
  let choose = 2000;
  let $timeCountdown = null;
  let speed = 1000;
  let remove = 1000;
  let gameInterval;
  let seconds;

  // object to store levels
  const levels = {
    1: 3,
    2: 6,
    3: 9,
    4: 12,
    5: 15
  };

  // Get DOM variables
  const $welcome = $('.welcome');
  const $main = $('.main');
  const $li = $('li');
  const $score = $('.score');
  const $button = $('.start');
  const $enter = $('.enter');
  const $boom = $('.boom');
  const $lose = $('.lose');
  const $win = $('.win');
  let $randomSquare;
  $timeCountdown = $('.timer');

  //hide main screen and show welcome
  function welcome () {
    $main.hide();
    $boom.hide();
    $lose.hide();
    $win.hide();
    $enter.on('click', main);
  }
  welcome();

  // reveal main screen and hide welcome
  function main () {
    $welcome.hide();
    $main.show();
  }

  // Start game button
  $button.on('click', startGame);

  // start game function
  function startGame () {
    pickRandom();
    clickedOn();
    gameInterval = setInterval(pickRandom, choose);
    seconds = setInterval(countdown, speed);
  }

  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    timeOut();
  }

  // Remove new class on timeout
  function removeClass () {
    $randomSquare.removeClass('selected');
  }

  function timeOut () {
    setTimeout(removeClass, remove);
  }

  // Add click event
  function clickedOn () {
    $li.on('click', clickResponse);
  }

  // Update score and remove class of clicked square
  function clickResponse () {
    if ($(this).hasClass('selected')) {
      updateScore();
      $(this).removeClass('selected');
    }
  }

  // Update score
  function updateScore () {
    score++;
    stopGame();
    // checkForNextLevel();
    $score.html(score);
  }

  // function checkForNextLevel() {

  // }

  // Stop game at certain score
  function stopGame () {
    if (score === levels[currentLevel]) {
      currentLevel++;
      clearInterval(seconds);
      makeHarder();
      boom();
    } else {
      if (counter <= 0) {
        clearInterval(seconds);
        makeHarder();
        lose();
      }
    }
  }

  //win game screen
  function boom () {
    $main.hide();
    $boom.show().on('click', nextLevel);
  }

  // lose game screen
  function lose () {
    $main.hide();
    $lose.show().on('click', reset);
  }

  // countdown timer
  function countdown() {
    counter--;
    $timeCountdown.html(counter);
  }

  // reset game
  function reset() {
    counter = 30;
    score = 0;
    $main.show();
    $lose.hide();
  }

  // start next level
  function nextLevel () {
    $boom.hide();
    $main.show();
    counter = 30;
    score = 0;
  }

  // make game harder
  function makeHarder () {
    if (score === levels[currentLevel]) {
      speed = speed-100;
      remove = remove-100;
      choose = choose-100;
      score = 0;
      clearInterval(gameInterval);
      timeOut();
      startGame();
    }
console.log(levels[currentLevel]);
  }

  // function checkWin() {
  //   clearInterval(seconds);
  //   makeHarder();
  //   if (levels[currentLevel] === 12) {
  //     $main.hide;
  //     $win.show;
  //   }
  // }

});
