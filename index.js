let welcomeScreen = true; //show modal with wave on refres/visit page
let visualizer = false;
let canvasContainer = null;
let timeouts = [];
let blueWave; //class component
let home; // class component
let song; // song element

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
  const modalContainer = document.getElementById("modal-container");
  const continueBtn = document.getElementById("continue-button");

  [modalContainer, continueBtn].forEach(element => {
    element.addEventListener("click", (e) => {
      blueWave.waveSpeedChange()
      // debugger
      modalContainer.classList.add('fade');
      let timer = setTimeout(() => {
        modalContainer.remove();
        home = new Home();
        blueWave.fadeOut();
      }, 550);
    })
  })

});


function setup() {
  canvasContainer = createCanvas(windowWidth, windowHeight);
  song = loadSound("./assets/lost-sky-dreams-pt-ii-feat-sara-skinner-ncs-release.mp3", isLoaded)
  canvasContainer.id("canvas-ele");
  canvasContainer.parent('main-container');
  blueWave = new IntroWave(TWO_PI, width, height);
}

function isLoaded() {
  console.log("song loaded");
  song.setVolume(0.5);
}

function draw() {
  background(10);
  if(welcomeScreen){
    blueWave.calculateWave();
    blueWave.render();
  } else {
    console.log("render circle");
  }
}

function windowResized(){
  if(canvasContainer){
    resizeCanvas(windowWidth, windowHeight);
  }
}
