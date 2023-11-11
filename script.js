let currentPlayer = "🔴";
let moves = 0;
let gameActive = true;
let scores = { "🔴": 0, "🟡": 0 };

function makeMove(cell) {
  if (gameActive && !cell.innerHTML) {
    cell.classList.add(currentPlayer === "🔴" ? 'x' : 'o');
    cell.innerHTML = currentPlayer;
    moves++;
    if (checkWinner()) {
      gameActive = false;
      scores[currentPlayer]++;
      updateScore();
      setTimeout(function() {
        alert(currentPlayer + " a gagné!");
        resetGame();
      }, 100);
    } else if (moves === 9) {
      gameActive = false;
      setTimeout(function() {
        alert("Match nul!");
        resetGame();
      }, 100);
    } else {
      currentPlayer = currentPlayer === "🔴" ? "🟡" : "🔴";
    }
  }
}

function checkWinner() {
  // Your existing checkWinner function
}

function resetGame() {
  // Your existing resetGame function
}

function updateScore() {
  document.getElementById('scoreX').innerText = "Score 🔴: " + scores["🔴"];
  document.getElementById('scoreO').innerText = "Score 🟡: " + scores["🟡"];
}
= 
