let btnReset = document.querySelector(".btn-reset");
let btnRandom = document.querySelector(".btn-random");
let btnPink = document.querySelector(".btn-pink");
let gridContainer = document.querySelector(".container");
let totalNumberSquares = 2500;
let gridItem;
let userSquares;
let itemPx;
let allGridItems;

//Generate a grid
function makeGrid() {
  for (i = 0; i < totalNumberSquares; i++) {
    gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem);
  }
}

//Reset Grid
function clearGrid() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

//Add event handler
function mouseOverEvent() {
  allGridItems = document.querySelectorAll(".container div");
  for (let i = 0; i < allGridItems.length; i++) {
    allGridItems[i].addEventListener("mouseover", setBlackColour);
  }
}

//Color black
function setBlackColour() {
  this.style.backgroundColor = "black";
}

//Resize item
function itemSize() {
  itemPx = 500 / userSquares + "px";
  for (let i = 0; i < allGridItems.length; i++) {
    allGridItems[i].style.flexBasis = itemPx;
  }
}

function resetGrid() {
  for (let i = 0; i < allGridItems.length; i++) {
    allGridItems[i].style.backgroundColor = "white";
  }
  userSquares = prompt("How many squares per side? (Min : 8, Max:100", "100");
  if (userSquares == 0) {
    userSquares = 50;
  } else if (userSquares > 100) {
    userSquares = 100;
  } else if (userSquares < 8) {
    userSquares = 8;
  }
  totalNumberSquares = userSquares * userSquares;
  clearGrid();
  makeGrid();
  mouseOverEvent();
  itemSize();
}

function switchToColours() {
  allGridItems = document.querySelectorAll(".container div");

  for (let i = 0; i < allGridItems.length; i++) {
    allGridItems[i].removeEventListener("mouseover", setBlackColour);
    allGridItems[i].addEventListener("mouseover", setRandomColour);
  }
}

function setPinkColor() {
  this.style.backgroundColor = "pink";
}

function switchToPink() {
  allGridItems = document.querySelectorAll(".container div");

  for (let i = 0; i < allGridItems.length; i++) {
    allGridItems[i].removeEventListener("mouseover", setBlackColour);
    allGridItems[i].removeEventListener("mouseover", setRandomColour);
    allGridItems[i].addEventListener("mouseover", setPinkColor);
  }
}

function random_rbg() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

function setRandomColour() {
  this.style.backgroundColor = random_rbg();
}

makeGrid();
mouseOverEvent();
btnReset.addEventListener("click", resetGrid);
btnRandom.addEventListener("click", switchToColours);
btnPink.addEventListener("click", switchToPink);
