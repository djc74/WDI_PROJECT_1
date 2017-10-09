// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// update score
// repeat random selection
// stop game when score is 10


$(() => {

  let score = 0;
  // let timer;
  // let interval;

  // Get DOM variables
  const $li = $('li');
  const $score = $('.score');
  let $randomSquare;


  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    console.log($randomSquare);
    timeOut();
  }
  pickRandom();
  clickedOn();

  // Remove new class on timeout

  function removeClass () {
    $randomSquare.removeClass('selected');
    console.log('removeClass');
  }

  function timeOut () {
    const timer = setTimeout(removeClass, 1000);
console.log('timeOut');
  }

  // Add click event
  function clickedOn () {
    $li.on('click', clicky);
    console.log('clickedOn');
  }

  function clicky() {
    console.log('clicky');
    if ($(this).hasClass('selected')) {
      console.log('yes');
      updateScore();
      $(this).removeClass('selected');
    }
  }

  // Update score
  function updateScore () {
    score++;
    $score.html(score);
    console.log('updateScore');
  }

  // Repeat at interval
  function repeat () {
    const interval = setInterval(function() {
      pickRandom();
    }, 2000);
    console.log('repeat');
  }
  repeat();



});
