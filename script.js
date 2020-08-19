// default variables

let numberOfGrid = 16;

let randomColour = 0;

function getRandomRGB(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function createGrid() {
    const findContainer = document.getElementById("container");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.id = "grid";
    grid.style.gridTemplateColumns = "repeat(" + numberOfGrid + ", " + "1fr)";
    grid.style.gridTemplateRows = "repeat(" + numberOfGrid + ", " + "1fr)";
    findContainer.appendChild(grid);
    addItem();
    itemHover();
}

// change addItem to custom grid prompted by the user, 

const gridSelector = document.querySelector("#number")
gridSelector.addEventListener("click", () => {
    numberOfGrid = window.prompt("Select number of columns");
    let deleteGrids = document.getElementById("container");
    while (deleteGrids.firstChild) {
        deleteGrids.removeChild(deleteGrids.lastChild);
    } 
    return createGrid();
})

function addItem() { 
    for (let i = 0; i < (numberOfGrid*numberOfGrid); i++) {
            const findGrid = document.querySelector(".grid");
            const item = document.createElement("div");
            item.classList.add("rows");
            item.id = ("item" + i);
            findGrid.appendChild(item);
    }
    
}

createGrid();

// Change la couleur d'un item quand la souris passe dessus
// Colour has to change each time we change grid
// we have to change the itemHover function => if nested inside for


const random = document.getElementById("random");
random.addEventListener("click", () => {
    let random1 = getRandomRGB(255);
    let random2 = getRandomRGB(255);
    let random3 = getRandomRGB(255);
    randomColour = "rgb(" + random1 + ", " + random2 + ", " + random3 + ")";
    random.style.backgroundColor = randomColour;
    return itemHover();
});

function itemHover(colour) {
    if (randomColour == 0) {
        for (let n = 0; n < (numberOfGrid * numberOfGrid); n++) {
        let hoverBlack = document.getElementById("item" + n);
        hoverBlack.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = colour;
            colour = "black";
        });
    }} else {
        for (let m = 0; m < (numberOfGrid * numberOfGrid); m++) {
            let hoverBlack = document.getElementById("item" + m);
            hoverBlack.addEventListener("mouseenter", function(e) {
                e.target.style.backgroundColor = colour;
                return colour = randomColour;
        });    
    }
}}

// reset button change colour background of all items back to default colour

function reset() {
    const getReset = document.getElementById("reset");
    getReset.addEventListener("click", () => {
            let resetRows = Array.from(grid.childNodes);
            resetRows.forEach((item) => 
            (item.style.backgroundColor = "rgb(250, 239, 223)"));
            numberOfGrid = 16;
            let deleteGrids = document.getElementById("container");
            while (deleteGrids.firstChild) {
                deleteGrids.removeChild(deleteGrids.lastChild);
            } 
            createGrid();
        })
}

reset();

// Add button black to return to default colour black

const black = document.getElementById("black");
black.addEventListener("click", () => {
    randomColour = 0;
})