export {fetchARandomClass, fetchARandomRace, rollStats};
async function fetchARandomClass() {
    try {
        const response = await fetch("https://api.open5e.com/classes/?cr=3");
        const classData = await response.json();
        const classList = await classData.results;
        return classList[Math.round(Math.random() * ((classList.length) - (-0.49)) + (-0.49))];
    } catch (error) {
        alert("Error in response from the API: " + error)
    }
}

async function fetchARandomRace() {
    try {
        const response = await fetch("https://api.open5e.com/races/?cr=3");
        const raceData = await response.json();
        const raceList = await raceData.results;
        console.log(raceList[Math.round(Math.random() * ((raceList.length) - (-0.49)) + (-0.49))]);
    } catch (error) {
        alert("Error in response from the API: " + error)
    }
}

function rollStats() {
    const stats = {
        Strength: Math.round((Math.random() * (6 - 0) + 0) * 4),
        Dexterity: Math.round((Math.random() * (6 - 0) + 0) * 4),
        Constitution: Math.round((Math.random() * (6 - 0) + 0) * 4),
        Intelligence: Math.round((Math.random() * (6 - 0) + 0) * 4),
        Wisdom: Math.round((Math.random() * (6 - 0) + 0) * 4),
        Charisma: Math.round((Math.random() * (6 - 0) + 0) * 4),
    }
    return stats;
}