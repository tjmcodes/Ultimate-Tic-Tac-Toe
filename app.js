// Create Grid
const restartGame = document.querySelector('button')
const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width
let playerTurn = ('X')

// Winning Combinations

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];



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
// creating an element div and adding a class called 'biBoard' with 9 cells
  for (let index = 0; index < cellCount; index++) {
    const cell = document.createElement('div')
    cell.classList.add('bigBoard')

// creating an element div (inside the bigBoard div loop) and adding a class called 'innerboard' with 9 squares
    for (let index = 0; index < cellCount; index++) {
      const squares = document.createElement('div')
      // add class to style
      squares.classList.add('innerBoards')
      // add the squares
      cell.appendChild(squares)

      squares.addEventListener('click', (event) => {       
        if (squares.innerHTML.length === 0) {
          squares.innerHTML = (playerTurn)
          swapTurns()
        } else {
          squares.removeEventListener('click', (event) => {
            squares.innerHTML
          })
        }
      
        // // inserts innerHTML then calls the swapTurns function
        // squares.innerHTML = (playerTurn)


        // // toggle switch (function)
        // squares.classList.toggle(playerTurn)
        
        

        
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

