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
const audioMusic = document.querySelector('#music')
const musicButton = document.querySelector('.musicButton')
audioMusic.muted = true
audioMusic.loop = true
audioMusic.src = '.sounds/Alpha.wav'

let muted = true

function musicToggle() {
  muted = !muted
  if (muted) {
    audioMusic.muted = true
    // audioMusic.loop = false
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

const disabledBoard = []



const gridArray1 = []
const gridArray2 = []

const playerArray1 = [[],[],[],[],[],[],[],[],[]]
const playerArray2 = [[],[],[],[],[],[],[],[],[]]


let lastTurn = 0
let gameStart = true


//  BOARD NOT IN PLAY

// GAMESTART

 
function clearBoard() {
  setTimeout(() => window.location.reload(), 50)
}
// console.log(clearBoard())

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

// console.log(disabledBoard)

// Reversing the alert function
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
      setTimeout(() => splashWin.classList.remove('none'),5000)
      clearBoard()
    } else {
      console.log("no win")
    }
    if (gameStart === true) {
      return  
    }
  })
}

// SCORES
// const playerScores = JSON.parse(localStorage.getItem('scores')) || [] // trick to start with empty array if there's no scores.
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
    // console.log(grids)
  
    // creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 cell
    for (let index = 0; index < cellCount; index++) {
      const cell = document.createElement('div')
      // add class to style
      cell.classList.add('cells')
      // add id #
      cell.setAttribute('id', index)
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



// OPEN BOARD OPTION (CLICK)
function clickAnywhere(parent, clickCell) {
  return ( 
    (clickCell === 0) &&
    ((gameStart) || lastTurn === parseInt(parent))
  )
}
  
// GAME PLAY (The click event passes through events and cell as argument and is called here)
function playGame(event, cell) {   
  // console.log(event)           
  // console.log(cell.id)           
  // if no winner 
  // console.log(event.target.id)
  
  // lastTurn = 0. This number represents the parentElement.Id which is why the top left board is selected for the player to play.
  // This block runs and then at line 106 lastTurn becomes the cell.id number and runs again. 
  // How do you start game though? 
  // Create another function??

  // If game has started ignore lastTurn
  const parentElement = cell.parentElement
  const gridId = cell.parentElement.id
  console.log(gridId)
  const cellId = cell.id
  const clickCell = cell.innerHTML.length
  const nextBoard = document.querySelector(`.grids-${lastTurn}`)
  // const splashWinMini = document.querySelector('.splashWinMini.none') 

  console.log(nextBoard)
  // console.log(!disabledBoard.includes(parseInt(parent)), gridId)
  if ((clickAnywhere(gridId, clickCell)) && (!disabledBoard.includes(parseInt(gridId)))) {
    console.log(playerTurn)
    cell.innerHTML = playerTurn
    gameStart = false
    console.log(lastTurn)
    
    // ! Added this code to clear the previous grid with coloured background.
    if (!gameStart) {
      console.log('hello')
      document.querySelector(`.grids-${lastTurn}`).style.backgroundColor = 'transparent'
    }
    
    if (cell.innerHTML === ('X')) {
      playerArray1[gridId].push(parseInt(cellId))
 
      // If winner:
      // console.log(playerArray1)
      if (checkIfWin(playerArray1[gridId]) === true) {
        gridArray1.push(parseInt(gridId))
        checkBoardWin(gridArray1) === true
        disabledBoard.push(parseInt(gridId))
        parentElement.classList.add('highlight-blue')
        // setTimeout(() => splashWinMini.classList.remove('none'),1000)
        // nextBoard.classList.add('highlight-blue')
        scoresListX.innerHTML = gridArray1.length
        gameStart = true
        console.log(nextBoard)  
      }    
      // console.log(playerArray1)
    } else {
      // Pushing the 'O' into player array and checking win combinations.
      cell.innerHTML === ('O')
      playerArray2[gridId].push(parseInt(cellId))
      
      
      
      
      // console.log(playerArray2)
      if (checkIfWin(playerArray2[gridId]) === true) {
        gridArray2.push(parseInt(gridId))
        checkBoardWin(gridArray2) === true
        disabledBoard.push(parseInt(gridId))
        parentElement.classList.add('highlight-red')
        // setTimeout(() => splashWinMini.classList.remove('none'),1000)
        // nextBoard.classList.add('highlight-red')
        scoresListO.innerHTML = gridArray2.length
        gameStart = true
        console.log(nextBoard)
      }
    }
    
    lastTurn = parseInt(event.target.id)
    
    // ! This code changes the next grids background to red. You can use a class also, just did this because its quicker.
    if (!gameStart) {
    document.querySelector(`.grids-${lastTurn}`).style.backgroundColor = 'white'
    }

    if ((!gameStart) && (playerArray1[gridId].length + playerArray2[gridId].length  === 9))
    parentElement.classList.add('tie')
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
  

  
  console.log(event.target.id)
  console.log(event.target.innerHTML)
  console.log(event.target.parentElement)
}

// console.log(checkIfWin)
