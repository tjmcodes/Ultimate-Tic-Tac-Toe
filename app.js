// Create Grid

const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width
let player1 = ('X')
const player2 = ('O')



function createGrid() {
  for (let index = 0; index < cellCount; index++) {
    const cell = document.createElement('div')
    cell.classList.add('bigBoard')
    for (let index = 0; index < cellCount; index++) {
      const boards = document.createElement('div')
      
      boards.classList.add('innerBoard')

      cell.appendChild(boards)
      boards.addEventListener('click', () => {
      
        boards.classList.toggle(player1)
      
        boards.innerHTML = 'X'
        console.log(player1)
      })
      console.log(boards)
    }
    
    console.log(player1)
    grid.appendChild(cell)
    
  }
}
console.log(grid);
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
