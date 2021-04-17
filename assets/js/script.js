/* Base functionality influenced by Frank's Labratory tutorial: https://youtu.be/RTb8icFiSfk */

// Global Variables
const mainDonate = document.getElementById("donate-container");

const mainMenu = document.getElementsByClassName("main-menu-content")[0];

const setUpMenu = document.querySelector("#set-up");

const easyLevel = document.querySelector("#easy");
const hardLevel = document.querySelector("#hard");
const setUpClose = document.querySelector("#set-up-close")

const mainPlayButton = document.querySelector("#main-play-button");

const game = document.querySelector("#game-container")

const plants  = document.querySelectorAll(".plant");
const alienOnes = document.querySelectorAll(".alien-one");
const alienTwos = document.querySelectorAll(".alien-two");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timerDisplay = document.querySelector("#timer");
const gamePlayButton = document.querySelector(".game-play-button");
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

// // Main-Menu Functions

// Basic functionality inspired by Andy Osbourne : https://github.com/Andy-Osborne/Dwarf-Match/

// Set-Up Menu
function gameSetUp() {
    // clickSound();
    mainMenu.classList.remove("d-block");
    mainMenu.classList.add("d-none");
    mainDonate.classList.add("d-none");
    setUpMenu.classList.remove("d-none");
    setUpMenu.classList.add("d-block");
    document.querySelectorAll(".modal-close").forEach(item => {
        item.addEventListener("click", event => {
            setUpMenu.classList.remove("d-block");
            setUpMenu.classList.add("d-none");
            mainMenu.classList.remove("d-none");
            mainMenu.classList.add("d-block")
        });
    });
}

function startEasyGame() {
    setUpMenu.classList.remove("d-block");
    setUpMenu.classList.add("d-none");
    game.classList.remove("d-none");
    game.classList.add("d-block");
    playGame();
}

function startHardGame() {
    setUpMenu.classList.remove("d-block");
    setUpMenu.classList.add("d-none");
    game.classList.remove("d-none");
    game.classList.add("d-block");
    playGame();
    levelHard = true;
}

// In-Game Functions

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function pickRandomPlant(plants) {
    const randomPlant = Math.floor(Math.random() * plants.length);
    const plant = plants[randomPlant];
    if (plant === lastPlant) {
        return pickRandomPlant(plants);
    }

    lastPlant = plant;
    return plant;
}

// Use if statement to control what level of ambush
function ambush() {
    const popOutTime = randomTime(1100, 900);
    const plant = pickRandomPlant(plants);
    const popOutTimeTwo = randomTime(1500, 1200);
    const plantTwo = pickRandomPlant(plants);
    if (plant === plantTwo) {
        pickRandomPlant(plants)
    }
    if(levelHard){
    plantTwo.children[1].isAmbushing = Math.random() < 0.34;
    if(plantTwo.children[1].isAmbushing) {
        plantTwo.classList.add("up-two");
        setTimeout(()=>{alienTwoAttack.call(plantTwo)}, 670);
        setTimeout(() => {
        plantTwo.classList.remove("up-two");
    }, popOutTimeTwo)
};
}
    plant.classList.add("up");
    setTimeout(()=>{alienOneAttack.call(plant)}, 670);
    setTimeout(() => {
        plant.classList.remove("up");
        if(!timeUp) { 
            ambush();
        }
    }, popOutTime);
}

function alienOneAttack() {
    if(!this.children[0].isWhacked) {
        this.children[0].isAttacking = Math.random() < 0.34;
        if(this.children[0].isAttacking) {
        this.children[0].pointerEvent = "none";
        this.children[0].style.backgroundImage = "url(../assets/images/game-assets/alien-one-red.svg)";
        score--;
        scoreDisplay.textContent = score;
        setTimeout(() => {
    this.children[0].style.backgroundImage = "url(../assets/images/game-assets/alien-one.svg)";
    this.children[0].style.pointerEvent = "all";
  }, 800);
      }
  }
}

function alienTwoAttack() {
    if(!this.children[1].isWhacked) {
        this.children[1].isAttacking = Math.random() < 0.4;
        if(this.children[1].isAttacking) {
        this.children[1].pointerEvent = "none";
        this.children[1].style.backgroundImage = "url(../assets/images/game-assets/alien-two-attack.svg)";
        score--;
        scoreDisplay.textContent = score;
        setTimeout(() => {
    this.children[1].style.backgroundImage = "url(../assets/images/game-assets/alien-two.svg)";
    this.children[1].style.pointerEvent = "all";
  }, 600);
      }
  }
}

function whackAlienOne(e) {
    // whackSound();
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

function smackAlienTwo(e) {
    // whackSound();
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

function playGame() {
    timer = timeLimit/1000;
    score = 0;
    scoreDisplay.textContent = 0;
    highScoreDisplay.textContent = highScore;
    timerDisplay.textContent = timer;
    timeUp = false;
    ambush();
    setTimeout(()=>{
        timeUp = true;
    }, timeLimit);

    let startTimer = setInterval(()=>{
        timer -= 1;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            timer = 0;
            clearInterval(startTimer);
            checkHighScore();
            gameOver();
        }
    }, 1000);
}

function checkHighScore() {
    if(score > localStorage.getItem("gameHighScore")) {
        localStorage.setItem("gameHighScore", score);
        highScore = score;
        highScoreDisplay.textContent = highScore;
    }
}

// Game Over Menu

function gameOver() {
    if (timeUp) {
        // victorySound();
        gameOverMenuLaunch();
        gameOverScore.innerText = score;
        gameOverHighScore.innerText = highScore;
    }
}

// Function launches the victory modal when the user completes the game

function gameOverMenuLaunch() {
    gameOverMenu.classList.remove("d-none");
    gameOverMenu.classList.add("d-block");
}

// Restart Game
function homeReturn() {
    gameOverMenu.classList.remove("d-block");
    gameOverMenu.classList.add("d-none");
    game.classList.add("d-none");
    mainMenu.classList.remove("d-none");
}



// Event Listeners
mainPlayButton.addEventListener("click", gameSetUp);

easyLevel.addEventListener("click", startEasyGame);
hardLevel.addEventListener("click", startHardGame);
setUpClose.addEventListener("click", )

noAndReturn.addEventListener("click", homeReturn);
yesAndReturn.addEventListener("click", homeReturn)
gamePlayButton.addEventListener("click", playGame);
alienOnes.forEach(alienOne => alienOne.addEventListener("click", whackAlienOne));
alienTwos.forEach(alienTwo => alienTwo.addEventListener("click", smackAlienTwo));
