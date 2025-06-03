// Alle elementen selecteren
const computerSpan = document.querySelector("#computer");
const humanSpan = document.querySelector("#human");
const resultSpan = document.querySelector("#result");

// Beschikbare keuzes
const keuzes = ["steen", "papier", "schaar"];

// Functie die bepaalt wie wint
function bepaalWinnaar(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Gelijkspel!";
    } else if (
        (humanChoice === "steen" && computerChoice === "schaar") ||
        (humanChoice === "schaar" && computerChoice === "papier") ||
        (humanChoice === "papier" && computerChoice === "steen")
    ) {
        return "Jij wint!";
    } else {
        return "Computer wint!";
    }
}

// Functie die wordt uitgevoerd bij een klik
function speel(humanChoice) {
    const computerChoice = keuzes[Math.floor(Math.random() * 3)];
    humanSpan.innerHTML = humanChoice;
    computerSpan.innerHTML = computerChoice;
    resultSpan.innerHTML = bepaalWinnaar(humanChoice, computerChoice);
}

// Event listeners toevoegen aan knoppen
document.querySelector("#steen").addEventListener("click", () => speel("steen"));
document.querySelector("#papier").addEventListener("click", () => speel("papier"));
document.querySelector("#schaar").addEventListener("click", () => speel("schaar"));
