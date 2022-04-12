// Create Grid
const restartGame = document.querySelector('button')
const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width
let playerTurn = ('X')

// Winning Combinations

// loop through each of winning combinations === playerArray1/2
// check if in numberical order


const playerArray1 = []
const playerArray2 = []

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
const checkIfWin = playerArray =>
  winningCombinations.filter(possibility =>
    possibility.every(index => playerArray.includes(index))
  ).length > 0;


// const checkIfWin = playerArray => {
//   winningCombinations.filter(possibility =>
//   // possibility.every(index => playerArray.includes(index))
//     possibility.every(index => {
//       console.log(playerArray.includes(index))
//     })
//   ).length > 0
// };           

const gameWon = function(){
  if (checkIfWin === true) {
    alert("Winner")
  }
}

// GAME VARIABLES
const swapTurns = function() {
  // Swap current player
  if (playerTurn === 'X') {
    playerTurn = 'O'; 
  }  else {
    playerTurn = 'X'; 
  }
};

// GAME SET UP / PLAY

function createGrid() {
// creating an element div and adding a class called 'bigBoard' with 9 cells
  for (let index = 0; index < cellCount; index++) {
    const cell = document.createElement('div')
    cell.classList.add('bigBoard')

    // creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 squares
    for (let index = 0; index < cellCount; index++) {
      const squares = document.createElement('div')
      // add class to style
      squares.classList.add('innerBoards')
      // add id #
      squares.setAttribute('id', index)
      console.log(squares)

      // add the squares
      cell.appendChild(squares)

      // Game Play
      squares.addEventListener('click', (event) => {       
        // if winner
        // const gameWon = 
        
        
        // if no winner 
        if (squares.innerHTML.length === 0) {
          squares.innerHTML = (playerTurn)
          if (squares.innerHTML === ('X')) {
            playerArray1.push(parseInt(squares.id))

            // If winner:
            // console.log(checkIfWin(playerArray1))
            if (checkIfWin(playerArray1) === true)
              alert("Player 1 winner")
            
            // console.log(playerArray1)
          } else {
            // Pushing the 'O' into player array and checking win combinations.
            squares.innerHTML === ('O')
            playerArray2.push(parseInt(squares.id))
            // console.log(playerArray2)
            // console.log(checkIfWin(playerArray2))
            if (checkIfWin(playerArray2) === true)
              alert("Player 2 winner")               
          }
          swapTurns()
        
        
          // inValid move
        // } else {
        //   squares.removeEventListener('click', (event) => {
        //     squares.innerHTML
        //   })
                  
        }
        
        // clears the innerBoards squares
        restartGame.addEventListener('click', () => {
          squares.innerHTML = ''
        })

        console.log(event.target.innerHTML)
      })
      

      // console.log(squares)
    }
  
    grid.appendChild(cell)

    
    
  }
}
// console.log(grid);
createGrid()