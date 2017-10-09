// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// update score
// stop game when score is 10

// console.log("hello");


$(() => {

  // Get DOM variables
  const $li = $('li');

  let $randomSquare;
  // let $selectedSquare;

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
    // $randomSquare.style.background = 'green';
    // console.log($randomSquare);
  }

  changeClass();

  // Remove new class

  function removeClass () {
    $randomSquare.removeClass('selected');
  }

  // Set timeout
  // setTimeout(() => {
  // $randomSquare.removeAttr('style');
  // } 1000);
  //
  // //
  //   // function removeStyle () {
  //   //
  //   // }
  //   // console.log(randomSquare);
  //
  //   // Add click event
  //
  //   function clickedOn() {
  //     $randomSquare.on('click', removeStyle);
  //   }
  //
  //   clickedOn();

  //   setTimeout(() => {
  //   console.log('setTimeout fired!');
  //   console.log(new Date());
  // }, 1000);



});
