var _randomNumber = Math.floor(Math.random() * (100 - 0)) + 0;


function checkNumber () {
  var guess = document.getElementById("guess").value;
  if (guess == _randomNumber) {
    alert('WELL DONE YOU GOT IT!');
  }
  else if ( guess > _randomNumber ) {
    document.getElementById("right-number").innerHTML = guess;
  }
  else if (guess < _randomNumber ){
    document.getElementById("left-number").innerHTML = guess;
  }
}
