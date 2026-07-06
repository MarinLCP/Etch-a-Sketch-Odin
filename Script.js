const divContainer = document.querySelector("#container");
const btnClickMe = document.querySelector("#btn");

function createDivs() {
    for(let i = 0; i < 256; i++){
        const square = document.createElement("div");

        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            square.classList.add("red");
        });

        divContainer.appendChild(square);
    }
}

function changeSizeDivs() {
    btnClickMe.addEventListener("click", () => {
        const size = prompt("De quelle taille souhaitez-vous vos carrés en px ?");
        const squares = document.querySelectorAll(".square");
        if(size >= 100){console.log("to big sorryyyy")   
        } else {
            squares.forEach(square => {
                square.style.width = size + "px";
                square.style.height = size + "px";
            })
        };
    });
}

createDivs();
changeSizeDivs();