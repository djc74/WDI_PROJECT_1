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
  let counter = 30;
  let $timeCountdown = null

  // Get DOM variables
  const $li = $('li');
  const $score = $('.score');
  $timeCountdown = $('.timer');
  const $button = $('button');
  let $randomSquare;

  // Start game button
  $button.on('click', startGame);

  // start game function
  function startGame () {
    pickRandom();
    clickedOn();
    repeat();
    seconds = setInterval(countdown, 1000);
    // countdown(1000);

  }
  // startGame();

  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    // console.log($randomSquare);
    timeOut();
  }

  // Remove new class on timeout

  function removeClass () {
    $randomSquare.removeClass('selected');
    // console.log('removeClass');
  }

  function timeOut () {
    const timer = setTimeout(removeClass, 1000);
    // console.log('timeOut');
  }

  // Add click event
  function clickedOn () {
    $li.on('click', clickResponse);
    // console.log('clickedOn');
  }

  // Update score and remove class of clicked square
  function clickResponse () {
    // console.log('clickResponse');
    if ($(this).hasClass('selected')) {
      // console.log('yes');
      updateScore();
      $(this).removeClass('selected');
    }
  }

  // Update score
  function updateScore () {
    score++;
    $score.html(score);
    // console.log('updateScore');
    stopGame();
  }

  // Repeat at interval
  function repeat () {
    interval = setInterval(pickRandom, 2000);
    console.log('repeat');
  }

  // Stop game at score of 10
  function stopGame () {
    if (score === 3) {
      alert('Boom!');
      stopInterval();
      clearInterval(seconds);
    }
  }

  // Stop random square generator
  function stopInterval () {
    clearInterval(interval);
  }

  //countdown timer
  function countdown() {
    counter--;
    $timeCountdown.html(counter);
    // console.log('countdown');
    endGame();
  }

  // stop game on time out
  function endGame () {
    if (counter <= 0) {
      clearInterval(seconds);
      stopInterval();
      alert('You\'re dead!')
    }
  }

});
