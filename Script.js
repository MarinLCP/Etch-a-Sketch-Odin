const divContainer = document.querySelector("#container");
const btnClickMe = document.querySelector("#btn");

// ici c'est la création des divs
function createDivs() {
    for(let i = 0; i < 256; i++){
        const square = document.createElement("div"); // ici je créé ma div

        square.classList.add("square"); // ici je rajoute mon carré dans la classe "Square"

        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });


        divContainer.appendChild(square); // ici avant la fin de ma boucle je balance le square créé avec sa classe et sont event dans mon "container"
    }
}

// cette fonction as pour but de prompt des nouvelles tailles de carré
function changeSizeDivs() {
    btnClickMe.addEventListener("click", () => {
        const size = prompt("De quelle taille souhaitez-vous vos carrés en px ?"); // ici j'enregistre dans mon size la taille du prompt rentré
        const squares = document.querySelectorAll(".square"); //ici je saisis et et je balance dans square tout les divs qui ont la classe square. (non visible dans HTML mais bien la dans js)
        if(size >= 100){console.log("to big sorryyyy")   // si + de 100 alors rien ne se passe
        } else {
            squares.forEach(square => {
                square.style.width = size + "px"; // (HINT ! le square sans s est une descrption) sinon tu change mon style de largeur on rajoutant a width : x px;
                square.style.height = size + "px"; // et tu change mon style de l'hauteur on rajoutant a width : x px;
            })
        };
    });
}

createDivs(); // tu me lance la fonction création de divs
changeStyleClassRed()
changeSizeDivs();  // tu me lance la possibilité de prompt au click du btn 





// 'ai oublié le () a Math.random()
// j'ai oublié les accolades a ForEach(xx => {})
