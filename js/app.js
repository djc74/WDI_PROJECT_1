// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// update score
// repeat random selection
// stop game when score is 10



$(() => {


  let score = 0;
  let timer;
  let interval;
  let seconds;
  let counter = 10;
  let $timeCountdown = null;

  // Get DOM variables
  const $welcome = $('.welcome');
  const $main = $('.main');
  const $li = $('li');
  const $score = $('.score');
  $timeCountdown = $('.timer');
  const $button = $('.start');
  const $enter = $('.enter');
  let $randomSquare;

  //hide main screen
  function welcome (){
    $main.hide();
    $enter.on('click', main);
  }
  welcome();

  // reveal main screen and hide welcome
  function main () {
    $welcome.hide();
    $main.show();
  }


  // Start game button
  function start () {
    $button.on('click', startGame);
  }
  start();

  // start game function
  function startGame () {
    pickRandom();
    clickedOn();
    repeat();
    seconds = setInterval(countdown, 1000);
    // console.log('startGame');
  }

  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    // console.log($randomSquare);
    timeOut();
    // console.log('pickRandom');
  }

  // Remove new class on timeout

  function removeClass () {
    $randomSquare.removeClass('selected');
    // console.log('removeClass');
  }

  function timeOut () {
    timer = setTimeout(removeClass, 1000);
    // console.log('timeOut');
  }

  // Add click event
  function clickedOn () {
    $li.on('click', clickResponse);
    // console.log('clickedOn');
  }

  // Update score and remove class of clicked square
  function clickResponse () {
    //console.log('clickResponse');
    if ($(this).hasClass('selected')) {
      //console.log('yes');
      updateScore();
      $(this).removeClass('selected');
    }
  }

  // Update score
  function updateScore () {
    score++;
    $score.html(score);
    //console.log('updateScore');
    stopGame();
  }

  // Repeat at interval
  function repeat () {
    interval = setInterval(pickRandom, 2000);
    //console.log('repeat');
  }

  // Stop game at score of 10
  function stopGame () {
    if (score === 3) {
      alert('Boom!');
      stopIntervals();
      // clearInterval(seconds);
    } else {
      if (counter <= 0) {
        alert('You\'re dead!');
        stopIntervals();
        // clearInterval(seconds);
      }
    }
    // console.log('stopGame');
  }

  // Stop random square generator
  function stopIntervals () {
    clearInterval(interval);
    clearInterval(seconds);
    // reset();
    //console.log('stopIntervals');
  }

  // countdown timer
  function countdown() {
    counter--;
    $timeCountdown.html(counter);
    // console.log('countdown');
    stopGame();
  }

  //   // reset game
  //   function reset() {
  //     $button.html('Play again?');
  //     counter = 10;
  //     $score.html(score);
  //     start();
  // console.log('reset');
  //   }






});
