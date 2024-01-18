import * as DnD from "./DnD.js";

const teamGallery = document.getElementById("teamGallery");
const recruitButton = document.getElementById("recruitButton");
const characterArea = document.getElementById("characters");
const promiseObj = DnD.fetchARandomRace();

// promiseObj.then(race => {
//     console.log(race.name);
// });
// console.log(DnD.rollStats());

// function getURL(raceName) {
//     switch (raceName) {
//         case "Dwarf":
//             return "dwarf.jpg";
//         case "Elf":
//             return "elf.jpg";
//         case "Halfling":
//             return "halfling.jpg";
//         case "Human":
//             return "human.jpg";
//         case "Dragonborn":
//             return "dragonborn.jpg";
//         case "Gnome":
//             return "gnome.jpg";
//         case "Half-Elf":
//             return "halfElf.jpg";
//         case "Half-Orc":
//             return "halfOrc.jpg";
//         case "Tiefling":
//             return "tiefling.jpg";
//         case "Alseid":
//             return "alseid.jpg";
//         case "Catfolk":
//             return "catfolk.jpg";
//         case "Darakhul":
//             return "darakhul.jpg";
//         case "Derro":
//             return "derro.jpg";
//         case "Drow":
//             return "drow.jpg";
//         case "Erina":
//             return "erina.jpg";
//         case "Gearforged":
//             return "gearforged.jpg";
//         case "Minotaur":
//             return "minotaur.jpg";
//         case "Mushroomfolk":
//             return "mushroom.png";
//         case "Satarre":
//             return "satarre.jpg";
//         case "Shade":
//             return "shade.jpg";
//     }
// }


function handleButtonClick() {
    for (let i = 0; i <= 2; i++) {
        const race = DnD.fetchARandomRace();
        console.log(race);
        const characterPic = document.createElement("img");
        race.then(result => {
            characterPic.setAttribute("src", `${result.name.toLowerCase()}.jpg`);
            characterPic.setAttribute("width", "290px");
            characterArea.appendChild(characterPic);
            console.log(characterPic);
        });
        // characterPic.setAttribute("width", "400px")
        // characterArea.appendChild(characterPic);
        // console.log(characterPic);
    }
}


recruitButton.addEventListener("click", handleButtonClick);