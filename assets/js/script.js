// Global Variables

const mainMenu = document.getElementsByClassName("main-menu-content")[0];

// These variable are all the main menu buttons
const mainPlayButton = document.querySelector("#main-play-button");
const mainAudioButton = document.querySelector("#main-audio-button");
const contactButton = document.querySelector("#main-contact-button");

// These variable are all the mini-menus you can call from the main menu
const setUpMenu = document.querySelector("#set-up");
const contactFormContainer = document.querySelector("#contact-container");
const audioMenu = document.querySelector("#audio-menu");

// These variables are the different options on the Set Up mini menu
const easyLevel = document.querySelector("#easy");
const hardLevel = document.querySelector("#hard");
const setUpClose = document.querySelector("#set-up-close");

// This is the game container variable
const game = document.querySelector("#game-container");

// These are all the game assets: alien bushes and alien ambushers
const plants  = document.querySelectorAll(".plant");
const alienOnes = document.querySelectorAll(".alien-one");
const alienTwos = document.querySelectorAll(".alien-two");

// These are all the ingame text elements; time, score and highscore
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timerDisplay = document.querySelector("#timer");

// These are all the ingame buttons; help, audio and quit
const gameHelpButton = document.querySelector("#help");
const gameHelpClose = document.querySelector("#help-close");
const gameAudioButton = document.querySelector("#game-audio-button");
const gameExitButton = document.querySelector("#game-exit-button");

// These are all the variables for the Game Over Menu
const gameOverMenu = document.querySelector("#game-over");
const gameOverScore = document.querySelector("#game-over-score");
const gameOverHighScore = document.querySelector("#game-over-high-score");
const noAndReturn = document.querySelector("#no-return");
const yesAndReturn = document.querySelector("#yes-return");

// These are all the mutable variables needed for good gameplay
let lastPlant;
let timeUp = false;
let levelHard = false;
let timeLimit = 30000;
let score = 0;
let highScore = localStorage.getItem("gameHighScore")||0;
let timer;
let exitButtonClicked = false;
let startTime;
let gameActive;

// Main Menu Functions

// This opens Level Set Up on clicking Play Button

function gameSetUp() {
    clickSound();
    mainMenu.classList.remove("d-block");
    mainMenu.classList.add("d-none");
    setUpMenu.classList.remove("d-none");
    setUpMenu.classList.add("d-block");
    document.querySelectorAll(".modal-close").forEach(item => {
        item.addEventListener("click", event => {
            clickSound();
            setUpMenu.classList.remove("d-block");
            setUpMenu.classList.add("d-none");
            mainMenu.classList.remove("d-none");
            mainMenu.classList.add("d-block")
        });
    });
}

// This follows Level Set Up, and sets to Easy Level

function startEasyGame() {
    clickSound();
    levelHard = false;
    setUpMenu.classList.remove("d-block");
    setUpMenu.classList.add("d-none");
    game.classList.remove("d-none");
    game.classList.add("d-block");
    playGame();
}

// This follows Level Set Up, and sets to Hard Level

function startHardGame() {
    clickSound();
    setUpMenu.classList.remove("d-block");
    setUpMenu.classList.add("d-none");
    game.classList.remove("d-none");
    game.classList.add("d-block");
    playGame();
    levelHard = true;
}

// This opens High Score Display on clicking High Scores

function contactFormDisplay() {
        mainMenu.classList.remove("d-block");
        mainMenu.classList.add("d-none");
        contactFormContainer.classList.remove("d-none");
        contactFormContainer.classList.add("d-block");
        document.querySelectorAll(".modal-close").forEach(item => {
            item.addEventListener("click", event => {
                clickSound();
                contactFormContainer.classList.remove("d-block");
                contactFormContainer.classList.add("d-none");
                mainMenu.classList.remove("d-none");
                mainMenu.classList.add("d-block");
            });
        });
    }

// This opens Audio Set Up on clicking Audio Button

