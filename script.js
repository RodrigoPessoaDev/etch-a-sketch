const container = document.querySelector("#containerSketch");
const btn32 = document.querySelector(".btn32");
const btn64 = document.querySelector(".btn64");
const reset = document.querySelector(".btnReset");
const colorChange = document.querySelector(".btnColor");
const btnBlack = document.querySelector(".btnBlack");
const btnBlue = document.querySelector(".btnBlue");

function makeGrid(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let item = document.createElement("div");

    container.appendChild(item).className = "grid-item";
  }
}

function clearGrid() {
  [...itemGrid].forEach((item) => {
    container.removeChild(item);
  });
}

makeGrid(40, 40);
const itemGrid = document.querySelectorAll(".grid-item");

//Color chaning buttons
[...itemGrid].forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("item-color");
  });
});

reset.addEventListener("click", () => {
  [...itemGrid].forEach((item) => {
    item.classList.remove("item-color", "item-black");
  });
});

btnBlack.addEventListener("click", () => {
  [...itemGrid].forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("item-black");
      item.classList.remove("item-blue");
    });
  });
});

btnBlue.addEventListener("click", () => {
  [...itemGrid].forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("item-blue");
      item.classList.remove("item-black");
    });
  });
});
