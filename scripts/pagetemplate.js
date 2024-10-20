/* ------------- Winter 2024 EECS 493 Assignment 3 Starter Code ------------ */

/* ------------------------ GLOBAL HELPER VARAIBLES ------------------------ */
// Difficulty Helpers
let astProjectileSpeed = 3;            // easy: 1, norm: 3, hard: 5

// Game Object Helpers
let currentAsteroid = 1;
const AST_OBJECT_REFRESH_RATE = 15;
const maxPersonPosX = 1218;
const maxPersonPosY = 658;
const PERSON_SPEED = 5;                // #pixels each time player moves by
const portalOccurrence = 15000;        // portal spawns every 15 seconds
const portalGone = 5000;               // portal disappears in 5 seconds
const shieldOccurrence = 10000;        // shield spawns every 10 seconds
const shieldGone = 5000;               // shield disappears in 5 seconds

// Movement Helpers
let LEFT = false;
let RIGHT = false;
let UP = false;
let DOWN = false;

// TODO: ADD YOUR GLOBAL HELPER VARIABLES (IF NEEDED)
let HIT = false;
let SHIELDED = false;
let SCORE = 0;
let DANGER = 20;
let LEVEL = 1;
let FIRST_GAME = true;
const collect_sound_effect = new Audio('src/audio/collect.mp3');

