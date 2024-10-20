document.addEventListener("DOMContentLoaded", () => {
    // Sample games data
    const games = [
        { name: "Game #1", rules: "These are the rules for Game #1.", notes: "Notes for Game #1" },
        { name: "Game #2", rules: "These are the rules for Game #2.", notes: "Notes for Game #2" }
    ];

    const gamesList = document.getElementById("gamesList");

    // Dynamically create and add games to the DOM
    games.forEach((game) => {
        // Create the game container (clickable title)
        const gameDiv = document.createElement("div");
        gameDiv.className = "bg-white p-6 rounded-lg shadow-lg cursor-pointer";

        // Add game title (clickable)
        const gameTitle = document.createElement("h2");
        gameTitle.className = "text-2xl font-bold text-gray-800 mb-4";
        gameTitle.innerText = game.name;
        gameTitle.style.cursor = "pointer";

        // Create flex container for rules and notes (hidden by default)
        const gameDetails = document.createElement("div");
        gameDetails.className = "flex space-x-4 hidden";  // hidden initially

        // Rules section
        const rulesDiv = document.createElement("div");
        rulesDiv.className = "w-1/2 text-left";
        const rulesTitle = document.createElement("h3");
        rulesTitle.className = "text-xl font-semibold text-gray-700 mb-2";
        rulesTitle.innerText = "Rules:";
        const rulesText = document.createElement("p");
        rulesText.className = "text-gray-600";
        rulesText.innerText = game.rules;
        rulesDiv.appendChild(rulesTitle);
        rulesDiv.appendChild(rulesText);

        // Notes section
        const notesDiv = document.createElement("div");
        notesDiv.className = "w-1/2 text-left";
        const notesTitle = document.createElement("h3");
        notesTitle.className = "text-xl font-semibold text-gray-700 mb-2";
        notesTitle.innerText = "Notes:";
        const notesText = document.createElement("p");
        notesText.className = "text-gray-600";
        notesText.innerText = game.notes;
        notesDiv.appendChild(notesTitle);
        notesDiv.appendChild(notesText);

        // Append rules and notes to gameDetails
        gameDetails.appendChild(rulesDiv);
        gameDetails.appendChild(notesDiv);

        // Append title and details to gameDiv
        gameDiv.appendChild(gameTitle);
        gameDiv.appendChild(gameDetails);

        // Append gameDiv to gamesList container
        gamesList?.appendChild(gameDiv);

        // Toggle visibility of game details on title click
        gameTitle.addEventListener("click", () => {
            if (gameDetails.classList.contains("hidden")) {
                gameDetails.classList.remove("hidden");  // Show the details
            } else {
                gameDetails.classList.add("hidden");  // Hide the details
            }
        });
    });
});