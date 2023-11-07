const container = document.querySelector("#containerSketch");

function makeGrid(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let item = document.createElement("div");

    container.appendChild(item).className = "grid-item";
  }
}

makeGrid(40, 40);

const itemGrid = document.querySelectorAll(".grid-item");

[...itemGrid].forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("item-color");
  });
});