function audioDisplay() {
        mainMenu.classList.remove("d-block");
        mainMenu.classList.add("d-none");
        audioMenu.classList.remove("d-none");
        audioMenu.classList.add("d-block");
        document.querySelectorAll(".modal-close").forEach(item => {
            item.addEventListener("click", event => {
                clickSound();
                audioMenu.classList.remove("d-block");
                audioMenu.classList.add("d-none");
                mainMenu.classList.remove("d-none");
                mainMenu.classList.add("d-block");
            });
        });
    }


// In-Game Functions

// This function creates a random time window for each space ambush

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

// This function selects the andom plants from which aliens ambush you

function pickRandomPlant(plants) {
    const randomPlant = Math.floor(Math.random() * plants.length);
    const plant = plants[randomPlant];
    if (plant === lastPlant) {
        return pickRandomPlant(plants);
    }

    lastPlant = plant;
    return plant;
}

// This function controls each space ambush by the aliens

function ambush() {

    alienOnes.forEach(alienOne => alienOne.isWhacked = false);
    alienTwos.forEach(alienTwo => alienTwo.isWhacked = false);
    const popOutTime = randomTime(1900, 1500);
    const plant = pickRandomPlant(plants);
    const popOutTimeTwo = randomTime(1700, 1300);
    const plantTwo = pickRandomPlant(plants);

    if(gameActive) {
    plant.classList.add("up");
    setTimeout(()=>{
        alienOneAttack.call(plant);
    }, 670);
    setTimeout(() => {
        plant.classList.remove("up");
        if(!timeUp) { 
            ambush();
        }
    }, popOutTime);
  }

    // This part of the ambush function calls in a second alien if on Hard Level

if(levelHard && gameActive){
    if (plant === plantTwo) {
        pickRandomPlant(plants);
    }
    plantTwo.children[1].isAmbushing = Math.random() < 0.33;
    if(plantTwo.children[1].isAmbushing) {
        setTimeout(()=> {
        plantTwo.classList.add("up-two");
        setTimeout(()=>{
            alienTwoAttack.call(plantTwo);
        }, 670);
        setTimeout(() => {
        plantTwo.classList.remove("up-two");
      }, popOutTimeTwo);
    }, 300);
      }
     }
    }

// This function sets probability and attack time of Alien One

function alienOneAttack() {
    if(!this.children[0].isWhacked) {
        this.children[0].isAttacking = Math.random() < 0.30;
        if(this.children[0].isAttacking) {
        this.children[0].style.pointerEvent = "none";
        this.children[0].style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-one-red.svg)";
        score--;
        scoreDisplay.textContent = score;
        clickSound();
        setTimeout(() => {
    this.children[0].style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-one.svg)";
    this.children[0].style.pointerEvent = "all";
  }, 600);
      }
  }
}

// This function sets the probability and attack time of Alien Two

function alienTwoAttack() {
    if(!this.children[1].isWhacked) {
        this.children[1].isAttacking = Math.random() < 0.39;
        if(this.children[1].isAttacking) {
        this.children[1].style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-two-attack.svg)";
        score--;
        clickSound();
        scoreDisplay.textContent = score;
        setTimeout(() => {
    this.children[1].style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-two.svg)";
  }, 500);
      }
  }
}

// This function controls the user's ability to whack Alien One

function whackAlienOne(e) {
    if(!this.isWhacked){
    clickSound();
    score ++;
    }
    this.style.pointerEvent = "none";
    this.style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-one-yellow.svg)";
    setTimeout (()=> {
        this.parentNode.classList.remove('up');
    }, 500);
  setTimeout(() => {
    this.style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-one.svg)";
    this.style.pointerEvent = "all";
  }, 510);
  scoreDisplay.textContent = score;
  return this.isWhacked = true;
}

// This function controls the user's ability to smack Alien Two

function smackAlienTwo(e) {
    if(!this.isWhacked) {
    clickSound();
    score ++;
    }
    this.style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-two-dizzy.svg)";
    this.style.pointerEvent = "none";
  setTimeout (()=> {
        this.parentNode.classList.remove('up');
    }, 500);

  setTimeout(() => {
    this.style.backgroundImage = "url(https://daithishan.github.io/spaceambush/assets/images/game-assets/alien-two.svg)";
    this.style.pointerEvent = "all";
  }, 510);
  scoreDisplay.textContent = score;
  return this.isWhacked = true;
}


