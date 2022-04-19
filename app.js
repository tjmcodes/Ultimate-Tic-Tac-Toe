// Create Grid
const restartGame = document.querySelector('button')
const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width


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

// const bigBoards = [0,1,2,3,4,5,6,7,8]

const playerArray1 = [[],[],[],[],[],[],[],[],[]]
const playerArray2 = [[],[],[],[],[],[],[],[],[]]


// lastTurn should be line 109: lastTurn = parseInt(event.target.id) but cannot get because is in local scope
let lastTurn = 0
let gameStart = true



// WINNING COMBINATIONS

// loop through each of winning combinations === playerArray1/2
// check if in numberical order



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

// player1GridMoves[grid.id}.push(cell.id)]

// GAME WON
const checkIfWin = playerArray =>
  winningCombinations.filter(possibility =>
    possibility.every(index => playerArray.includes(index))
  ).length > 0;

          

// const gameWon = function(){
//   if (checkIfWin === true) {
//     alert(modal)
//   }
// }

// DISPLAY
// const modal = document.querySelector('#myModal')
// const closeMessage = document.querySelector(".close")




// OPEN BOARD OPTION (CLICK)
function clickAnywhere(event, cell) {
  return (
    (cell.innerHTML.length === 0) && 
    ((gameStart) || lastTurn === parseInt(event.target.parentElement.id))
  )
}


// GAME PLAY (The click event passes through events and cell as argument and is called here)
function playGame(event, cell) {              
  // if no winner 
  // console.log(event.target.id)
  
  // lastTurn = 0. This number represents the parentElement.Id which is why the top left board is selected for the player to play.
  // This block runs and then at line 106 lastTurn becomes the cell.id number and runs again. 
  // How do you start game though? 
  // Create another function??

  // If game has started ignore lastTurn
  const gridId = cell.parentElement.id
  const cellId = cell.id

  if (clickAnywhere(event, cell)) {
    cell.innerHTML = (playerTurn)
    gameStart = false
    
    
  

    if (cell.innerHTML === ('X')) {
      playerArray1[gridId].push(parseInt(cellId))

      // If winner:
      console.log(playerArray1)
      if (checkIfWin(playerArray1[gridId]) === true)
        setTimeout(() => alert("Player 1 winner"),50)
            
      // console.log(playerArray1)
    } else {
      // Pushing the 'O' into player array and checking win combinations.
      cell.innerHTML === ('O')
      playerArray2[gridId].push(parseInt(cellId))
      
      console.log(playerArray2)
      if (checkIfWin(playerArray2[gridId]) === true)
        setTimeout(() => alert("Player 2 winner"), 50)               
    }
    

    // playerArray1.length + playerArray2.length === 9; {
    //   setTimeout(() => alert("Board not won"))
    // } 

    lastTurn = parseInt(event.target.id) 
    console.log(event.target.id) //cell id

    swapTurns()        
                        
  }
  
        
  // clears the innerBoards cell
  // restartGame.addEventListener('click', () => {
  //   cell.innerHTML = ''
  // })
  // console.log(playGame(event, cell))
  console.log(event.target.innerHTML)
  console.log(event.target.parentElement)
}

console.log(checkIfWin)


// GAME SET UP / CLICK EVENT TO PLAY

function createGrid() {
// creating an element div and adding a class called 'bigBoard' with 9 grids
  for (let index = 0; index < cellCount; index++) {
    const grids = document.createElement('div')
    grids.classList.add('grids')
    grids.setAttribute('id', index)
    // console.log(grids)

    // creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 cell
    for (let index = 0; index < cellCount; index++) {
      const cell = document.createElement('div')
      // add class to style
      cell.classList.add('cells')
      // add id #
      cell.setAttribute('id', index)
      console.log(cell)

      // Add the cells
      grids.appendChild(cell)

      // Game Play - Click Event on the cell to begin play
      cell.addEventListener('click',(event) => playGame(event, cell))
      console.log(cell)
    }
    grid.appendChild(grids) 
    console.log(grids);
  }
}

createGrid()

