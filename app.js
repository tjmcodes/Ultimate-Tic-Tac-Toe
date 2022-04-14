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

const playerArray1 = []
const playerArray2 = []
let lastTurn = 0

const firstMove = function() {
  if (grid === 0) {
    playerTurn
  } else {
    lastTurn === parseInt(event.target.parentElement.id)
  }
}


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


// GAME WON
const checkIfWin = playerArray =>
  winningCombinations.filter(possibility =>
    possibility.every(index => playerArray.includes(index))
  ).length > 0;
          

const gameWon = function(){
  if (checkIfWin === true) {
    alert(modal)
  }
}

// DISPLAY
// const modal = document.querySelector('#myModal')
// const closeMessage = document.querySelector(".close")




// OPEN BOARD OPTION (CLICK)



// GAME PLAY (The click event passes through events and cell as argument and is called here)
function playGame(event, cell) {              
  // if no winner 
  console.log(event.target.id)
  if (cell.innerHTML.length === 0 && (lastTurn === parseInt(event.target.parentElement.id))) {
    cell.innerHTML = (playerTurn)

    if (cell.innerHTML === ('X')) {
      playerArray1.push(parseInt(cell.id))

      // If winner:
      console.log(checkIfWin(playerArray1))
      if (checkIfWin(playerArray1) === true)
        setTimeout(() => alert("Player 1 winner"),50)
            
      // console.log(playerArray1)
    } else {
      // Pushing the 'O' into player array and checking win combinations.
      cell.innerHTML === ('O')
      playerArray2.push(parseInt(cell.id))
      console.log(checkIfWin(playerArray2))
      if (checkIfWin(playerArray2) === true)
        setTimeout(() => alert("Player 2 winner"), 50)               
    }
    lastTurn = parseInt(event.target.id)

    // playerArray1.length + playerArray2.length === 9; {
    //   setTimeout(() => alert("Board not won"))
    // } 

    swapTurns()        
        
    // inValid move
    // } else {
    //   cell.removeEventListener('click', (event) => {
    //     cell.innerHTML
    //   })                  
  }
  
        
  // clears the innerBoards cell
 

  restartGame.addEventListener('click', () => {
    cell.innerHTML = ''
  })

  console.log(event.target.innerHTML)
  console.log(event.target.parentElement)
}



// GAME SET UP / PLAY

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

      // Add the cell
      grids.appendChild(cell)

      // Game Play
      cell.addEventListener('click',(event) => playGame(event, cell))
      
    
      console.log(cell)
    }
    grid.appendChild(grids) 
    console.log(grids);

    
  }
}

createGrid()

