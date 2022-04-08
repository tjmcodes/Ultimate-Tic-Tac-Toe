// Create Grid
const restartGame = document.querySelector('button')
const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width
let playerTurn = ('X')



const swapTurns = function() {
  // Swap current player
  if (playerTurn === 'X') {
    playerTurn = 'O'; 
  }  else {
    playerTurn = 'X'; 
  }
};

function createGrid() {
// creating an element div and adding a class called 'biBoard' with 9 squares
  for (let index = 0; index < cellCount; index++) {
    const cell = document.createElement('div')
    cell.classList.add('bigBoard')

// creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 squares
    for (let index = 0; index < cellCount; index++) {
      const squares = document.createElement('div')
      // add class to style
      squares.classList.add('innerBoard')
      // add the 
      cell.appendChild(squares)

      squares.addEventListener('click', () => {
      
        // add class to style
        squares.classList.toggle(playerTurn)
      
        // inserts innerHTML then calls the swapTurns function
        squares.innerHTML = (playerTurn)
        swapTurns()
        
        restartGame.addEventListener('click', () => {
          squares.innerHTML = ''
        })

        console.log(squares)
      })
      

      // console.log(squares)
    }
  
    grid.appendChild(cell)

    
    
  }
}
// console.log(grid);
createGrid()  




// click event
// const cells = document.querySelectorAll('cell')





// Winning Combinations

// const winningCombinations = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6],
// ];


// Restart
// const restartGame = document.querySelector('.reset')
