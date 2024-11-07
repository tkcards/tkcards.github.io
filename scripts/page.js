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
            "<i>Game</i><br><br>" +
            "Put a large cup; the king's cup, in the center of a table. Each player takes turns drawing cards and following the actions corresponding to each card. An example of a card would be 'raise your hand to heaven' if you draw a 7. The last person to do so takes a drink. Games can either end when the last card from the deck is drawn, or when the king's cup has been drunken.<br>" + 
            "<br><i>Actions</i><br><br>" +
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
            "<li>K - Set a rule to be followed, (e.g. stand on one foot when you drink, only speak in an accent, etc.). When each of the first 3 Kings is drawn, the person who drew it puts some of their drink into the King's Cup in the center of the table. When the 4th King is drawn, the person who drew it must drink the entire King's Cup.</li>",
        drink: true
    },
    // Pablo
    {
        name: "Pablo",
        image: "src/pictures/pablo.png",
        alt: "Pablo Image",
        content: "<i>Game</i><br><br>" +
        "Deal 4 cards from the deck, including jokers, face down to each player. Everyone arranges their cards into two rows of two and secretly looks at the bottom (closest) two cards to them. " +
        "Choose someone to start. Each player on their turn draws a card from the remaining deck. Players may play the card they picked or replace one of their current face down cards with it and play the face down card. " +
        "Playing a card entails adding it to the discard pile and optionally performing one of the rules associated with the card if any. " +
        "The goal is to have the lowest possible total card value at the end of the game. At the end of any player's turn, they may call 'Pablo,' and their cards cannot be peaked at or swapped. Each other player has one more turn to play, then the game ends, everyone turns up their cards, and sums their totals.<br>" +
        "<br><i>Rules</i><br><br>" +
        "<li>Card values: Red King (-2), Joker (0), Ace (1), 2-10 (value), Jack (11), Queen (12), Black King (13)</li><br>" +
        "<li>When a card is played, any player may slap any face down card from anyone's board. The slapped card is turned up to see if it matches the played card. If a player slaps their own card and correctly matches the played card, they play and get rid of their card, allowing them to take any action associated with the card as well. If you slap another player's card and simillarly it matches, that player is dealt a new face down card that's added to their board. Any incorrect slaps result in the slapping player's being dealt a new face down card to their board.</li>" +
        "<br><i>Optional</i><br><br>" +
        "<li>Only the first slap counts each round counts.</li>" +
        "<br><i>Actions</i><br><br>" +
        "<li>7/8 - Peak at one of your cards.</li><br>"+
        "<li>9/10 - Peak at one of someone else's cards.</li><br>" +
        "<li>J/Q - Blind swap two cards from anyone's boards.</li><br>" +
        "<li>Black King - Look at any one card and then swap two cards from anyone's boards.</li>",
        drink: false
    },
    // Presidents
    {
        name: "Presidents",
        image: "src/pictures/presidents.png",
        alt: "Presidents Image",
        content:
        "<i>Game</i><br><br>" +
        "Evenly distribute the cards among players, leaving jokers out. For the first round, the player with the 3 of spades begins. by playing any single card or set of equal-ranked cards (e.g., three sixes). " +
        "Each player in turn can either pass out of the round or play a card/set of the same size, with equal or higher rank(s) (e.g., two 4s can be beaten by two queens, two 10s, or even two other 4s, but not a single queen, three tens, or a single four). " +
        "The round continues until everyone passes on a play or is skipped with no new cards being added to the pile, after which the current highest play wins the 'trick', and the player who played last leads the next round. " +
        "The game ends when all players have played their cards, and an order has been created. For all future games, the cards are evenly distributed, however, the first place winner or 'president' swaps their worst cards with the last place finisher's best cards. Similarly, second place swaps with second to last (e.g., for a game of 5 players: 1st swaps 2 cards with 5th, 2nd swaps 1 card with 4th, and third keeps their cards). Now, the last place finisher always starts the game.<br>" +
        "<br><i>Rules</i><br><br>" +
        "<li>Card hierarchy: 3-10 < J-K < A < 2</li><br>" +
        "<li>Twos are wildcards that can be played on top of any card regardless of the rank or set size, and it automatically wins the player who played it the trick.</li><br>" +
        "<li>If a player plays a card/set of equal-ranked cards, the subsequent player is skipped, but not out of the round.</li>" +
        "<br><i>Optional</i><br><br>" +
        "<li>If a player ends with a two as their final card, they automatically lose the game.</li><br>" +
        "<li>If any player at any point has the cards of a rank to complete a set on the stack (e.g. all four 7s, all four queens, etc.), then they may place the cards down, regardless of turn or the trick's number of cards, before the game continues and win the trick.</li>",
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
        content: "A calendar, drink, and flavor.<br><br>",
        drink: false
    },
];

// Birthday message
const birthday_message =
    "<i><br>Dear Aartie,<br><br></i>" +
    "<i>How did we end up here lol...</i><br><br>" +
    "<i>With you, everything comes so naturally. Usually, the words find themselves, and we're 'blessed' with the most verbose I love you ever printed. </i>" +
    "<i>But right now, my fingers are still. For the first time, I understand what people mean, when they say words can't express the way I feel about you.</i><br><br>" +
    "<i>For what little justice it does to the truth, you are the most intelligent kind-hearted passionate lively beautiful person I have ever met. </i>" +
    "<i>Thank you for finding your way into my world. Thank you for inspiring me to better myself. Thank you for making the late night grinds, stupid jokes, midnight meals, and outdoor adventuring so much more special.</i><br><br>" +
    "<i>To my best friend...</i><br><br>" +
    "<i>Happy birthday!</i><br><br>" +
    "<i>She's 23! Not really sure what you unlock with this one to be honest, but I'm so excited to see what this year holds!</i><br><br>" +
    "<i>Love you always, Tanuj</i>";

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
            const inputBox = $('<input type="text" class="birthday_input" placeholder="What am I?"/>');
            
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