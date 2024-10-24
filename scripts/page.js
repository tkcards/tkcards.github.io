// Game content
const games = [
    {
        name: "10s & 2s",
        image: "src/Squirrel.png",
        alt: "10s and 2s Image",
        content: "Tens and Twos Content",
        drink: false
    },
    {
        name: "ERS",
        image: "src/Squirrel.png",
        alt: "ERS Image",
        content: "ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ",
        drink: false,
    },
    {
        name: "Euchre",
        image: "src/Squirrel.png",
        alt: "Euchre Image",
        content: "Lol... no.",
        drink: false
    },
    {
        name: "Death Square",
        image: "src/Squirrel.png",
        alt: "Death Square Image",
        content: "DS Content",
        drink: true
    },
    {
        name: "Golf",
        image: "src/Squirrel.png",
        alt: "Golf Image",
        content: "Golf text",
        drink: false
    },
    {
        name: "Hearts",
        image: "src/Squirrel.png",
        alt: "Hearts Image",
        content: "Hearts text",
        drink: false
    },
    {
        name: "King's Cup",
        image: "src/pictures/kingscup.png",
        alt: "King's Cup Image",
        content: "kcupkcup",
        drink: true
    },
    {
        name: "Pablo",
        image: "src/Squirrel.png",
        alt: "Pablo Image",
        content: "PABLO TEST TEXT",
        drink: false
    },
    {
        name: "Presidents",
        image: "src/Squirrel.png",
        alt: "Presidents Image",
        content: "Presidents sample",
        drink: false
    },
    {
        name: "Ride the Bus",
        image: "src/Squirrel.png",
        alt: "Ride the Bus Image",
        content: "RTB",
        drink: true
    },
    {
        name: "12.12.24",
        image: "src/pictures/12.12.24.png",
        alt: "Happy Birthday Aartie!",
        content: "Happy 23rd Aartie!<br><br>Love ya always,<br>-Tanuj",
        drink: false
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
            <div class="icon_image">
                ${game.name === "12.12.24" 
                    ? `<img src="src/icons/cake.png" alt="Cake Image" class="cake_image">` 
                    : game.drink 
                        ? `<img src="src/icons/drink.png" alt="Drink Image" class="drink_image">` 
                        : ''}
            </div>
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
            
            if (contentDiv.is(":visible")) {
                contentDiv.hide();
                gameDiv.removeClass('selected_game');
            } else {
                contentDiv.show();
                $(".game").removeClass('selected_game');
                gameDiv.addClass('selected_game');
            }
            
        });
    });
}

// On page load 
$(document).ready(function () {
    // Create games
    createGames(); 
});