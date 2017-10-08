// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// update score
// stop game when score is 10


$(() => {

  // Get DOM variables
  const $li = $('li');

  let $randomSquare;
  // let $selectedSquare;

  // Pick random square
  function pickRandom () {
    $randomSquare = $li[Math.floor($li.length * Math.random())]
    console.log($randomSquare);
  }
  pickRandom();
  //
  // Change class name
  function changeClass () {
    // $randomSquare.addClass('selected');
    $randomSquare.style.background = 'green';
    // console.log($selectedSquare);
    //
  }
  // });
  changeClass();
  //
// Remove new class

  function removeStyle () {
    $randomSquare.removeAttr('style');
  }
  console.log(randomSquare);

  // Add click event

  function clickedOn() {
    $randomSquare.on('click', removeStyle);
  }

  clickedOn();





});