/* --------------------------------- MAIN ---------------------------------- */
$(document).ready(function () {
  // jQuery selectors
  game_window = $('.game-window');
  game_screen = $("#actual-game");
  game_over_screen = $('.Gameover');
  asteroid_section = $('.asteroid_section');
  // hide all other pages initially except landing page
  game_screen.hide();
  game_over_screen.hide();
  


  /* -------------------- ASSIGNMENT 2 SELECTORS BEGIN -------------------- */
  // Main Menu Variables
  var Main_Menu_Page = $('#Main_Menu');
  var Play_Button = $('.play_button');
  var Settings_Button = $('.settings_button');
  var scoreboard = $('.scoreboard');
  var asteroid_class = $('.asteroid_class');
  var get_ready = $('.get_ready');

  // Settings Variables
  var Settings_Page = $('#Settings');
  var Settings_Buttons = $('.settings_buttons');
  var Easy_Button = $('#easy');
  var Easy_Highlight = $('.easy_highlighted');
  var Normal_Button = $('#normal');
  var Normal_Highlight = $('.normal_highlighted');
  var Hard_Button = $('#hard');
  var Hard_Highlight = $('.hard_highlighted');
  var difficulty = 2;
  var Close_Button = $('.close_button');
  var Volume_Control = document.getElementById("volume_range");
  var Volume_Number = document.getElementById("volume_number");

  // Tutorial Variables
  var Tutorial_Page = $('#Tutorial');

  // Game Over Variables
  var Start_Over_Button = $('.start_over');

  // Initial Settings
  Volume_Number.innerHTML = Volume_Control.value;
  Settings_Buttons.removeClass('easy_highlighted hard_highlighted');

  // Play button clicked
  Play_Button.click(function() {
    if (FIRST_GAME) {
      Tutorial_Page.show();
    }
    else {
      begin_game();
    }
    Main_Menu_Page.hide();
  });
  
  // Settings button clicked
  Settings_Button.click(function() {
    Settings_Page.show();
  });

  // Volume slider display
  Volume_Control.oninput = function() {
    Volume_Number.innerHTML = this.value;
  }

  // Easy settings button clicked
  Easy_Highlight.click(function() {
    Settings_Buttons.removeClass('normal_highlighted hard_highlighted');
    Easy_Button.addClass('easy_highlighted');
    difficulty = 1;
    DANGER = 10;
  });

  // Normal settings button clicked
  Normal_Highlight.click(function() {
    Settings_Buttons.removeClass('easy_highlighted hard_highlighted');
    Normal_Button.addClass('normal_highlighted');
    difficulty = 2;
    DANGER = 20;
  });

  // Hard settings button clicked
  Hard_Highlight.click(function() {
    Settings_Buttons.removeClass('easy_highlighted normal_highlighted');
    Hard_Button.addClass('hard_highlighted');
    difficulty = 3;
    DANGER = 30;
  });

  // Close settings button clicked
  Close_Button.click(function() {
    Settings_Page.hide();
  });

  // Start over button clicked
  Start_Over_Button.click(function() {
    game_over_screen.hide();
    Play_Button.show();
    Settings_Button.show();
  });
  
  /* --------------------- ASSIGNMENT 2 SELECTORS END --------------------- */

  // TODO: DEFINE YOUR JQUERY SELECTORS (FOR ASSIGNMENT 3) HERE
  var Start_Button = $('.start_button');
  Start_Button.click(function() {
    Tutorial_Page.hide();
    FIRST_GAME = false;
    begin_game();
  });

  function begin_game() {
    set_start();
    Main_Menu_Page.hide();
    game_screen.show();
    scoreboard.show();
    get_ready.show();
    asteroid_class.hide();
    var volume_val = document.getElementById("volume_number");
    collect_sound_effect.volume = parseFloat(parseInt(volume_val.textContent) / 100);
    setTimeout(function() {
      get_ready.hide();
      asteroid_class.show();
      move_rocket();
      increase_score();
      spawn_portals();
      spawn_shields();
      spawn_asteroids();
      game_over();
    }, 3000);
  }

  // Game over
  function game_over() {
    let alive = setInterval(function() {
      if (HIT) {
        var volume_val = document.getElementById("volume_number")
        const sound = new Audio('src/audio/die.mp3');
        sound.volume = parseFloat(parseInt(volume_val.textContent) / 100);
        sound.play();
        setTimeout(function() {
          game_screen.hide();
          Main_Menu_Page.show();
          Play_Button.hide();
          Settings_Button.hide();
          const finalScore = document.getElementById("final_score");
          finalScore.textContent = SCORE;
          game_over_screen.show();
        }, 2000);
        clearInterval(alive);
      }
    }, 10);
  }

  // Set start parameters
  function set_start() {
    if (difficulty == 1) {
      astProjectileSpeed = 1;
      DANGER = 10;
    }
    if (difficulty == 2) {
      astProjectileSpeed = 3;
      DANGER = 20;
    }
    if (difficulty == 3) {
      astProjectileSpeed = 5;
      DANGER = 30;
    }
    currentAsteroid = 1;
    const dangerVal = document.getElementById("danger_val");
    dangerVal.textContent = DANGER;
    SCORE = 0;
    const scoreVal = document.getElementById("score_val");
    scoreVal.textContent = SCORE;
    LEVEL = 1;
    const levelVal = document.getElementById("level_val");
    levelVal.textContent = LEVEL;
    HIT = false;
    SHIELDED = false;
    const rocket = document.getElementById('rocket');
    rocket.style.backgroundImage = "url('src/player/player.gif')";
  }

  // Rocket Movement
  function move_rocket() {
    const rocket = document.getElementById('rocket');
    rocket.style.top = 360 + 'px';
    rocket.style.left = 640 + 'px';
    rocket_movement = setInterval(function() { 
      if (LEFT && parseInt(rocket.style.left) > 40 && HIT == false) {
        if (SHIELDED) {
          rocket.style.backgroundImage = "url('src/player/player_shielded_left.gif')";
        }
        else {
          rocket.style.backgroundImage = "url('src/player/player_left.gif')";
        }
        rocket.style.left =  parseInt(rocket.style.left) - PERSON_SPEED + 'px';
      }
      if (RIGHT && parseInt(rocket.style.left) < 1240 && HIT == false) {
        if (SHIELDED) {
          rocket.style.backgroundImage = "url('src/player/player_shielded_right.gif')";
        }
        else {
          rocket.style.backgroundImage = "url('src/player/player_right.gif')";
        }
        rocket.style.left = parseInt(rocket.style.left) + PERSON_SPEED + 'px';
      }
      if (UP && parseInt(rocket.style.top) > 40 && HIT == false) {
        if (SHIELDED) {
          rocket.style.backgroundImage = "url('src/player/player_shielded_up.gif')";
        }
        else {
          rocket.style.backgroundImage = "url('src/player/player_up.gif')";
        }
        rocket.style.top = parseInt(rocket.style.top) - PERSON_SPEED + 'px';
      }
      if (DOWN && parseInt(rocket.style.top) < 680 && HIT == false) {
        if (SHIELDED) {
          rocket.style.backgroundImage = "url('src/player/player_shielded_down.gif')";
        }
        else {
          rocket.style.backgroundImage = "url('src/player/player_down.gif')";
        }
        rocket.style.top = parseInt(rocket.style.top) + PERSON_SPEED + 'px';
      }
    }, 10);
    hit_rocket = setInterval(function() {
      if (HIT) {
        clearInterval(rocket_movement);
        clearInterval(hit_rocket);
      }
    }, 10); 
  }

  // Spawn asteroids
  function spawn_asteroids() {
    spawn_rate = 800;
    if (difficulty == 1) {
      spawn_rate = 1000;
    }
    if (difficulty == 2) {
      spawn_rate = 800;
    }
    if (difficulty == 3) {
      spawn_rate = 600;
    }
    const spawn_new_asteroids = setInterval(function() {
      spawn()
    }, spawn_rate);
    hit_asteroids = setInterval(function() {
      if (HIT) {
        clearInterval(spawn_new_asteroids);
        clearInterval(hit_asteroids);
      }
    }, 10);
  }

  // Collect audio
  function collect_audio() {
    var volume_val = document.getElementById("volume_number")
    const sound = new Audio('src/audio/collect.mp3');
    //sound.volume = parseFloat(parseInt(volume_val.textContent) / 100);
    //sound.play();
    collect_sound_effect.volume = parseFloat(parseInt(volume_val.textContent) / 100);
    collect_sound_effect.play()
    console.log("volume: ", collect_sound_effect.volume);
  }

  // Spawn portals
  function spawn_portals() {
    const spawn_new_portals = setInterval(function() {
      spawn_portal();
    }, portalOccurrence);
    hit_portal = setInterval(function() {
      if (HIT) {
        clearInterval(spawn_new_portals);
        clearInterval(hit_portal);
      }
    }, 10);
  }

  function spawn_portal() {
    const portal = document.createElement('img');
    portal.src = 'src/port.gif';
    portal.classList.add('portal');
    const window_element = document.getElementById('actual-game');
    const window = window_element.getBoundingClientRect();
    portal.style.left = getRandomNumber(window.left, window.right - 62) + 'px';
    portal.style.top = getRandomNumber(window.top, window.bottom - 62) + 'px';
    window_element.appendChild(portal);
    let rocket_id = $('#rocket');
    let portal_id = $('.portal');
    portal_reached = setInterval(function() {
      if (isColliding(portal_id, rocket_id)) {
        console.log('portal ding')
        collect_audio();
        portal.remove();
        LEVEL += 1;
        const levelVal = document.getElementById("level_val");
        levelVal.textContent = LEVEL;
        DANGER += 2;
        const dangerVal = document.getElementById("danger_val");
        dangerVal.textContent = DANGER;
        astProjectileSpeed += 0.5;
        clearInterval(portal_reached);
      }
    }, 10);
    setTimeout(() => {
      portal.remove();
    }, portalGone);
  }

  // Spawn shields
  function spawn_shields() {
    const spawn_new_shields = setInterval(function() {
      spawn_shield();
    }, shieldOccurrence);
    hit_shield = setInterval(function() {
      if (HIT) {
        clearInterval(spawn_new_shields);
        clearInterval(hit_shield);
      }
    }, 10);
  }

  function spawn_shield() {
    const shield = document.createElement('img');
    shield.src = 'src/shield.gif';
    shield.classList.add('shield');
    const window_element = document.getElementById('actual-game');
    const window = window_element.getBoundingClientRect();
    shield.style.left = getRandomNumber(window.left, window.right - 62) + 'px';
    shield.style.top = getRandomNumber(window.top, window.bottom - 62) + 'px';
    window_element.appendChild(shield);
    const rocket = document.getElementById('rocket');
    let rocket_id = $('#rocket');
    let shield_id = $('.shield');
    shield_reached = setInterval(function() {
      if (isColliding(shield_id, rocket_id)) {
        console.log('shield ding')
        collect_audio();
        shield.remove();
        SHIELDED = true;
        rocket.style.width = 104 + 'px';
        rocket.style.height = 114 + 'px';
        rocket.style.backgroundImage = "url('src/player/player_shielded.gif')";
        clearInterval(shield_reached);
      }
    }, 10);
    setTimeout(() => {
      shield.remove();
    }, shieldGone);
  }

  // Track score
  function increase_score() {
    const scoreVal = document.getElementById("score_val");
    const updateScore = setInterval(function() {
        SCORE += 40;
        scoreVal.textContent = SCORE;
    }, 500);
    hit_score = setInterval(function() {
      if (HIT) {
        clearInterval(updateScore);
        clearInterval(hit_score);
      }
    }, 10);
  }
});


