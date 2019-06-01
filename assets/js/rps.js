// Global vars
var rpsJumbotron = document.getElementById('rpsJumbo');
var rpsCard = document.getElementById('rps-card');

function gameStart(e) {
  // check if the user presses r, p, or s key.
  // if they do log the key and hide jumbotron.
  // any other key should log a message that says 'bad key'.
  if (e.key === 'r' || e.key === 'p' || e.key === 's') {
    console.log(e.key);
    rpsJumbotron.style.display = 'none';
    rpsCard.style.display = 'flex';
  } else if (e.key === 'q') {
    console.log(e.key);
    rpsJumbotron.style.display = 'block';
    rpsCard.style.display = 'none';
  }

  else {
    console.error('You pressed wrong key. Try again!');
  }
}
// the game starts  
document.onkeyup = gameStart; 