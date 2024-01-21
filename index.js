import * as DnD from "./DnD.js";

const teamGallery = document.getElementById("teamGallery");
const recruitButton = document.getElementById("recruitButton");
const characterArea = document.getElementById("characters");
const recruitOptions = document.querySelectorAll("#characterPic");
console.log(DnD.rollStats());

function handleButtonClick() {
    for (let i = 0; i <= 3; i++) {
        const race = DnD.fetchARandomRace();
        const characterPic = document.createElement("img");
        race.then(result => {
            characterPic.setAttribute("src", `${result.name.toLowerCase()}.jpg`);
            characterPic.setAttribute("id", "characterPic");
            characterPic.setAttribute("width", "290px");
            if (characterArea.childElementCount == 3) {
                for (let i = 0; i <= characterArea.childElementCount; i++) {
                    const oldCharacter = characterArea.children[i];
                    console.log(oldCharacter);
                    characterArea.replaceChild(characterPic, oldCharacter);
                }
            } else {
                characterArea.appendChild(characterPic);
            }
        });
    }
}

console.log(recruitOptions);

recruitButton.addEventListener("click", handleButtonClick);