
// création de la grille avec des carré noir qui deviennent rouge au survol
const divContainer = document.querySelector("#container");

function createDivs () {
    for(let i = 0; i < 256; i++){
        const square = document.createElement("div")
        const insereDansContainer = divContainer.appendChild(square);
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.classList.add("red")
      });
    };
};



createDivs()