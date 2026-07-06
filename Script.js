
const divContainer = document.querySelector("#container");

function createDivs () {
    for(i = 0; i < 256; i++){
    const square = document.createElement("div")
    const insereDansContainer = divContainer.appendChild(square);

    square.classList = "square";
    }
};


createDivs