/* ---------------------------- EVENT HANDLERS ----------------------------- */
// Keydown event handler
document.onkeydown = function (e) {
  if (e.key == 'ArrowLeft') LEFT = true;
  if (e.key == 'ArrowRight') RIGHT = true;
  if (e.key == 'ArrowUp') UP = true;
  if (e.key == 'ArrowDown') DOWN = true;
}

// Keyup event handler
document.onkeyup = function (e) {
  if (e.key == 'ArrowLeft') LEFT = false;
  if (e.key == 'ArrowRight') RIGHT = false;
  if (e.key == 'ArrowUp') UP = false;
  if (e.key == 'ArrowDown') DOWN = false;
}

/* ------------------ ASSIGNMENT 2 EVENT HANDLERS BEGIN ------------------ */

/* ------------------- ASSIGNMENT 2 EVENT HANDLERS END ------------------- */

// TODO: ADD MORE FUNCTIONS OR EVENT HANDLERS (FOR ASSIGNMENT 3) HERE


/* ---------------------------- GAME FUNCTIONS ----------------------------- */
// Starter Code for randomly generating and moving an asteroid on screen
class Asteroid {
  // constructs an Asteroid object
  constructor() {
    /*------------------------Public Member Variables------------------------*/
    // create a new Asteroid div and append it to DOM so it can be modified later
    let objectString = "<div id = 'a-" + currentAsteroid + "' class = 'curAsteroid' > <img src = 'src/asteroid.png'/></div>";
    asteroid_section.append(objectString);
    // select id of this Asteroid
    this.id = $('#a-' + currentAsteroid);
    currentAsteroid++; // ensure each Asteroid has its own id
    // current x, y position of this Asteroid
    this.cur_x = 0; // number of pixels from right
    this.cur_y = 0; // number of pixels from top

    /*------------------------Private Member Variables------------------------*/
    // member variables for how to move the Asteroid
    this.x_dest = 0;
    this.y_dest = 0;
    // member variables indicating when the Asteroid has reached the boarder
    this.hide_axis = 'x';
    this.hide_after = 0;
    this.sign_of_switch = 'neg';
    // spawn an Asteroid at a random location on a random side of the board
    this.#spawnAsteroid();
  }

