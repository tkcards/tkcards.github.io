// Game data
const games = [
    {
        name: "King's Cup",
        image: "src/squirrel.png",
        alt: "kcup image",
        content: "kcupkcup"
    },
    {
        name: "Pablo",
        image: "src/squirrel.png",
        alt: "pablo image",
        content: "PABLO TEST TEXT"
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
            contentDiv.toggle(); // Toggle the content visibility on button click
        });
    });
}

// On page load 
$(document).ready(function () {
    createGames(); // Create game elements dynamically

    /*
    var pablo_button = $('.pablo_button');
    var kcup_button = $('.kcup_button');
    var pablo_content = $('.pablo_content');
    var kcup_content = $('.kcup_content');
    var current_game = "";

    // select/unselect pablo 
    pablo_button.click(function() {
        if (pablo_content.is(':visible')) {
            pablo_content.hide();
        } else {
            pablo_content.show();
        }
    });

    // select/unselect kcup 
    kcup_button.click(function() {
        if (kcup_content.is(':visible')) {
            kcup_content.hide();
        } else {
            kcup_content.show();
        }
    });
    */
});