// This is the master function for gameplay, and calls all participating sub-functions e.g. ambush, audio, etc 

function playGame() {
    if(audio.isMenuMusic) {
        stopMenuMusic();
    }
    playMusic();
    timer = timeLimit/1000;
    score = 0;
    scoreDisplay.textContent = 0;
    highScoreDisplay.textContent = highScore;
    timerDisplay.textContent = timer;
    timeUp = false;
    gameActive = true;
    ambush();

startTimer = setInterval(()=>{
        timer -= 1;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            timer = 0;
            clearInterval(startTimer);
            gameOver();
        }
    }, 1000);
}

// This function checks the user's high score using local storage

function checkHighScore() {
    if(score > localStorage.getItem("gameHighScore")) {
        localStorage.setItem("gameHighScore", score);
        highScore = score;
        highScoreDisplay.textContent = highScore;
    }
}

// This function ends the game, and calls the Game Over Menu function

function gameOver() {
        timeUp = true;
        gameOverEffect();
        stopMusic();
        checkHighScore();
        gameOverMenuLaunch();
        gameOverScore.innerText = score;
        gameOverHighScore.innerText = highScore;
}

// This function is responsible for the Game Over Menu

function gameOverMenuLaunch() {
    gameOverMenu.classList.remove("d-none");
    gameOverMenu.classList.add("d-block");
}

// This function returns the user to the Main Menu after every game

function homeReturn() {
    clickSound();
    levelHard = false;
    gameOverMenu.classList.remove("d-block");
    gameOverMenu.classList.add("d-none");
    game.classList.remove("d-block");
    game.classList.add("d-none");
    mainMenu.classList.remove("d-none");
    mainMenu.classList.add("d-block");
}

// All of the Event Listeners

// This event listener calls gameSetUp() when user clicks play on Main Menu
mainPlayButton.addEventListener("click", gameSetUp);

// This event listener calls startEasyGame() when user clicks on Easy Level in Set Up Menu
easyLevel.addEventListener("click", startEasyGame);

// This event listener calls startHardGame() when user clicks on Hard Level in Set Up Menu
hardLevel.addEventListener("click", startHardGame);

// This event listener calls contactFormDisplay() when user clicks Contact on Main Menu
contactButton.addEventListener("click", contactFormDisplay);

// This event listener calls audioDisplay() when user clicks Audio on Main Menu
mainAudioButton.addEventListener("click", audioDisplay);

// Helps user adjust sound effect volume using slider in Audio Options Menu
document.getElementById("sound-button").addEventListener("click", event => {
    soundEffectController();
});

// Helps user adjust game music volume using slider in Audio Options Menu
document.getElementById("music-button").addEventListener("click", event => {
    musicController();
});

// Adds event listener to every alienOne asset, needed for whackAlienOne function
alienOnes.forEach(alienOne => alienOne.addEventListener("click", whackAlienOne));

// Adds event listener to every alienTwo asset, needed for smackAlienTwo function
alienTwos.forEach(alienTwo => alienTwo.addEventListener("click", smackAlienTwo));

// Helps user pause the game when they hit on ingame help menu
gameHelpButton.addEventListener("click", ()=>{
    clearInterval(startTimer);
    timer += 1;
    gameActive = false;
})

// Helps user restart the game when they close ingame help menu
gameHelpClose.addEventListener("click", ()=> {
    gameActive = true;
    ambush();
    startTimer = setInterval(()=>{
        timer -= 1;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            timer = 0;
            clearInterval(startTimer);
            gameOver();
        }
    }, 1000);
})

// Helps user toggle the audio on and off inside the game
gameAudioButton.addEventListener("click", toggleAudio);

// Helps user exit the game by clicking on the X when they're inside the game
gameExitButton.addEventListener("click", ()=>{
    timer = 0;
});

// Returns user to main menu if they decide not to donate
noAndReturn.addEventListener("click", homeReturn);

// Returns user to main menu while active new tab opens donate form
yesAndReturn.addEventListener("click", homeReturn);



