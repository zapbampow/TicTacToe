//
//VARIABLES
//

//Player Names get set based on 1/2 player game and 1st/2nd player if 1 player game.
var firstPlayerName;
var secondPlayerName;

// The Current Player's name is tracked for displaying turn order AND knowing which symbol to enter on any given turn
var currentPlayerName;

/** The current symbol to play is based on the currentPlayerName
* @currentSymbol
* @param {string} currentPlayerName - this is pulled from the variable.
*/
var currentSymbol = function(currentPlayerName) {
  if (currentPlayerName === firstPlayerName) {
    return 'x';
  }
  else {
    return 'o';
  }
};

//Used in turnNum function for Tracking the number of turns
var turnNum = 1;

//The array of the board
var liveBoard = [null, null, null, null, null, null, null, null, null];

//
var boardPosition;

var boxID;





//
// TWO PLAYER GAME - this is the easier portion of the code. So I'm sticking it at the top because that feels more organized to me.
//

// OPENING SCREEN: Click '2 Players' on opening screen. You go straight to the board.
$('.two-players').click(function() {
  $('#number').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.headers').toggle('.hidden');
  firstPlayerName = "Player One";
  secondPlayerName = "Player Two";
  $('.player-1-header').html("<h1>" + firstPlayerName + "'s Turn</h1>");
  $('.player-2-header').html("<h1>" + secondPlayerName + "'s Turn</h1>");
  twoPlayerGame();
});

//
//GAME END OPTIONs
//
$('.yes').click(function() {
  $('.game-end').toggle('.hidden');
  $('.gameboard, .headers').toggle('.hidden');
});

$('.no').click(function() {
  $('.game-end').toggle('.hidden');
  $('#number').toggle('.hidden');
});


//
// ONE PLAYER GAME - This is the harder part.
//

// Click '1 Player'
$('.one-player').click(function() {
  $('#number').toggle('.hidden');
  $('#order').toggle('.hidden');
});

//Options for Player Order
// Click 'First Player'
$('.first-player').click(function() {
  firstPlayerName = 'You';
  secondPlayerName = 'Computer';
  currentPlayer(turnNum);
  $('#order').toggle('.hidden');
  $('#difficulty-div').toggle('.hidden');
  $('.player-1-header').html("<h1>" + firstPlayerName + "'re Turn</h1>");
  $('.player-2-header').html("<h1>" + secondPlayerName + "'s Turn</h1>");
});

//Click 'Second Player'
$('.second-player').click(function() {
  firstPlayerName = 'Computer';
  secondPlayerName = 'You';
  currentPlayer(turnNum);
  $('#order').toggle('.hidden');
  $('#difficulty-div').toggle('.hidden');
  $('.player-1-header').html("<h1>" + firstPlayerName + "'s Turn</h1>");
  $('.player-2-header').html("<h1>" + secondPlayerName + "'re Turn</h1>");
});

//Options for Difficulty Level
//Easy
$('.easy').click(function() {
  difficultyLevel = 'easy';
  $('#difficulty-div').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.headers').toggle('.hidden');
  easyOnePlayerGame();
});

//Impossible
$('.impossible').click(function() {
  difficultyLevel = 'impossible';
  $('#difficulty-div').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
});



//
// THE FUNCTIONS
//

/** Function for the two player game. It simply calls the playerTurn function
* @twoPlayerGame
*/
function twoPlayerGame() {
  console.log("twoPlayerGame called.");
  playerTurn();
}

/** The Combination of the pieces for playing against the computer on Easy level, where the computer places randomly
* @easyOnePlayerGame
*/
function easyOnePlayerGame() {
  console.log("easyOnePlayerGame called.");
  if (currentPlayerName === 'Computer') {
    easyComputerTurn();
  }
  else {
    playerTurn();
  }
}

/** The computer plays in random positions
 * @easyComputerTurn
 */
function easyComputerTurn() {
  console.log("easyComputerTurn called.");
  boardPosition = Math.floor(Math.random() * 9);
  console.log("boardPosition is " + boardPosition);
  if (liveBoard[boardPosition] === null) {
    activatePlacement();
  }
  else {
    easyComputerTurn();
  }
}

