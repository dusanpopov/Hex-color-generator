const hexCode = document.querySelector(".hex--code");
const colorPreview = document.querySelector(".color--preview");
const btn = document.querySelector(".btn");


function createHexValue(){
    
    const hexValues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {

        let randomValue = Math.floor(Math.random() * hexValues.length);

        hexColor += hexValues[randomValue];
    }

    colorPreview.style.backgroundColor = hexColor;
    
    hexCode.textContent = hexColor.toLowerCase();
}

btn.addEventListener("click", createHexValue);