  // Requires: called by the user
  // Modifies:
  // Effects: return true if current Asteroid has reached its destination, i.e., it should now disappear
  //          return false otherwise
  hasReachedEnd() {
    if (this.hide_axis == 'x') {
      if (this.sign_of_switch == 'pos') {
        if (this.cur_x > this.hide_after) {
          return true;
        }
      }
      else {
        if (this.cur_x < this.hide_after) {
          return true;
        }
      }
    }
    else {
      if (this.sign_of_switch == 'pos') {
        if (this.cur_y > this.hide_after) {
          return true;
        }
      }
      else {
        if (this.cur_y < this.hide_after) {
          return true;
        }
      }
    }
    return false;
  }

  // Requires: called by the user
  // Modifies: cur_y, cur_x
  // Effects: move this Asteroid 1 unit in its designated direction
  updatePosition() {
    // ensures all asteroids travel at current level's speed
    this.cur_y += this.y_dest * astProjectileSpeed;
    this.cur_x += this.x_dest * astProjectileSpeed;
    // update asteroid's css position
    this.id.css('top', this.cur_y);
    this.id.css('right', this.cur_x);
  }

  // Requires: this method should ONLY be called by the constructor
  // Modifies: cur_x, cur_y, x_dest, y_dest, num_ticks, hide_axis, hide_after, sign_of_switch
  // Effects: randomly determines an appropriate starting/ending location for this Asteroid
  //          all asteroids travel at the same speed
  #spawnAsteroid() {
    // REMARK: YOU DO NOT NEED TO KNOW HOW THIS METHOD'S SOURCE CODE WORKS
    let x = getRandomNumber(0, 1280);
    let y = getRandomNumber(0, 720);
    let floor = 784;
    let ceiling = -64;
    let left = 1344;
    let right = -64;
    let major_axis = Math.floor(getRandomNumber(0, 2));
    let minor_aix = Math.floor(getRandomNumber(0, 2));
    let num_ticks;

