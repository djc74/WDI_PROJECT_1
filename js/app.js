// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// update score
// repeat random selection

// stop game when score is 10


$(() => {
  let score = 0;
  // Get DOM variables
  const $li = $('li');
  const $score = $('.score');

  let $randomSquare;
  let timer;
  let interval;



  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    // console.log($randomSquare);
  }
  pickRandom();

  // Remove new class on timeout
  function removeClass () {
    $randomSquare.removeClass('selected');
  }
  function timeOut () {
    timer = setTimeout(removeClass, 2000);
  }
  timeOut();

  // Add click event
  function clickedOn () {
    $randomSquare.on('click', function() {
      removeClass();
      updateScore();
    });
  }
  clickedOn();

  // Update score
  function updateScore () {
    score++;
    $score.html(score);
  }
  // Repeat at interval
  function repeat () {
    interval = setInterval(function() {
      pickRandom();
      timeOut();
      clickedOn();
    }, 3000);
  }
  repeat();
  // setInterval(function () {
  //   pickRandom();
  //   // timeOut();
  //   // removeClass();
  // }, 2000);


});
