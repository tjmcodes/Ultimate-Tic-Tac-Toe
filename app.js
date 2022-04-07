// Create Grid

const grid = document.querySelector('.grid')
const width = 3
const cellCount = width * width


function createGrid() {
  for (let index = 0; index < cellCount; index++) {
    const cell = document.createElement('div')
    grid.appendChild(cell)
  }
}

console.log(grid);
createGrid()  

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

