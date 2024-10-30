// Game content
const games = [
    {
        name: "ERS",
        image: "src/pictures/ers.png",
        alt: "ERS Image",
        content: "ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ERS Content ",
        drink: false,
    },
    // Euchre
    {
        name: "Euchre",
        image: "src/pictures/euchre.png",
        alt: "Euchre Image",
        content: "Lol... no.",
        drink: false
    },
    {
        name: "Death Square",
        image: "src/pictures/dsquare.png",
        alt: "Death Square Image",
        content: "DS Content",
        drink: true
    },
    {
        name: "Golf",
        image: "src/pictures/golf.png",
        alt: "Golf Image",
        content: "Golf text",
        drink: false
    },
    {
        name: "Hearts",
        image: "src/pictures/hearts.png",
        alt: "Hearts Image",
        content: "Hearts text",
        drink: false
    },
    // King's Cup
    {
        name: "King's Cup",
        image: "src/pictures/kingscup.png",
        alt: "King's Cup Image",
        content:
            "<i>Game</i><br>" +
            "Put a large cup; the king's cup, in the center of a table. Each player takes turns drawing cards and following the instructions corresponding to each card. An example of a card would be 'raise your hand to heaven' if you draw a '7'. The last person to do so takes a drink. Games can either end when the last card from the deck is drawn, or when the king's cup has been drunken.<br>" + 
            "<br><i>Rules</i><br>" +
            "<li>A - Waterfall: Each player starts drinking at the same time as the person to their left. No player can stop drinking until the person before them stops.</li><br>" +
            "<li>2 - You: Whoever draws this can choose anyone to take a drink.</li><br>" +
            "<li>3 - Me: The person who draws this takes a drink.</li><br>" +
            "<li>4 - Floor: The last person to touch the floor takes a drink.</li><br>" +
            "<li>5 - Guys: All the guys at the table drink.</li><br>" +
            "<li>6 - Chicks: All the girls at the table drink.</li><br>" +
            "<li>7 - Heaven: If you draw this card, raise your hand above you head. Every other player must do so as well. The last person takes a drink.</li><br>" +
            "<li>8 - Mate: Choose someone to be your mate. For the rest of the game, they drink when you drink.</li><br>" +
            "<li>9 - Rhyme: You say a word, then the person to your right has to say a word that rhymes. This continues until someone can't think of a word. That person takes a drink. You can't reuse words.</li><br>" +
            "<li>10 - Categories: You say a word, then the person to your right has to say a word that rhymes. This continues until someone can't think of a word. That person takes a drink. You can't reuse words.</li><br>" +
            "<li>J - Never Have I Ever: Everyone plays Never Have I Ever.</li><br>" +
            "<li>Q - Questions: Ask someone a question. That person then asks someone else a question. This continues until someone messes up or fails to ask a question. That person drinks. No question can be repeated.</li><br>" +
            "<li>K - Set a rule to be followed, (e.g. stand on one foot when you drink, only speak in an accent, etc.). When each of the first 3 Kings is drawn, the person who drew it puts some of their drink into the King's Cup in the center of the table. When the 4th King is drawn, the person who drew it must drink the entire King's Cup.</li><br>",
        drink: true
    },
    {
        name: "Pablo",
        image: "src/pictures/pablo.png",
        alt: "Pablo Image",
        content: "PABLO TEST TEXT",
        drink: false
    },
    {
        name: "Presidents",
        image: "src/pictures/presidents.png",
        alt: "Presidents Image",
        content: "<i>Game</i><br>" +
        "Evenly distribute the cards among players, leaving jokers out. For the first round, the player with the 3 of spades begins. by playing any single card or set of equal-ranked cards (e.g., three sixes)." +
        "Each player in turn can either pass out of the round or play a card/set of the same size, with equal or higher rank(s) (e.g., two fours can be beaten by two queens, two tens, or even two other fours, but not a single queen, three tens, or a single four.)" +
        "The round continues until everyone passes on a play or is skipped with no new cards being added to the pile, after which the highest play wins the 'trick', and the player who played last leads the next round.<br>" +
        "<br><i>Rules</i><br>" +
        "<li>Card hierarchy: 3-10 < J-K < A < 2<br></li>" +
        "<li>Twos are wildcards that can be played on top of any card regardless of the rank or set size, and it automatically wins the player who played it the trick.</li><br>" +
        "<li>If a player plays a card/set of equal-ranked cards, the subsequent player is skipped, but not out of the round.</li><br>" +
        "<li>optional, can't end on a 2</li><br>",
        drink: false
    },
    {
        name: "Ride the Bus",
        image: "src/pictures/ridethebus.png",
        alt: "Ride the Bus Image",
        content: "RTB",
        drink: true
    },
    {
        name: "Tens & Twos",
        image: "src/pictures/tensandtwos.png",
        alt: "Tens & Twos Image",
        content: "Tens and Twos Content",
        drink: false
    },
    {
        name: "12.12.24",
        image: "src/pictures/birthday.png",
        alt: "Happy Birthday Aartie!",
        content: "Happy 23rd Aartie!<br><br>Love ya always,<br>-Tanuj<br><br>",
        drink: false
    },
];

// Birthday message
const birthday_message =
    "<i><br>Dear Aartie,<br><br></i>" +
    "<i>How did we end up here lol...<br></i>" +
    "<i>...<br></i>";

// Creates games
function createGames() {
    // variables
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

        // Birthday bonus content
        if (game.name === "12.12.24") {
            const inputBox = $('<input type="text" class="birthday_input" placeholder="Our calendar"/>');
            
            // Append input box below the content
            contentDiv.append(inputBox);

            // Event listener to check for correct code
            inputBox.on("input", function() {
                if (inputBox.val().toUpperCase() === "MATCHA") {
                    // Check if "Congrats!" message already exists to prevent duplicates
                    if (contentDiv.find(".birthday_message").length === 0) {
                        const birthdayMessage = $(`<div class="birthday_message">${birthday_message}</div>`);
                        contentDiv.append(birthdayMessage);
                    }
                }
                else {
                    contentDiv.find(".birthday_message").remove();
                }
            });
        }
    
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