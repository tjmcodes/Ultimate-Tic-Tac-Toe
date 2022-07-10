![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
### General Assembly Software Engineering Immersive 
# Project 1 - Ultimate Tic-Tac-Toe

### The Overview
A grid based turn-play game developed using HTML, CSS and Javascript. 


### The Brief

- Render a game in the browser
- Design logic for winning & losing
- Include separate HTML / CSS / JavaScript files
- Stick with K.I.S.S (Keep It Simple Stupid) and D.R.Y (Don't Repeat Yourself) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use best practices when developing in HTML (semantic tags etc.)

### Technologies Used

- HTML5 & CSS3
- JavaScript (ES6)
- Git & GitHub
- Canvas (Logo)

### Game Rules
Ultimate tic-tac-toe has 9 grids completed with 9 cells. 
To win the game, you have to win three grids in a row.
To win a grid, you have to win three cells in a row.

The player can only move in the grid that is highlighted. 
If the grid is not highlighted, this indicates 'open play' and the player can click on any cells that are available. 

### The Approach
THE BOARD

A dynamic grid is created by using Javascript and the DOM `createGrid()` 
HTML `div` function with nested for loops. 

1. Create grid (container) -> `div`
2. Create grids (within container) -> `const grids = document.createElement('div')`
3. Create cells (within grids) -> `const cell = document.createElement('div')`

GAME PLAY

Essentially the game starts when a player clicks on a cell once the grid has been created. An addEventListener is added as part of the nested for loop in the `createGrid()` function. 
The event listener pases the 'click' and the cell variable as arguments to the `playGame()` function. 


PLAYER TURN

Each player clicks on a cell to insert an "X" or an "O" with an addEventListener in the gamePlay function. A `swapTurns()` function proves handy for this turn based game.

```js
let playerTurn = ('X')

const swapTurns = function() {
  // Swap current player
  if (playerTurn === 'X') {
    playerTurn = 'O'; 
  }  else {
    playerTurn = 'X'; 
  }
};
```

`playerArray1` and `playerArray2` are declared as global variables with empty nested arrays.

```js 
const playerArray1 = [[],[],[],[],[],[],[],[],[]]
const playerArray2 = [[],[],[],[],[],[],[],[],[]]
```

 and in the `playGame()` the `cell.id` elements are pushed into the relevant `gridId` nested arrays.

```js 
  if (cell.innerHTML === ('X')) {
      playerArray1[gridId].push(parseInt(cellId))
      } else {
      cell.innerHTML === ('O')
      playerArray2[gridId].push(parseInt(cellId))
      }
    }      
``` 


WINNING COMBINATION

State the winning variables: 

```js
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
```

As the constant is an array, its properties can be updated or removed. By using the filter to checking every 'winning possibility' with the `playerArray` and reference that using the `.every` method; tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
// CHECK WIN
// loop through each of winning combinations 
const checkIfWin = playerArray =>
  winningCombinations.filter(possibility =>
    possibility.every(index => playerArray.includes(index))
  ).length > 0;
```

`checkIfWin()` uses the `playerArray1[gridID]` to return a truthy. 

`if (checkIfWin(playerArray1[gridId]) === true)`




BIG WIN

To work out the 'BIG WIN'; where the grids are won using any of the `winningCombinations` another global variable (an array) where the `gridIds` of the cell clicks were pushed to.  

```js
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
```

`checkBoardWin()` uses the `gridArray1`as an arument in the players' if statements. 


```js 
if (checkIfWin(playerArray1[gridId]) === true) {
        gridArray1.push(parseInt(gridId))
        checkBoardWin(gridArray1) === true
        disabledBoards.push(parseInt(gridId))
```

DISABLED BOARD

following on from previous logic, the winning gridId then gets pushed to an array `disabledBoard` so that this can be used as an argument in the `clickAnywhere` function. 


PLAYERS CAN CLICK ANYWHERE... 

If the...  
`cell.innerHTML.length === 0`
`gameStart = true`

```js
function clickAnywhere(parent, clickCell) {
  return ( 
    (clickCell === 0) &&
    ((gameStart) || lastTurn === parseInt(parent))
  )
}
```

`lastTurn` is declared as a global variable which is set to 0 but doesn't get used because this is set to the OR operator in the function above. Once the game start the `lastTurn` is then reassigned based on player's clicked `cell.parentElement`.

RESTART GAME

In the `playGame()` a click event was added for the `restartButton` : 
```js 
restartGame.addEventListener('click', (event) => clearBoard(event, cell))  
```



CHALLENGES: 

The alert for 'Game Won' was appearing 8 times. In the `checkBoardWin` function the alerts where nested as part of the if statement. Had the alerts been written outside of this scope it would not have been part of the check where the winning combination was filltering through each of the 8 combinations. 

Being able to add classList to gridIds by concatenating the `'.grids` with `{lastTurn}`  using the DOM, the `console.log(gridId)` would return undefined.  
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjmcodes&show_icons&theme=tokyonight)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=tjmcodes&theme=tokyonight)
