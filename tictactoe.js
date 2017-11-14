var winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var winner;
var thisIsAWinningState;

/** Tests whether a boardState is a winning game
 * @wins
 * @param boardstate - an array of a single boardState.
 * @param player - the player who most recently played - firsPlayer or secondPlayer
 */
function isThereAWinner(boardstate, player) {
  thisIsAWinningState = false;
  for (i = 0; i < winningStates.length; i++) {
    if (boardstate[winningStates[i][0]] !== null && boardstate[winningStates[i][0]] === boardstate[winningStates[i][1]] && boardstate[winningStates[i][1]] === boardstate[winningStates[i][2]]) {
      thisIsAWinningState = true;
      winner = player;
    }
  }
}


//
//VARIABLES
//

var firstPlayer = {
  "symbol":"x",
  "name":"1st Player",
};

var secondPlayer = {
  "symbol":"o",
  "name":"2nd Player",
};

var currentPlayer = firstPlayer;
var notOpponent;

//Used in turnNum function for Tracking the number of turns
var turnNum = 0;

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
  firstPlayer.name = "1st Player";
  secondPlayer.name = "2nd Player";
  $('#number').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.headers').toggle('.hidden');
  $('.player-1-header').html("<h1>" + firstPlayer.name + "'s Turn</h1>");
  $('.player-2-header').html("<h1>" + secondPlayer.name + "'s Turn</h1>");
  twoPlayerGame();
});

//
//GAME END OPTIONs
//
$('.yes').click(function() {
  resetGame();
  $('.game-end').toggle('.hidden');
  $('.gameboard, .headers').toggle('.hidden');
  if($('.player-2-header').html() === "<h1>Computer's Turn</h1>" || $('.player-2-header').html() === "<h1>2nd Player's Turn</h1>") {
    $('.player-1-header, .player-2-header').toggle('.hidden');
  }

});

$('.no').click(function() {
  resetGame();
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
  firstPlayer.name = 'You';
  secondPlayer.name = 'Computer';
  // current(turnNum);
  $('#order').toggle('.hidden');
  $('#difficulty-div').toggle('.hidden');
  $('.player-1-header').html("<h1>" + firstPlayer.name + "'re Turn</h1>");
  $('.player-2-header').html("<h1>" + secondPlayer.name + "'s Turn</h1>");
});

