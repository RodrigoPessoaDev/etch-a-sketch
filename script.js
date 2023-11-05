const container = document.querySelector("#containerSketch");

function makeGrid(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let item = document.createElement("div");
    //item.innerText = i + 1;
    container.appendChild(item).className = "grid-item";
  }
}

makeGrid(16, 16);

const itemGrid = document.querySelectorAll(".grid-item");

[...itemGrid].forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("item-color");
  });
});
