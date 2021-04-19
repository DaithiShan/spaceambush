// Global Variables

const donateButton = document.getElementById("donate-container");

const mainMenu = document.getElementsByClassName("main-menu-content")[0];
const mainPlayButton = document.querySelector("#main-play-button");
const mainAudioButton = document.querySelector("#main-audio-button")
const mainHighScoreButton = document.querySelector("#main-highscore-button")
const mainHighScoreMenu = document.querySelector("#main-highscore-container")

const setUpMenu = document.querySelector("#set-up");

const easyLevel = document.querySelector("#easy");
const hardLevel = document.querySelector("#hard");
const setUpClose = document.querySelector("#set-up-close")

const audioMenu = document.querySelector("#audio-menu")

const game = document.querySelector("#game-container")

const plants  = document.querySelectorAll(".plant");
const alienOnes = document.querySelectorAll(".alien-one");
const alienTwos = document.querySelectorAll(".alien-two");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timerDisplay = document.querySelector("#timer");

const gameAudioButton = document.querySelector("#game-audio-button");
const gameExitButton = document.querySelector("#game-exit-button");

const gameOverMenu = document.querySelector("#game-over");
const gameOverScore = document.querySelector("#game-over-score");
const gameOverHighScore = document.querySelector("#game-over-high-score");
const noAndReturn = document.querySelector("#no-return");
const yesAndReturn = document.querySelector("#yes-return");


let lastPlant;
let timeUp = false;
let levelHard = false;
let timeLimit = 30000;
let score = 0;
let highScore = localStorage.getItem("gameHighScore")||0;
let timer;

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

function mainHighScoreDisplay() {
        mainMenu.classList.remove("d-block");
        mainMenu.classList.add("d-none");
        mainHighScoreMenu.classList.remove("d-none");
        mainHighScoreMenu.classList.add("d-block");
        document.querySelectorAll(".score-modal-close").forEach(item => {
            item.addEventListener("click", event => {
                clickSound();
                mainHighScoreMenu.classList.remove("d-block");
                mainHighScoreMenu.classList.add("d-none");
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
    const popOutTime = randomTime(1100, 900);
    const plant = pickRandomPlant(plants);
    const popOutTimeTwo = randomTime(1500, 1200);
    const plantTwo = pickRandomPlant(plants);
    if (plant === plantTwo) {
        pickRandomPlant(plants)
    }

    plant.classList.add("up");
    setTimeout(()=>{alienOneAttack.call(plant)}, 670);
    setTimeout(() => {
        plant.classList.remove("up");
        if(!timeUp) { 
            ambush();
        }
    }, popOutTime);

    // This part of the function calls in a second alien for the Hard Level

    if(levelHard){
    plantTwo.children[1].isAmbushing = Math.random() < 0.28;
    if(plantTwo.children[1].isAmbushing) {
        setTimeout(()=> {
        plantTwo.classList.add("up-two");
        setTimeout(()=>{alienTwoAttack.call(plantTwo)}, 670);
        setTimeout(() => {
        plantTwo.classList.remove("up-two");
      }, popOutTimeTwo)}, 300);
    };
  };
}

// This function sets probability and attack time of Alien One

function alienOneAttack() {
    if(!this.children[0].isWhacked) {
        this.children[0].isAttacking = Math.random() < 0.25;
        if(this.children[0].isAttacking) {
        this.children[0].pointerEvent = "none";
        this.children[0].style.backgroundImage = "url(../assets/images/game-assets/alien-one-red.svg)";
        score--;
        scoreDisplay.textContent = score;
        clickSound();
        setTimeout(() => {
    this.children[0].style.backgroundImage = "url(../assets/images/game-assets/alien-one.svg)";
    this.children[0].style.pointerEvent = "all";
  }, 800);
      }
  }
}

// This function sets the probability and attack time of Alien Two

function alienTwoAttack() {
    if(!this.children[1].isWhacked) {
        this.children[1].isAttacking = Math.random() < 0.36;
        if(this.children[1].isAttacking) {
        this.children[1].pointerEvent = "none";
        this.children[1].style.backgroundImage = "url(../assets/images/game-assets/alien-two-attack.svg)";
        score--;
        scoreDisplay.textContent = score;
        clickSound();
        setTimeout(() => {
    this.children[1].style.backgroundImage = "url(../assets/images/game-assets/alien-two.svg)";
    this.children[1].style.pointerEvent = "all";
  }, 600);
      }
  }
}

// This function controls the user's ability to whack Alien One

function whackAlienOne(e) {
    clickSound();
    score ++;
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-one-yellow.svg)";
    this.style.pointerEvent = "none";
  setTimeout(() => {
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-one.svg)";
    this.style.pointerEvent = "all";
  }, 800);
  scoreDisplay.textContent = score;
  return this.isWhacked;
}

// This function controls the user's ability to smack Alien Two

function smackAlienTwo(e) {
    clickSound();
    score ++;
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-two-dizzy.svg)";
    this.style.pointerEvent = "none";
  setTimeout(() => {
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-two.svg)";
    this.style.pointerEvent = "all";
  }, 800);
  scoreDisplay.textContent = score;
  return this.isWhacked;
}

// This function checks if the game time of 30 seconds is finished

function isTimeUp() {
    if (timer <= 0) {
      timeUp = true;
      gameOver();
    } else {
      setTimeout(isTimeUp, timer * 1000);
    }
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
    ambush();

    setTimeout(isTimeUp, timeLimit);

    let startTimer = setInterval(()=>{
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

// Event Listeners
mainPlayButton.addEventListener("click", gameSetUp);

easyLevel.addEventListener("click", startEasyGame);
hardLevel.addEventListener("click", startHardGame);

mainHighScoreButton.addEventListener("click", mainHighScoreDisplay);

mainAudioButton.addEventListener("click", audioDisplay);

document.getElementById("sound-button").addEventListener("click", event => {
    soundEffectController();
});
document.getElementById("music-button").addEventListener("click", event => {
    musicController();
});

alienOnes.forEach(alienOne => alienOne.addEventListener("click", whackAlienOne));
alienTwos.forEach(alienTwo => alienTwo.addEventListener("click", smackAlienTwo));

gameAudioButton.addEventListener("click", toggleAudio);
gameExitButton.addEventListener("click", ()=>{
    timeUp = true;
    timer = 0;
    clearInterval(startTimer);
});

noAndReturn.addEventListener("click", homeReturn);
yesAndReturn.addEventListener("click", homeReturn)



