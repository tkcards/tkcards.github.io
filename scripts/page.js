// Game content
const games = [
    {
        name: "ERS",
        image: "src/Squirrel.png",
        alt: "ERS Image",
        content: "ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content "
    },
    {
        name: "Euchre",
        image: "src/Squirrel.png",
        alt: "Euchre Image",
        content: "Lol... no."
    },
    {
        name: "Golf",
        image: "src/Squirrel.png",
        alt: "Golf Image",
        content: "Golf text"
    },
    {
        name: "Hearts",
        image: "src/Squirrel.png",
        alt: "Hearts Image",
        content: "Hearts text"
    },
    {
        name: "King's Cup",
        image: "src/Squirrel.png",
        alt: "King's Cup Image",
        content: "kcupkcup"
    },
    {
        name: "Pablo",
        image: "src/Squirrel.png",
        alt: "Pablo Image",
        content: "PABLO TEST TEXT"
    },
    {
        name: "Presidents",
        image: "src/Squirrel.png",
        alt: "Presidents Image",
        content: "Presidents sample"
    },
    {
        name: "Tens and Twos",
        image: "src/Squirrel.png",
        alt: "Tens and Twos Image",
        content: "10s/2s"
    },
    {
        name: "12.12.24",
        image: "src/Squirrel.png",
        alt: "Happy Birthday Aartie!",
        content: "Happy 23rd Aartie!<br><br>Love you always,<br>-Tanuj"
    },
];

// Creates games
function createGames() {
    // Games container
    const games_container = $(".games_container");

    games.forEach(game => {
        // Create game
        const gameDiv = $('<div class="game"></div>');

        // Button
        const button = $(`
            <button class="game_button">
            <img src="${game.image}" alt="${game.alt}" class="game_image">
            <div class="game_title">${game.name}</div>
            </button>
        `);

        // Content
        const contentDiv = $(`<div class="game_content" style="display: none;">${game.content}</div>`);

        // Display game
        gameDiv.append(button);
        gameDiv.append(contentDiv);
        games_container.append(gameDiv);
    
        // Select game
        button.click(() => {
            $(".game_content").not(contentDiv).hide();
            contentDiv.toggle(); // Toggle the content visibility on button click
        });
    });
}

// On page load 
$(document).ready(function () {
    createGames(); // Create game elements dynamically
});