//Click 'Second Player'
$('.second-player').click(function() {
  firstPlayer.name = 'Computer';
  secondPlayer.name = 'You';
  // current(turnNum);
  $('#order').toggle('.hidden');
  $('#difficulty-div').toggle('.hidden');
  $('.player-1-header').html("<h1>" + firstPlayer.name + "'s Turn</h1>");
  $('.player-2-header').html("<h1>" + secondPlayer.name + "'re Turn</h1>");
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
  $('.headers').toggle('.hidden');
  impossibleOnePlayerGame();
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
  if (currentPlayer.name === 'Computer') {
    easyComputerTurn();
  }
  else {
    playerTurn();
  }
}

/** The Combination of the pieces for playing against the computer on Impossible level, where the computer places randomly
* @easyOnePlayerGame
*/
function impossibleOnePlayerGame() {
  console.log("impossibleOnePlayerGame called.");
  if (currentPlayer.name === 'Computer') {
    aiTurn();
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
    activatePlacement(boardPosition, currentPlayer);
    // singlePlayerTurn();
  }
  else {
    easyComputerTurn();
  }
}

/** Function for players to enter their symbol into a box
* @playerTurn
*/
function playerTurn() {
  console.log('playerTurn called');
  //Clicking Boxes
  $('#box0').click(function() {
    boardPosition = 0;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box1').click(function() {
    boardPosition = 1;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box2').click(function() {
    boardPosition = 2;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box3').click(function() {
    boardPosition = 3;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box4').click(function() {
    boardPosition = 4;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box5').click(function() {
    boardPosition = 5;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box6').click(function() {
    boardPosition = 6;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box7').click(function() {
    boardPosition = 7;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });

  $('#box8').click(function() {
    boardPosition = 8;
    if (liveBoard[boardPosition] === null) {
      activatePlacement(boardPosition, currentPlayer);
    }
  });
}


/** Everything that needs to happen when someone places their symbol on the board
* @activatePlacement
* @param boardPosition
* @param player
*/
function activatePlacement(boardPosition, player) {
  console.log("activatePlacement called.");
  boxID = "#box" + boardPosition;
  liveBoard.splice(boardPosition, 1, player.symbol);
  $(boxID).html(player.symbol);
  isThereAWinner(liveBoard, player.name);
  gameEndOrNot();
}

/** After a player has played, this determines whether a game has ended yet. If so, was it a win or draw. If not, what happens next.
* @gameEndOrNot
**/
function gameEndOrNot() {
  console.log('gameEndOrNot called');
  if(thisIsAWinningState === true) {
    gameWon();
  }
  else if (liveBoard.includes(null) === false ) {
    gameDraw();
  }
  else {
    console.log("gameEndOrNot final else called. changeCurrentPlayer and nextTurn");
    turnNum++;
    changeCurrentPlayer();
    nextTurn();
    $('.player-1-header, .player-2-header').toggle('.hidden');
  }
}

/** It calls the next turn if the game is not over.
* @nextTurn
*/
function nextTurn() {
  console.log ('nextTurn called');
  if(currentPlayer.name === "Computer" && difficultyLevel === "easy") {
    easyComputerTurn();
  }
  else if(currentPlayer.name === "Computer" && difficultyLevel === "impossible") {
    aiTurn();
  }
  else {
    playerTurn();
  }
}


/** Changes the current player after a turn has been played, but the game is not over.
* @changeCurrentPlayer
**/
function changeCurrentPlayer() {
  console.log("changeCurrentPlayer called");
    if(currentPlayer == firstPlayer) {
      currentPlayer = secondPlayer;
      currentOpponent = firstPlayer;
    }
    else if (currentPlayer == secondPlayer) {
      currentPlayer = firstPlayer;
      currentOpponent = secondPlayer;
    }
}


/** When a game is won, this function displays the winner and asks if they want to play again. If yes, it resets the game. If no, it resets everything and sends them to the player-number screen.
 * @gameWon
 */
function gameWon() {
  if(currentPlayer.name === "You") {
    $('.win-draw-div').html("<h3 class='winner-or-draw'>" + currentPlayer.name + " win!!!</h3>");
    $('.headers').toggle('.hidden');
    $('.gameboard').toggle('.hidden');
    $('.game-end').toggle('.hidden');
  }
  else {
  $('.win-draw-div').html("<h3 class='winner-or-draw'>" + currentPlayer.name + " wins!!!</h3>");
  $('.headers').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.game-end').toggle('.hidden');
}
}

/** If the game is a draw, it tells you so and offers another game.
 * @gameDraw
 */
function gameDraw() {
  $('.win-draw-div').html("<h3 class='winner-or-draw'>It's a draw!</h3>");
  $('.headers').toggle('.hidden');
  $('.gameboard').toggle('.hidden');
  $('.game-end').toggle('.hidden');
}

/** Resets all the variables related to a game.
 * @resetGame
 */
function resetGame() {
  console.log("resetGame was called.");
  turnNum = 0;
  liveBoard = [null, null, null, null, null, null, null, null, null];
  currentPlayer = firstPlayer;
  currentOpponent = secondPlayer;
  thisIsAWinningState = undefined;
  boardPosition = undefined;
  emptySquares = [];
  boxID = undefined;
  $('.box').html("");

}


//
//AI TURN FOR HARDER Play
//

/** Lays out the conditions for the AI to decide where to place on the board
* @aiTurn
*/
function aiTurn () {
  console.log('aiTurn Called');
  var randomCorner = Math.floor(Math.random() * 5);
  var cornerArray = [0, 1, 6, 8];
  if (turnNum === 0) {
    activatePlacement(cornerArray[randomCorner], currentPlayer);
  }
  else if(turnNum === 1 && liveBoard[4] === null){
    activatePlacement(4, currentPlayer);
  }
  else if(turnNum === 1 && liveBoard[4] !== null){
    activatePlacement(cornerArray[randomCorner], currentPlayer);
  }
  else if (turnNum === 3 && liveBoard[0] === currentOpponent.symbol && liveBoard[8] === currentOpponent.symbol) {
    activatePlacement(1, currentPlayer);
  }
  else if (turnNum === 3 && liveBoard[2] === currentOpponent.symbol && liveBoard[6] === currentOpponent.symbol) {
    activatePlacement(5, currentPlayer);
  }
  else if(liveBoard[0] === currentPlayer.symbol && liveBoard[1] === currentPlayer.symbol && liveBoard[2] === null) {
    activatePlacement(2, currentPlayer);
  }
  else if (liveBoard[1] === currentPlayer.symbol && liveBoard[2] === currentPlayer.symbol && liveBoard[0] === null) {
    activatePlacement(0, currentPlayer);
  }
  else if (liveBoard[0] === currentPlayer.symbol && liveBoard[2] === currentPlayer.symbol && liveBoard[1] === null) {
    activatePlacement(1, currentPlayer);
  }
  else if (liveBoard[3] === currentPlayer.symbol && liveBoard[4] === currentPlayer.symbol && liveBoard[5] === null) {
    activatePlacement(5, currentPlayer);
  }
  else if (liveBoard[4] === currentPlayer.symbol && liveBoard[5] === currentPlayer.symbol && liveBoard[3] === null) {
    activatePlacement(3, currentPlayer);
  }
  else if (liveBoard[6] === currentPlayer.symbol && liveBoard[7] === currentPlayer.symbol && liveBoard[8] === null) {
    activatePlacement(8, currentPlayer);
  }
  else if (liveBoard[7] === currentPlayer.symbol && liveBoard[8] === currentPlayer.symbol && liveBoard[6] === null) {
    activatePlacement(6, currentPlayer);
  }
  else if (liveBoard[6] === currentPlayer.symbol && liveBoard[8] === currentPlayer.symbol && liveBoard[7] === null) {
    activatePlacement(7, currentPlayer);
  }
  else if (liveBoard[0] === currentPlayer.symbol && liveBoard[3] === currentPlayer.symbol && liveBoard[6] === null) {
    activatePlacement(6, currentPlayer);
  }
  else if (liveBoard[3] === currentPlayer.symbol && liveBoard[6] === currentPlayer.symbol && liveBoard[0] === null) {
    activatePlacement(0, currentPlayer);
  }
  else if (liveBoard[0] === currentPlayer.symbol && liveBoard[6] === currentPlayer.symbol && liveBoard[3] === null) {
    activatePlacement(3, currentPlayer);
  }
  else if (liveBoard[1] === currentPlayer.symbol && liveBoard[4] === currentPlayer.symbol && liveBoard[7] === null) {
    activatePlacement(7, currentPlayer);
  }
  else if (liveBoard[4] === currentPlayer.symbol && liveBoard[7] === currentPlayer.symbol && liveBoard[1] === null) {
    activatePlacement(1, currentPlayer);
  }
  else if (liveBoard[2] === currentPlayer.symbol && liveBoard[5] === currentPlayer.symbol && liveBoard[8] === null) {
    activatePlacement(8, currentPlayer);
  }
  else if (liveBoard[5] === currentPlayer.symbol && liveBoard[8] === currentPlayer.symbol && liveBoard[2] === null) {
    activatePlacement(2, currentPlayer);
  }
  else if (liveBoard[2] === currentPlayer.symbol && liveBoard[8] === currentPlayer.symbol && liveBoard[5] === null) {
    activatePlacement(5, currentPlayer);
  }
  else if (liveBoard[0] === currentPlayer.symbol && liveBoard[4] === currentPlayer.symbol && liveBoard[8] === null) {
    activatePlacement(8, currentPlayer);
  }
  else if (liveBoard[4] === currentPlayer.symbol && liveBoard[8] === currentPlayer.symbol && liveBoard[0] === null) {
    activatePlacement(0, currentPlayer);
  }
  else if (liveBoard[2] === currentPlayer.symbol && liveBoard[4] === currentPlayer.symbol && liveBoard[6] === null) {
    activatePlacement(6, currentPlayer);
  }
  else if (liveBoard[4] === currentPlayer.symbol && liveBoard[6] === currentPlayer.symbol && liveBoard[2] === null) {
    activatePlacement(2, currentPlayer);
  }
  if(liveBoard[0] === currentOpponent.symbol && liveBoard[1] === currentOpponent.symbol && liveBoard[2] === null) {
    activatePlacement(2, currentPlayer);
  }
  else if (liveBoard[1] === currentOpponent.symbol && liveBoard[2] === currentOpponent.symbol && liveBoard[0] === null) {
    activatePlacement(0, currentPlayer);
  }
  else if (liveBoard[0] === currentOpponent.symbol && liveBoard[2] === currentOpponent.symbol && liveBoard[1] === null) {
    activatePlacement(1, currentPlayer);
  }
  else if (liveBoard[3] === currentOpponent.symbol && liveBoard[4] === currentOpponent.symbol && liveBoard[5] === null) {
    activatePlacement(5, currentPlayer);
  }
  else if (liveBoard[4] === currentOpponent.symbol && liveBoard[5] === currentOpponent.symbol && liveBoard[3] === null) {
    activatePlacement(3, currentPlayer);
  }
  else if (liveBoard[6] === currentOpponent.symbol && liveBoard[7] === currentOpponent.symbol && liveBoard[8] === null) {
    activatePlacement(8, currentPlayer);
  }
  else if (liveBoard[7] === currentOpponent.symbol && liveBoard[8] === currentOpponent.symbol && liveBoard[6] === null) {
    activatePlacement(6, currentPlayer);
  }
  else if (liveBoard[6] === currentOpponent.symbol && liveBoard[8] === currentOpponent.symbol && liveBoard[7] === null) {
    activatePlacement(7, currentPlayer);
  }
  else if (liveBoard[0] === currentOpponent.symbol && liveBoard[3] === currentOpponent.symbol && liveBoard[6] === null) {
    activatePlacement(6, currentPlayer);
  }
  else if (liveBoard[3] === currentOpponent.symbol && liveBoard[6] === currentOpponent.symbol && liveBoard[0] === null) {
    activatePlacement(0, currentPlayer);
  }
  else if (liveBoard[0] === currentOpponent.symbol && liveBoard[6] === currentOpponent.symbol && liveBoard[3] === null) {
    activatePlacement(3, currentPlayer);
  }
  else if (liveBoard[1] === currentOpponent.symbol && liveBoard[4] === currentOpponent.symbol && liveBoard[7] === null) {
    activatePlacement(7, currentPlayer);
  }
  else if (liveBoard[4] === currentOpponent.symbol && liveBoard[7] === currentOpponent.symbol && liveBoard[1] === null) {
    activatePlacement(1, currentPlayer);
  }
  else if (liveBoard[2] === currentOpponent.symbol && liveBoard[5] === currentOpponent.symbol && liveBoard[8] === null) {
    activatePlacement(8, currentPlayer);
  }
  else if (liveBoard[5] === currentOpponent.symbol && liveBoard[8] === currentOpponent.symbol && liveBoard[2] === null) {
    activatePlacement(2, currentPlayer);
  }
  else if (liveBoard[2] === currentOpponent.symbol && liveBoard[8] === currentOpponent.symbol && liveBoard[5] === null) {
    activatePlacement(5, currentPlayer);
  }
  else if (liveBoard[0] === currentOpponent.symbol && liveBoard[4] === currentOpponent.symbol && liveBoard[8] === null) {
    activatePlacement(8, currentPlayer);
  }
  else if (liveBoard[4] === currentOpponent.symbol && liveBoard[8] === currentOpponent.symbol && liveBoard[0] === null) {
    activatePlacement(0, currentPlayer);
  }
  else if (liveBoard[2] === currentOpponent.symbol && liveBoard[4] === currentOpponent.symbol && liveBoard[6] === null) {
    activatePlacement(6, currentPlayer);
  }
  else if (liveBoard[4] === currentOpponent.symbol && liveBoard[6] === currentOpponent.symbol && liveBoard[2] === null) {
    activatePlacement(2, currentPlayer);
  }

  else {
    console.log("final else called");
    var emptySquares = [];
    for(i=0; i<liveBoard.length; i++) {
      if(liveBoard[i] === null) {
        emptySquares.push(i);
      }
    }
    console.log("emptySquares = " + emptySquares);
    if(emptySquares.length === 1) {
      console.log("emptySquares.length = 1");
      activatePlacement(emptySquares[0], currentPlayer);
    }
    else {
      randomPlacement(emptySquares);
    }
  }

/** Makes a random placement based on the empty spaces available defined in the emptySquares array
* @randomPlacement
* @param emptySquares - the array that holds the current empty spaces on the board. It's created in final else of the aiTurn()
*/
function randomPlacement (emptySquares) {
  boardPosition = emptySquares[Math.floor(Math.random() * (emptySquares.length+1))];
  console.log('boardPosition = ' + boardPosition + ' AND currentPlayer = ' + currentPlayer.name);
  if (liveBoard[boardPosition] === null) {
    activatePlacement(boardPosition, currentPlayer);
  }
  else {
    randomPlacement(emptySquares);
  }
}


}
// function getEmptySquares() {
//   var emptySquares = [];
//   for(i=0; i<liveBoard.length; i++) {
//     if(liveBoard[i] === null) {
//       emptySquares.push(i);
//     }
//   }
// }
