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

  // Pick random square
  function pickRandom () {
    $randomSquare = $li[Math.floor($li.length * Math.random())]
    console.log($randomSquare);
    //   const rand = $li;
    //   console.log($li.length);
    //   $(rand[Math.floor(Math.random()rand.length)]);
    //   console.log(rand);
    // changeClassName();
  }
  pickRandom();

  // // Change class name
  // function changeClassName () {
  $randomSquare(function() {
    $randomSquare.addClass('background-color','yellow');
  });
  // }
  // // // }
  // // //
  // changeClassName();


});
