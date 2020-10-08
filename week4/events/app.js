const player1 = "O";
const player2 = "X";

let board_full = false;
let board = ["", "", "", "", "", "", "", "", ""];

const board_container = document.querySelector(".board");

const winner_declaration = document.getElementById("winner");

// Check if the board is full
check_board_done = () => {
  let flag = true;
  board.forEach(element => {
    if (element != player1 && element != player2) {
      flag = false;
    }
  });
  board_full = flag;
};

// Compare 3 cells to see if they match
const check_line = (a, b, c) => {
  return (
    board[a] == board[b] &&
    board[b] == board[c] &&
    (board[a] == player1 || board[a] == player2)
  );
};

// Look for 3 matching cells horizontally, vertically, or diagonally
const checkMatch_3 = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      document.querySelector(`#cell_${i}`).classList.add("win");
      document.querySelector(`#cell_${i + 1}`).classList.add("win");
      document.querySelector(`#cell_${i + 2}`).classList.add("win");
      return board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      document.querySelector(`#cell_${i}`).classList.add("win");
      document.querySelector(`#cell_${i + 3}`).classList.add("win");
      document.querySelector(`#cell_${i + 6}`).classList.add("win");
      return board[i];
    }
  }
  if (check_line(0, 4, 8)) {
    document.querySelector("#cell_0").classList.add("win");
    document.querySelector("#cell_4").classList.add("win");
    document.querySelector("#cell_8").classList.add("win");
    return board[0];
  }
  if (check_line(2, 4, 6)) {
    document.querySelector("#cell_2").classList.add("win");
    document.querySelector("#cell_4").classList.add("win");
    document.querySelector("#cell_6").classList.add("win");
    return board[2];
  }
  return "";
};

// If there's a match, check for the winner and display message
const checkForWinner = () => {
  let result = checkMatch_3()
  if (result == player1) {
    winner.innerText = "Player 1 is the Winner!!";
    winner.classList.add("player1Win");
    board_full = true
  } else if (result == player2) {
    winner.innerText = "Player 2 is the Winner";
    winner.classList.add("player2Win");
    board_full = true
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
};

// Draw the game board
const render = () => {
  board_container.innerHTML = ""
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="cell_${i}" class="cell" onclick="addPlayerMove_1(${i})">${board[i]}</div>`
    if (e == player1 || e == player2) {
      document.querySelector(`#cell_${i}`).classList.add("occupied");
    }
  });
};

// Game logic for play
const gameLoop = () => {
  render();
  check_board_done();
  checkForWinner();
}

// Add move for player 1
const addPlayerMove_1 = e => {
  if (!board_full && board[e] == "") {
    board[e] = player1;
    gameLoop();
    addPlayerMove_2();
  }
};

// Add move for player 2
const addPlayerMove_2 = e => {
  if (!board_full && board[e] == "") {
    board[e] = player2;
    gameLoop();
    addPlayerMove_1();
  }
};

// Remove moves played and winner results - reset game to a blank board
const reset = () => {
  play_board = ["", "", "", "", "", "", "", "", ""];
  board_full = false;
  winner.classList.remove("player1Win");
  winner.classList.remove("player2Win");
  winner.classList.remove("draw");
  winner.innerText = "";
  render();
};

// Draw initial game board 
render();
