const DEFAULT_COLOR = "black";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let gridSize = DEFAULT_SIZE;

const grid = document.querySelector(".gridContainer");


let draw = false;
document.body.onmousedown = () => draw = true;
document.body.onmouseup = () => draw = false;

function createGrid(gridSize){
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
        //divs.addEventListener("mouseover", changeColor);
        grid.appendChild(divs);
    }
}
/*
function changeColor(e) {
    if (e.type === "mouseover" && !draw) return;
    //e.target.classList.replace("square", "color");
    e.target.style.backgroundColor = "black";
}
*/

function randomColor() {
    //generate a number between 0 and 255 inclusive then convert to corresponding hex value
    let hr = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
    let hg = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
    let hb = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
    return "#" + hr + hg + hb;
}

console.log(randomColor());

function initializeButtonEvents(){
    const resizeButton = document.querySelector(".resize");
    resizeButton.addEventListener("click", gridResize);

    const blackBtn = document.querySelector(".black");
    blackBtn.addEventListener("click", () => {
        divsCell = document.querySelectorAll(".square");
        divsCell.forEach(element => {
            element.addEventListener("mouseover", (event) => {
                if (event.type === "mouseover" && !draw) return;
                event.target.style.backgroundColor = color;
            })
        })
    })


    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", () => {
        grid.innerHTML = "";
        createGrid(gridSize);
    })

    const rainbow = document.querySelector(".rainbow");
    rainbow.addEventListener("click", () => {
        divsCell = document.querySelectorAll(".square");
        divsCell.forEach(element => {
            element.addEventListener("mouseover", (event) => {
                if (event.type === "mouseover" && !draw) return;
                event.target.style.backgroundColor = randomColor();
                //console.log(randomColor());
            });
        });
    })
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

