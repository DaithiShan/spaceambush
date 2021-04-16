/* Base functionality influenced by Frank's Labratory tutorial: https://youtu.be/RTb8icFiSfk */

// Global Variables
const mainPlayButton = document.querySelector("#main-play-button");

const plants  = document.querySelectorAll(".plant");
const alienOnes = document.querySelectorAll(".alien-one");
const alienTwos = document.querySelectorAll(".alien-two");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timerDisplay = document.querySelector("#timer");
const gamePlayButton = document.querySelector(".game-play-button");

let lastPlant;
let timeUp = false;
let timeLimit = 30000;
let score = 0;
let highScore = localStorage.getItem("gameHighScore")||0;
let timer;

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

function ambush() {
    const popOutTime = randomTime(1100, 900);
    const popOutTimeTwo = randomTime(1500, 1200)
    const plant = pickRandomPlant(plants);
    const plantTwo = pickRandomPlant(plants);
    if (plant === plantTwo) {
        pickRandomPlant(plants)
    }
    plantTwo.children[1].isAmbushing = Math.random() < 0.34;
    if(plantTwo.children[1].isAmbushing) {
        plantTwo.classList.add("up-two");
        setTimeout(()=>{alienTwoAttack.call(plantTwo)}, 670);
        setTimeout(() => {
        plantTwo.classList.remove("up-two");
    }, popOutTimeTwo)
};
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
  }, 700);
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
        if (timer < 0) {
            timer = 0;
            clearInterval(startTimer);
            checkHighScore();
            timerDisplay.textContent = "Time's Up!";
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



// Main Menu Functions
// Basic functionality inspired by Andy Osbourne : https://github.com/Andy-Osborne/Dwarf-Match/
function gameSetUp() {
    // clickSound();
    document.getElementsByClassName("main-menu-content")[0].classList.remove("d-block");
    document.getElementsByClassName("main-menu-content")[0].classList.add("d-none");
    document.getElementById("donate-container").classList.add("d-none");
    document.getElementById("set-up").classList.remove("d-none");
    document.getElementById("set-up").classList.add("d-block");
    document.querySelectorAll(".modal-close").forEach(item => {
        item.addEventListener("click", event => {
            document.getElementById("setUp").classList.remove("d-block");
            document.getElementById("setUp").classList.add("d-none");
        });
    });
}


// Event Listeners
mainPlayButton.addEventListener("click", gameSetUp);
gamePlayButton.addEventListener("click", playGame);
alienOnes.forEach(alienOne => alienOne.addEventListener("click", whackAlienOne));
alienTwos.forEach(alienTwo => alienTwo.addEventListener("click", smackAlienTwo));
