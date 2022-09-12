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

// AUDIO MENU OPTIONS
const audioMusic = document.querySelector('#music')
const musicButton = document.querySelector('.musicButton')
audioMusic.muted = true
audioMusic.loop = true
audioMusic.src = 'sounds/Alpha.wav'

let muted = true

function musicToggle() {
  muted = !muted
  if (muted) {
    audioMusic.muted = true
    audioMusic.loop = false
    musicButton.textContent = 'UNMUTE'
  } else if (!muted) {
    audioMusic.muted = false
    audioMusic.play()
    audioMusic.loop = true
    musicButton.textContent = "MUTE"
  }
 }

musicButton.addEventListener('click', musicToggle)
musicButton.textContent = 'UNMUTE'



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

const disabledBoards = []



const gridArray1 = []
const gridArray2 = []

const playerArray1 = [[],[],[],[],[],[],[],[],[]]
const playerArray2 = [[],[],[],[],[],[],[],[],[]]


let lastTurn = 0
let gameStart = true


// RESTART GAME

function clearBoard() {
  setTimeout(() => window.location.reload(), 50)
}


// WINNING COMBINATIONS

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


// CHECK WIN
// loop through each of winning combinations === playerArray1/2
// check if in numberical 
const checkIfWin = playerArray =>
  winningCombinations.filter(possibility =>
    possibility.every(index => playerArray.includes(index))
  ).length > 0;


// Reversing the alert function to stop the splashWin to appear 8 times (due to checking win combo checks)
let alerted = false

const splashWin = document.querySelector('.splashWin.none') 

function checkBoardWin(gridsToCheck) { // Parameter name of gridsToCheck
  winningCombinations.map(combination => { // Returns new array of each combination of winningCombinations 
    gridsToCheck.filter(gridId => { // Return an array of all values in gridsToCheck with an arrow function
      combination.map(combinationElement => { 
        combinationElement === gridId
      })
    })
    if (!alerted && gridsToCheck.length === 3) {
      alerted = true
      setTimeout(() => splashWin.classList.remove('none'),50)
      setTimeout(() => (clearBoard()),5000) 
    } else {
      console.log("no win")
    }
    if (gameStart === true) {
      return  
    }
  })
}

// SCORES

const scoresListX = document.querySelector('.player-1')
const scoresListO = document.querySelector('.player-2')


// GAME SET UP / CLICK EVENT TO PLAY
function createGrid() {
  // creating an element div and adding a class called 'bigBoard' with 9 grids
  for (let index = 0; index < cellCount; index++) {
    const grids = document.createElement('div')
    // ! Adds a unique class to the grid to identify it.
    grids.classList.add(`grids-${index}`)
    grids.setAttribute('id', index)
    
  
    // creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 cell
    for (let index = 0; index < cellCount; index++) {
      const cell = document.createElement('div')
      // add class to style
      cell.classList.add('cells')
      // add id #
      cell.setAttribute('id', index)
      // Add the cells
      grids.appendChild(cell)
      // Game Play - Click Event on the cell to begin play
      cell.addEventListener('click',(event) => playGame(event, cell))   
    }
    grid.appendChild(grids) 
  }
}
createGrid()

// OPEN BOARD OPTION (CLICK)
function clickAnywhere(parent, clickCell) {
  return ( 
    (clickCell === 0) &&
    ((gameStart) || lastTurn === parseInt(parent))
  )
}
  
// GAME PLAY (The click event passes through events and cell as argument and is called here)
function playGame(event, cell) {    

  // If game has started ignore lastTurn
  const parentElement = cell.parentElement
  const gridId = cell.parentElement.id
  const cellId = cell.id
  const clickCell = cell.innerHTML.length
  const highlightGrids = parentElement

  if ((clickAnywhere(gridId, clickCell)) && (!disabledBoards.includes(parseInt(gridId)))) {
    cell.innerHTML = playerTurn
    gameStart = false
    
    // ! Added this code to clear the previous grid with coloured background.
    if (!gameStart) {
      document.querySelector(`.grids-${lastTurn}`).style.backgroundColor = 'transparent'
    }
    
    if (cell.innerHTML === ('X')) {
      playerArray1[gridId].push(parseInt(cellId))
 
      if (checkIfWin(playerArray1[gridId]) === true) {
        gridArray1.push(parseInt(gridId))
        checkBoardWin(gridArray1) === true
        disabledBoards.push(parseInt(gridId))
        parentElement.classList.add('highlight-red')
        scoresListX.innerHTML = gridArray1.length
        gameStart = true
      }    
 
    } else {
      // Pushing the 'O' into player array and checking win combinations.
      cell.innerHTML === ('O')
      playerArray2[gridId].push(parseInt(cellId))
      
      if (checkIfWin(playerArray2[gridId]) === true) {
        gridArray2.push(parseInt(gridId))
        checkBoardWin(gridArray2) === true
        disabledBoards.push(parseInt(gridId))
        parentElement.classList.add('highlight-blue')
        scoresListO.innerHTML = gridArray2.length
        gameStart = true
      }
    }
    
    lastTurn = parseInt(event.target.id)
    // HIGHTLIGHT CLASSLIST
    // ! This code changes the next grids background to red. You can use a class also, just did this because its quicker.
    // if (gameStart) {
    //   console.log(grids)
    //   console.log(disabledBoards)
    //   console.log(highlightPlayable)
    //   highlightPlayable.style.backgroundColor = 'white'
    // }
    
    if (!gameStart) {
    document.querySelector(`.grids-${lastTurn}`).style.backgroundColor = 'lightblue'
    }

    if ((!gameStart) && (playerArray1[gridId].length + playerArray2[gridId].length  === 9))
    parentElement.classList.add('tie')
    
    if (!gameStart) {
      gameStart = disabledBoards.includes(parseInt(cellId))
    }
    
    swapTurns()        
                        
  }
  
  // CLICK EVENT FOR RESTART
  restartGame.addEventListener('click', (event) => clearBoard(event, cell))  
}
