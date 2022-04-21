/* eslint-disable indent */
// SPLASH SCREEN
const splash = document.querySelector('.splash');


splash.addEventListener('click', () => {
  splash.classList.add('display-none');
})




// GAME VARIABLES
const restartGame = document.querySelector('.reset')
const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width

// HIGHLIGHT BOARD WON

// AUDIO MENU OPTIONS
const audioElem = document.querySelector('audio')
const musicButton = document.querySelector('.musicButton')
audioElem.loop = true

musicButton.addEventListener('click', (event) => playPauseMusic(event, audioElem))


function playPauseMusic(event, audioElem) {
  audioElem.src = 'sounds/Intense.wav'
  if (audioElem.pause()) {
    audioElem.play()
  } else {
    audioElem.pause()
  }
}

// GAME VARIABLES
let playerTurn = ('X')

const swapTurns = function() {
  // Swap current player
  if (playerTurn === 'X') {
    playerTurn = 'O'; 
  }  else {
    playerTurn = 'X'; 
  }
};

let disabledBoard = []



let gridArray1 = []
let gridArray2 = []

let playerArray1 = [[],[],[],[],[],[],[],[],[]]
let playerArray2 = [[],[],[],[],[],[],[],[],[]]


let lastTurn = 0
let gameStart = true


//  BOARD NOT IN PLAY

// GAMESTART

 
function clearBoard(event, cell) {
  window.location.reload()
}
// console.log(clearBoard())

// WINNING COMBINATIONS

const winningCombinations = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];


// CHECK WIN
// loop through each of winning combinations === playerArray1/2
// check if in numberical 
const checkIfWin = playerArray =>
  winningCombinations.filter(possibility =>
    possibility.every(index => playerArray.includes(index))
  ).length > 0;

console.log(disabledBoard)

// Reversing the alert function
let alerted = false


function checkBoardWin(gridsToCheck) { // Parameter name of gridsToCheck
  winningCombinations.map(combination => { // Returns new array of each combination of winningCombinations 
    gridsToCheck.filter(gridId => { // Return an array of all values in gridsToCheck with an arrow function
      combination.map(combinationElement => { 
        combinationElement === gridId
      })
    })
    if (!alerted && gridsToCheck.length === 3) {
      alerted = true
      setTimeout(() => alert("GAME WON"),50)
      clearBoard()
    } else {
      console.log("no win")
    }
    if (gameStart === true) {
      return  
    }
  })
}
// DISPLAY
// const modal = document.querySelector('#myModal')
// const closeMessage = document.querySelector(".close")
// function highlightNextBoard() {
//   return (
//     (lastTurn === parseInt(parent).classList.add('highlight'))
//   )
// }



// OPEN BOARD OPTION (CLICK)
function clickAnywhere(parent, clickCell) {
  return ( 
    (clickCell === 0) &&
    ((gameStart) || lastTurn === parseInt(parent))
  )
}

// GAME SET UP / CLICK EVENT TO PLAY

function createGrid() {
  // creating an element div and adding a class called 'bigBoard' with 9 grids
  for (let index = 0; index < cellCount; index++) {
    const grids = document.createElement('div')
    grids.classList.add('grids')
    grids.setAttribute('id', index + 1)
    // console.log(grids)
  
    // creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 cell
    for (let index = 0; index < cellCount; index++) {
      const cell = document.createElement('div')
      // add class to style
      cell.classList.add('cells')
      // add id #
      cell.setAttribute('id', index + 1)
      // console.log(cell)
  
      // Add the cells
      grids.appendChild(cell)
  
      // Game Play - Click Event on the cell to begin play
      cell.addEventListener('click',(event) => playGame(event, cell))
      // console.log(cell)
  
        
    }
      
  
    grid.appendChild(grids) 
    // console.log(grids);
  }
}
  
createGrid()
  
// GAME PLAY (The click event passes through events and cell as argument and is called here)
function playGame(event, cell) {              
  // if no winner 
  // console.log(event.target.id)
  
  // lastTurn = 0. This number represents the parentElement.Id which is why the top left board is selected for the player to play.
  // This block runs and then at line 106 lastTurn becomes the cell.id number and runs again. 
  // How do you start game though? 
  // Create another function??

  // If game has started ignore lastTurn
  const parentElement = cell.parentElement
  const gridId = cell.parentElement.id
  const cellId = cell.id
  const clickCell = cell.innerHTML.length
  // let clickSymbol = cell.innerHTML
 
  // console.log(!disabledBoard.includes(parseInt(parent)), gridId)
  if ((clickAnywhere(gridId, clickCell)) && (!disabledBoard.includes(parseInt(gridId)))) {
    console.log(playerTurn)
    cell.innerHTML = playerTurn
    gameStart = false
    
    
    if (cell.innerHTML === ('X')) {
      playerArray1[gridId].push(parseInt(cellId))


      // If winner:
      console.log(playerArray1)
      if (checkIfWin(playerArray1[gridId]) === true) {
        gridArray1.push(parseInt(gridId))
        checkBoardWin(gridArray1) === true
        disabledBoard.push(parseInt(gridId))
        parentElement.classList.add('highlight-blue')
        setTimeout(() => alert("Player 1 claims board no. " + (gridId)), 400)
        gameStart = true
        console.log(parentElement)  
      }    
      // console.log(playerArray1)
    } else {
      // Pushing the 'O' into player array and checking win combinations.
      cell.innerHTML === ('O')
      playerArray2[gridId].push(parseInt(cellId))
      
      console.log(playerArray2)
      if (checkIfWin(playerArray2[gridId]) === true) {
        gridArray2.push(parseInt(gridId))
        checkBoardWin(gridArray2) === true
        disabledBoard.push(parseInt(gridId))
        parentElement.classList.add('highlight-red')
        setTimeout(() => alert("Player 2 claims board no. " + (gridId)), 400)
        gameStart = true
        console.log(parentElement)               
      }
    }
    
    lastTurn = parseInt(event.target.id)
    
    // console.log(disabledBoard.includes(parseInt(cellId)))
    
    if (!gameStart) {
      gameStart = disabledBoard.includes(parseInt(cellId))
      console.log(gameStart)
    }
    
    // console.log(event.target.id) //cell id

    swapTurns()        
                        
  }
  
        
  // clears the innerBoards cell
  restartGame.addEventListener('click', (event) => clearBoard(event, cell))
  

  
  console.log(event.target.innerHTML)
  console.log(event.target.parentElement)
}

// console.log(checkIfWin)