    if (major_axis == 0 && minor_aix == 0) {
      this.cur_y = floor;
      this.cur_x = x;
      let bottomOfScreen = game_screen.height();
      num_ticks = Math.floor((bottomOfScreen + 64) / astProjectileSpeed) || 1;

      this.x_dest = (game_screen.width() - x);
      this.x_dest = (this.x_dest - x) / num_ticks + getRandomNumber(-.5, .5);
      this.y_dest = -astProjectileSpeed - getRandomNumber(0, .5);
      this.hide_axis = 'y';
      this.hide_after = -64;
      this.sign_of_switch = 'neg';
    }
    if (major_axis == 0 && minor_aix == 1) {
      this.cur_y = ceiling;
      this.cur_x = x;
      let bottomOfScreen = game_screen.height();
      num_ticks = Math.floor((bottomOfScreen + 64) / astProjectileSpeed) || 1;

      this.x_dest = (game_screen.width() - x);
      this.x_dest = (this.x_dest - x) / num_ticks + getRandomNumber(-.5, .5);
      this.y_dest = astProjectileSpeed + getRandomNumber(0, .5);
      this.hide_axis = 'y';
      this.hide_after = 784;
      this.sign_of_switch = 'pos';
    }
    if (major_axis == 1 && minor_aix == 0) {
      this.cur_y = y;
      this.cur_x = left;
      let bottomOfScreen = game_screen.width();
      num_ticks = Math.floor((bottomOfScreen + 64) / astProjectileSpeed) || 1;

      this.x_dest = -astProjectileSpeed - getRandomNumber(0, .5);
      this.y_dest = (game_screen.height() - y);
      this.y_dest = (this.y_dest - y) / num_ticks + getRandomNumber(-.5, .5);
      this.hide_axis = 'x';
      this.hide_after = -64;
      this.sign_of_switch = 'neg';
    }
    if (major_axis == 1 && minor_aix == 1) {
      this.cur_y = y;
      this.cur_x = right;
      let bottomOfScreen = game_screen.width();
      num_ticks = Math.floor((bottomOfScreen + 64) / astProjectileSpeed) || 1;

      this.x_dest = astProjectileSpeed + getRandomNumber(0, .5);
      this.y_dest = (game_screen.height() - y);
      this.y_dest = (this.y_dest - y) / num_ticks + getRandomNumber(-.5, .5);
      this.hide_axis = 'x';
      this.hide_after = 1344;
      this.sign_of_switch = 'pos';
    }
    // show this Asteroid's initial position on screen
    this.id.css("top", this.cur_y);
    this.id.css("right", this.cur_x);
    // normalize the speed s.t. all Asteroids travel at the same speed
    let speed = Math.sqrt((this.x_dest) * (this.x_dest) + (this.y_dest) * (this.y_dest));
    this.x_dest = this.x_dest / speed;
    this.y_dest = this.y_dest / speed;
  }
}

// Spawns an asteroid travelling from one border to another
function spawn() {
  let asteroid = new Asteroid();
  setTimeout(spawn_helper(asteroid), 0);
}

function spawn_helper(asteroid) {
  let astermovement = setInterval(function () {
    // update Asteroid position on screen
    asteroid.updatePosition();
    // determine whether Asteroid has reached its end position
    const rocket = document.getElementById('rocket');
    let rocket_id = $('#rocket')
    if (isColliding(asteroid.id, rocket_id)) {
      if (SHIELDED) {
        asteroid.id.remove();
        SHIELDED = false;
        rocket.style.width = 80 + 'px';
        rocket.style.height = 80 + 'px';
        rocket.style.backgroundImage = "url('src/player/player.gif')";
        clearInterval(astermovement);
      }
      else {
        // Add sound
        asteroid.id.remove();
        rocket.style.width = 80 + 'px';
        rocket.style.height = 80 + 'px';
        rocket.style.backgroundImage = "url('src/player/player_touched.gif')";
        astProjectileSpeed = 0;
        collect_sound_effect.volume = 0;
        HIT = true;
        clearInterval(astermovement);
      }
    }
    if (asteroid.hasReachedEnd()) { // i.e. outside the game boarder
      asteroid.id.remove();
      clearInterval(astermovement);
    }
  }, AST_OBJECT_REFRESH_RATE);
}

/* --------------------- Additional Utility Functions  --------------------- */
// Are two elements currently colliding?
function isColliding(o1, o2) {
  return isOrWillCollide(o1, o2, 0, 0);
}

// Will two elements collide soon?
// Input: Two elements, upcoming change in position for the moving element
function willCollide(o1, o2, o1_xChange, o1_yChange) {
  return isOrWillCollide(o1, o2, o1_xChange, o1_yChange);
}

// Are two elements colliding or will they collide soon?
// Input: Two elements, upcoming change in position for the moving element
// Use example: isOrWillCollide(paradeFloat2, person, FLOAT_SPEED, 0)
function isOrWillCollide(o1, o2, o1_xChange, o1_yChange) {
  const o1D = {
    'left': o1.offset().left + o1_xChange,
    'right': o1.offset().left + o1.width() + o1_xChange,
    'top': o1.offset().top + o1_yChange,
    'bottom': o1.offset().top + o1.height() + o1_yChange
  };
  const o2D = {
    'left': o2.offset().left,
    'right': o2.offset().left + o2.width(),
    'top': o2.offset().top,
    'bottom': o2.offset().top + o2.height()
  };
  // Adapted from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  if (o1D.left < o2D.right &&
    o1D.right > o2D.left &&
    o1D.top < o2D.bottom &&
    o1D.bottom > o2D.top) {
    // collision detected!
    return true;
  }
  return false;
}

// Get random number between min and max integer
function getRandomNumber(min, max) {
  return (Math.random() * (max - min)) + min;
}
