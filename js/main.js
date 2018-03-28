console.log("Ready to Play");

// move player 1 using d key
// listen for d keyup action

// move player 2 using right arrow key
// alert winner when player reaches end of div

let redcar = document.getElementById('redcar');
let purpleCar = document.getElementById('purplecar')

let redLeft = 0;
let purpleLeft = 0;
let redWin = 0;
let purpleWin = 0;
let p1Total = 0;
let p2Total = 0;
let moveIt = 5;
// let countDown = 4;

// reset cars positions and countdown starting point
const resetRace = () => {
  redLeft = 0;
  purpleLeft = 0;
  redcar.style.left = redLeft + "px";
  purplecar.style.left = purpleLeft + "px";
  document.getElementById('timer').innerHTML = "5";
  document.getElementById('hard').checked = false;
}

// start the race button, countdown 5, 4, 3, 2, 1, 0
const letsRace = () => {
  let countDown = 5;
  let countDownTimer = setInterval(function() {
    countDown--;
    document.getElementById('timer').innerHTML = countDown;
    if (countDown <=0)
      clearInterval(countDownTimer);
  }, 1000);
}

// check winner of race, first player to reach end of
// track (track div box), add point to winner total
// and update point total on HTML page
const checkWinner = () => {
  if (redLeft >=800) {
    alert("Player 1 Wins");
    p1Total += 1;
    document.getElementById('p1score').innerHTML = p1Total;
  } else {
    if (purpleLeft >= 800) {
      alert("Player 2 Wins");
      p2Total += 1;
      document.getElementById('p2score').innerHTML = p2Total;
    }
  }
}

// listen for d and right arrow keyup, move car and
// check for winner
const move = (event) => {
  if (event.keyCode == 39) {
    if (document.getElementById('hard') === false) {
      redLeft += 100;
      redcar.style.left = redLeft + "px";
      checkWinner();
    } else {
      redLeft += 40;
      redcar.style.left = redLeft + "px";
      checkWinner();
    }
  }
  if (event.keyCode == 68) {
    if (document.getElementById('hard') === false) {
      purpleLeft += 100;
      purplecar.style.left = purpleLeft + "px";
      checkWinner();
    } else {
      purpleLeft += 40;
      purplecar.style.left = purpleLeft + "px";
      checkWinner();
    }
  }
}

// call listen for keyup when page loads
document.onkeyup = move;