/** Function for players to enter their symbol into a box and check for winner
* @playerTurn
*/
function playerTurn() {
  //Clicking Boxes
  $('#box0').click(function() {
    boardPosition = 0;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box1').click(function() {
    boardPosition = 1;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box2').click(function() {
    boardPosition = 2;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box3').click(function() {
    boardPosition = 3;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box4').click(function() {
    boardPosition = 4;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box5').click(function() {
    boardPosition = 5;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box6').click(function() {
    boardPosition = 6;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box7').click(function() {
    boardPosition = 7;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });

  $('#box8').click(function() {
    boardPosition = 8;
    if (liveBoard[boardPosition] === null) {
      activatePlacement();
    }
  });
}

/** Everything that needs to happen when someone places their symbol on the board
* @activatePlacement
*/
function activatePlacement() {
  console.log("activatePlacement called.");
  turnTracker();
  currentPlayer(turnNum);
  boxID = "#box" + boardPosition;
  liveBoard.splice(boardPosition, 1, currentSymbol(currentPlayerName));
  $(boxID).html(currentSymbol(currentPlayerName));
  checkForWinner();
}

/** Keeps track of which turn it is and the name of the current player
 * @turnTracker
 **/
function turnTracker() {
  turnNum++;
  console.log("turnTracker called. New turnNum = " + turnNum);
}

/** Keeps track of current player name
 * @turnTracker
 * @param {number} turnNum - The count of the number of turns is pulled from the turnNum variable.
 **/
 function currentPlayer(turnNum) {
   console.log("currentPlayer(turnNum) called.");
  if (turnNum % 2 === 1) {
    currentPlayerName = firstPlayerName;
  } else {
    currentPlayerName = secondPlayerName;
  }
}

/** Checks for whether the most recent move was a winning move. Then it switches players.
 * @checkForWinner
 */
function checkForWinner() {
  //Checks whether the most recent move created a winner
  if (liveBoard[0] === currentSymbol(currentPlayerName) && liveBoard[1] === currentSymbol(currentPlayerName) && liveBoard[2] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 1");
    gameWon();
  } else if (liveBoard[3] === currentSymbol(currentPlayerName) && liveBoard[4] === currentSymbol(currentPlayerName) && liveBoard[5] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 2");
    gameWon();
  } else if (liveBoard[6] === currentSymbol(currentPlayerName) && liveBoard[7] === currentSymbol(currentPlayerName) && liveBoard[8] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 3");
    gameWon();
  } else if (liveBoard[0] === currentSymbol(currentPlayerName) && liveBoard[4] === currentSymbol(currentPlayerName) && liveBoard[8] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 4");
    gameWon();
  } else if (liveBoard[2] === currentSymbol(currentPlayerName) && liveBoard[4] === currentSymbol(currentPlayerName) && liveBoard[6] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 5");
    gameWon();
  } else if (liveBoard[1] === currentSymbol(currentPlayerName) && liveBoard[4] === currentSymbol(currentPlayerName) && liveBoard[7] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 6");
    gameWon();
  } else if (liveBoard[0] === currentSymbol(currentPlayerName) && liveBoard[3] === currentSymbol(currentPlayerName) && liveBoard[6] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 7");
    gameWon();
  } else if (liveBoard[2] === currentSymbol(currentPlayerName) && liveBoard[5] === currentSymbol(currentPlayerName) && liveBoard[8] === currentSymbol(currentPlayerName)) {
    console.log("Current player is the winner. 8");
    gameWon();
  } else if (liveBoard.includes(null) == true) {
    console.log("No winner yet! Keep playing");
    switchPlayers();
    console.log("New currentPlayerName is " + currentPlayerName);
  } else {
    console.log("Draw. Well played both players.");
    gameDraw();
  }
}

/** The function for switching between players. It finishes by changing the page styling to show whose turn it is.
 * @switchPlayers
 */
function switchPlayers() {
  console.log("switchPlayers got called");
  $('.player-1-header, .player-2-header').toggle('.hidden');
}

/** When a game is won, this function displays the winner and asks if they want to play again. If yes, it resets the game. If no, it resets everything and sends them to the player-number screen.
 * @gameWon
 */
function gameWon() {
  $('.win-draw-div').html("<h3 class='winner-or-draw'>" + currentPlayerName + " wins!!!</h3>");
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
  turnNum = 1;
  liveBoard = [null, null, null, null, null, null, null, null, null];
  difficultyLevel = undefined;
  onePersonPlayerOrder = undefined;
  $('.box').html("");
}
