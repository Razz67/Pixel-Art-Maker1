
// create a function to add event listener to the submit button
document.getElementById("sizePicker").addEventListener("submit", function (e) {
  e.preventDefault();

  // use .value property to get height and width inputs
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  makeGrid(height, width);
});

function makeGrid(a, b) {
  // Clear the canvas if one is visible
  while (document.getElementById("pixelCanvas").hasChildNodes()) {
    pixelCanvas.removeChild(pixelCanvas.lastChild);
  }

  // create the canvas
  for (let row = 0; row <= a; row++) {
    let tr = document.createElement("tr");
    tr.id = "row" + row;
    pixelCanvas.appendChild(tr);

    for (let col = 0; col <= b; col++) {
      let td = document.createElement("td");
      td.id = "row" + row + "cell" + col;
      pixelCanvas.lastChild.appendChild(td);
    }
  }

  // Select color input  add to cell when clicked
  const color = document.getElementById("colorPicker").value
  let cells = document.querySelectorAll("td");
  for (const cell of cells) {
    cell.addEventListener("click", function() {
      this.style.backgroundColor = color;
    });
  }

}
