let gridSize = 16;

let paintColor = "black";

let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;

function createGrid(gridSize){
    const grid = document.querySelector(".gridContainer");
    grid.style.setProperty("display", `inline-grid`);
    grid.style.setProperty("grid-template-columns", `repeat(${gridSize}, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${gridSize}, 2fr)`);
    grid.style.setProperty("border", `5px solid black`);
    grid.style.setProperty("border-radius", `5px`);
    grid.style.setProperty("height", `575px`);
    grid.style.setProperty("width", `575px`);

    for (let i = 0; i < gridSize * gridSize; i++ ){
        const divs = document.createElement("div");
        divs.classList.add("square");
        divs.addEventListener("mouseover", changeColor);
        grid.appendChild(divs);
    }
}

function changeColor(e) {
    e.target.classList.replace("square", "color");
}

function initializeButtonEvents(){
    const resizeButton = document.querySelector(".resize");
    resizeButton.addEventListener("click", gridResize);
/*
    const blackButton = document.querySelector(".black");
    blackButton.addEventListener("click", () => {
        blackButton.classList.toggle("control-button-inactive");
    });

    const square = document.querySelectorAll(".square");
    square.addEventListener("mouseover", function(event) {
        event.target.classList.replace("square", "color");
    }); */
}

function gridResize() {
    const grid = document.querySelector(".gridContainer");
    grid.innerHTML = "";
    let validInput = false;
    while (validInput === false){
        let newGridSize = prompt("Enter a new grid size between 10 and 100 number:");
        if (newGridSize === null){
            return;
        } else if (newGridSize && !isNaN(newGridSize)) {
            newGridSize = Number(newGridSize);

            if (newGridSize >= 10 && newGridSize <= 100){
                validInput = true;
                gridSize = newGridSize
            }
        }
    }
    createGrid(gridSize);
}

initializeButtonEvents();

createGrid(gridSize);

