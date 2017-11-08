// Universal Functions

/** Keeps track of the current symbol being played
* var currentSymbol
*/
var currentSymbol = function(playerName) {
  console.log("currentSymbol called.");
  if (playerName === "Player One") {
    return 'x';
  }
  else {
    return 'o';
  }
};

/** Keeps track of which turn it is and the name of the current player
 * @turnTracker
 **/
function turnTracker() {
  console.log("turnTracker called. turnNum = " + turnNum);
  turnNum++;
}

/** Keeps track of current player name
 * @turnTracker
 **/
 function currentPlayerName () {
  if (turnNum % 2 === 1) {
    playerName = playerOne;
  } else {
    playerName = playerTwo;
  }
}

/** The function for switching between players. It finishes by changing the page styling to show whose turn it is.
 * @switchPlayers
 */
function switchPlayers() {
  console.log("switchPlayers got called");
  $('.player-1-header, .player-2-header').toggle('.hidden');
}

/** Function for players to enter their symbol into a box and check for winner
* @playerTurn
*/
function playerTurn() {
  //Clicking Boxes
  $('#box0').click(function() {
    boardPosition = 0;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box1').click(function() {
    boardPosition = 1;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box2').click(function() {
    boardPosition = 2;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box3').click(function() {
    boardPosition = 3;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box4').click(function() {
    boardPosition = 4;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box5').click(function() {
    boardPosition = 5;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box6').click(function() {
    boardPosition = 6;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box7').click(function() {
    boardPosition = 7;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });

  $('#box8').click(function() {
    boardPosition = 8;
    if (liveBoard[boardPosition] === null) {
      turnTracker();
      boxID = "#box" + boardPosition;
      liveBoard.splice(boardPosition, 1, currentPlayer);
      $(boxID).html(currentPlayer);
      checkForWinner();
    }
  });
}

/** Checks for whether the most recent move was a winning move. Then it switches players.
 * @checkForWinner
 */
function checkForWinner() {
  //Checks whether the most recent move created a winner
  if (liveBoard[0] === currentPlayer && liveBoard[1] === currentPlayer && liveBoard[2] === currentPlayer) {
    console.log("Current player is the winner. 1");
    gameWon();
  } else if (liveBoard[3] === currentPlayer && liveBoard[4] === currentPlayer && liveBoard[5] === currentPlayer) {
    console.log("Current player is the winner. 2");
    gameWon();
  } else if (liveBoard[6] === currentPlayer && liveBoard[7] === currentPlayer && liveBoard[8] === currentPlayer) {
    console.log("Current player is the winner. 3");
    gameWon();
  } else if (liveBoard[0] === currentPlayer && liveBoard[4] === currentPlayer && liveBoard[8] === currentPlayer) {
    console.log("Current player is the winner. 4");
    gameWon();
  } else if (liveBoard[2] === currentPlayer && liveBoard[4] === currentPlayer && liveBoard[6] === currentPlayer) {
    console.log("Current player is the winner. 5");
    gameWon();
  } else if (liveBoard[1] === currentPlayer && liveBoard[4] === currentPlayer && liveBoard[7] === currentPlayer) {
    console.log("Current player is the winner. 6");
    gameWon();
  } else if (liveBoard[0] === currentPlayer && liveBoard[3] === currentPlayer && liveBoard[6] === currentPlayer) {
    console.log("Current player is the winner. 7");
    gameWon();
  } else if (liveBoard[2] === currentPlayer && liveBoard[5] === currentPlayer && liveBoard[8] === currentPlayer) {
    console.log("Current player is the winner. 8");
    gameWon();
  } else if (liveBoard.includes(null) == true) {
    console.log("No winner yet! Keep playing");
    switchPlayers();
    console.log("New current is " + currentPlayer + " AND new waiting player is " + waitingPlayer);
  } else {
    console.log("Draw. Well played both players.");
    gameDraw();
  }
}

/** When a game is won, this function displays the winner and asks if they want to play again. If yes, it resets the game. If no, it resets everything and sends them to the player-number screen.
 * @gameWon
 */
function gameWon() {
  $('.win-draw-div').html("<h3 class='winner-or-draw'>" + playerName + " wins!!!</h3>");
  $('.headers').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.game-end').toggle('.hidden');
  resetGame();
}

/** If the game is a draw, it tells you so and offers another game.
 * @gameDraw
 */
function gameDraw() {
  $('.win-draw-div').html("<h3 class='winner-or-draw'>It's a draw!</h3>");
  $('.headers').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.game-end').toggle('.hidden');
  resetGame();
}

/** Resets all the variables related to a game.
 * @resetGame
 */
function resetGame() {
  console.log("resetGame was called.");
  turnNum = 0;
  liveBoard = [null, null, null, null, null, null, null, null, null];
  difficultyLevel = undefined;
  onePersonPlayerOrder = undefined;
  $('.box').html("");
}
