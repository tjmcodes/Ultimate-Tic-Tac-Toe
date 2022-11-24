<div align="right">
 <h2>General Assembly - Software Engineering Immersive
 <img width=35px src="https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png" />
  </h2>
</div>


# Project 1: Ultimate Ultimate Tic-Tac-Toe 🕹

## Contents 
1. [Project Overview](#projectoverview)
2. [Demo of the App](#app)
3. [Project Brief](#project-brief)
4. [Technologies used](#tech-used)
5. [Game Rules](#rules)
6. [Approach](#approach)
7. [The Board](#board)
8. [Game Play](#play)
9. [Player Turns](#turns)
10. [Winning Combinations](#win-combo)
11. [Big Win](#big-win)
12. [Disabled Board](#disabled-board)
13. [Players can Click Anywhere](click-anywhere)
14. [Wins](#wins)
15. [Challenges](#Challenges)
16. [Bugs adn Future Improvements](#bugs)
17. [What have I learned?](#What-have-i-learned)



<div id='projectoverview'></div>

## Project Overview
A grid based turn-play game developed using HTML, CSS and Javascript. 

<div id='app'></div>

## Demo of the App
You can play the game by clicking [here.](https://tjmcodes.github.io/Ultimate-Tic-Tac-Toe/)

<div align='center'>
  <a href="https://ibb.co/4pSTZTz"><img src="https://i.ibb.co/VTCSWSR/Ultimate-Tic-Tac-Toe-Landing-Page.png" alt="Ultimate-Tic-Tac-Toe-Landing-Page" border="0"></a>
</div>

<div id='project-brief'></div>

### Project Brief

- Render a game in the browser
- Design logic for winning & losing
- Include separate HTML / CSS / JavaScript files
- Stick with K.I.S.S (Keep It Simple Stupid) and D.R.Y (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use best practices when developing in HTML (semantic tags etc.)

<div id='tech-used'></div>

### Technologies Used

* HTML5 & CSS3
* JavaScript (ES6)
* Git & GitHub
* Canva (Logo)
* Excalidraw and Miro

---

<div id='rules'></div>

### Game Rules
Ultimate tic-tac-toe has 9 grids with 9 cells. 
To win the game, you have to win three grids in a row.
To win a grid, you have to win three cells in a row.

The player can only move in the grid that is highlighted. 
If the grid is not highlighted, this indicates 'open play' and the player can click on any cells that are available. 

---

<div id='approach'></div>

## The Approach
To get started with planning how to create my game, I was required to provide an MVP checklist of the goals that would need to be achieved. I prioritised setting out to achieve the functionality and basic styling to get the app working for the MVP deadline.  Then the following week would be put aside for styling. 

<div align='center'>
  <a href="https://ibb.co/6chFnxZ"><img src="https://i.ibb.co/1YVTv5n/MVP-checklist-for-TTT.png" alt="MVP-checklist-for-TTT" border="0"></a>
</div>

---

<div id='board'></div>

### The Board

A dynamic grid is created by using Javascript and the DOM `createGrid()` 
HTML `div` function with nested for loops. 

1. Create grid (container) -> `div`
2. Create grids (within container) -> `const grids = document.createElement('div')`
3. Create cells (within grids) -> `const cell = document.createElement('div')`

---

<div id='play'></div>

### Game Play

Essentially the game starts when a player clicks on a cell once the grid has been created. An addEventListener is added as part of the nested for loop in the `createGrid()` function. 
The event listener pases the 'click' and the cell variable as arguments to the `playGame()` function. 

---

<div id='turns'></div>

### Player Turn

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

---

<div id='win-combo'></div>

### Winning Combinations

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

As the constant is an array, its properties can be updated or removed. By using the filter to checking every 'winning possibility' with the `playerArray`, and referencing that using the `.every` method; this tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

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

---

<div id='big-win'></div>

### Big Win

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

`checkBoardWin()` uses the `gridArray1` as an argument in the players' `if` statements to check for win. 


```js 
if (checkIfWin(playerArray1[gridId]) === true) {
        gridArray1.push(parseInt(gridId))
        checkBoardWin(gridArray1) === true
        disabledBoards.push(parseInt(gridId))
```

The alert for 'Game Won' appeared 8 times. In the `checkBoardWin` function the alerts were nested as part of the if statement. Had the alerts been written outside of this scope it would not have been part of the check where the winning combination was filtering through each of the 8 combinations.

---

<div id='disabled-board'></div>

### Disabled Board

Following on from previous logic, the winning gridId then gets pushed to an array `disabledBoard` so that this can be used as an argument in the `clickAnywhere` function. 

<div id='click-anywhere'></div>

### Players can Click Anywhere... 

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

`lastTurn` is declared as a global variable which is set to 0 but doesn't get used because this is set to the OR operator in the function above. Once the game starts the `lastTurn` is then reassigned based on the player's clicked `cell.parentElement`.

---

<div id='wins'></div>

### Wins
Being able to implement the functionalities set out in MVP as well as some stretch goals. I was particularly happy with the styling with regards to learning how to create a pop up/splash screens and to incorporate semantic elements. 


<div id='challenges'></div>

### Challenges
The biggest challenge for me was getting to grips with the naming conventions. Quite often this would catch me out as I was expecting a single element but instead received an array of strings etc. An example where this proved to be problematic was: 

Selecting the .grids to apply styling: 

`const nextBoard = document.querySelector(`${'.grids'}${lastTurn}`)`

<div class="grids"></div>
<div class="grids"></div>
<div class="grids"></div>
<div class="grids"></div>
<div class="grids"></div>

with the above code, it isn’t granular enough to select a specific grid, because they all have the same class. Valid CSS selector names must start with an _, -, or letter.  What need to be achieved was to create the grids with both classes and specific id number: 

```
// creating an element div and adding a class called 'bigBoard' with 9 grids
 for (let index = 0; index < cellCount; index++) {
   const grids = document.createElement('div')
   // ! Adds a unique class to the grid to identify it.
   grids.classList.add(`grids-${index}`)
   grids.setAttribute('id', index)
  
```

<div class="grids grid-1"></div>
<div class="grids grid-2"></div>
<div class="grids grid-3"></div>
<div class="grids grid-4"></div>
<div class="grids grid-5"></div>


grid-1 using: 
`document.querySelector(`.grids-${lastTurn}`).style.backgroundColor = 'transparent'`

<div align='center'>
  <a href="https://ibb.co/9ZzdpVz"><img src="https://i.ibb.co/CPNSwMN/UTTT-Highlight-board.png" alt="UTTT-Highlight-board" border="0"></a>
</div>


<div id='bugs'></div>

### Bugs and Future Improvements
- Debug audio element
- AI functionality, player versus computer mode. 
- Change colours of the highlight board option to include when any board is in play 
- Restyle (general)

Restart functionality for restarting the game. Currently using setTimeout(() => window.location.reload(), 50). It fixes the problem but would like to work on a solution that incorporates a score board when clicking restart. Another popup window, implement local.storage(). 

Styling the grid plays differently. Ie. When all of the board is in play the grids should light up white to indicate free play. 

Audio element not working, due to the limitation file size of github audio. Use url instead of the file stored in the project. 

<div id='what-did-i-learn'></div>

### What Did I Learn?
When planning and setting up a sprint for MVP for my game, I was too ambitious. There were a few iterations of the proposed checklist as I had missed out fundamental steps. Being in discussion with the teacher provided a useful learning experience as I was able to discuss transparently. Being encouraged to think about what I was trying to achieve and by breaking down the logic proved to be an overwhelming challenge. 

This was the first project where I was learning to use what I had learned in class and apply it for a project. I struggled initially to make the connections from what I did in class is in fact the logic that I would be using to create my grid base game. 
Being able to successfully execute the basic functions which were covered in my class notes took time. In hindsight, I would have been a bit kinder to myself and taken breaks more often. I realised that when I was stuck on debugging issues, I often found that once I had rested and approached the issue the next morning, I was able to resolve them. 

I learned a lot about how I work. The times of the day when I was most productive with my current work schedule and also how to organise my workflows and set ups. 
With regards to the coding aspect, I was proud to have achieved what I did in the time constraints I had. It was a great challenge and a deep dive in implementing logic and programming using JavaScript.  Moving forward, I would like to find a way to work on improving the styling for my projects. 

---

<!-- Stats -->
<div align='center'>
 <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tjmcodes&theme=vue-dark&custom_title=Languages&layout=compact">
 <img height="150em" src="https://github-readme-stats.vercel.app/api?username=tjmcodes&show_icons&theme=tokyonight">
</div>
