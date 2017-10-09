// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// repeat
// update score
// stop game when score is 10

// console.log("hello");


$(() => {

  // Get DOM variables
  const $li = $('li');

  let $randomSquare;
  let timer;

  // Pick random square
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]);
    console.log($randomSquare);
  }
  pickRandom();
  //
  // Change class name
  function changeClass () {
    $randomSquare.addClass('selected');
  }
  changeClass();

  // Remove new class on timeout
  function removeClass () {
    $randomSquare.removeClass('selected');
  }

  function timeOut () {
    timer = setTimeout(removeClass, 1000);
  }
  timeOut();

  // Add click event
  function clickedOn() {
    $randomSquare.on('click', removeClass);
  }
  clickedOn();

  //   setTimeout(() => {
  //   console.log('setTimeout fired!');
  //   console.log(new Date());
  // }, 1000);



});
