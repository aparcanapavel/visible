let welcomeScreen = true; //show modal with wave on refres/visit page
let visualizer = false;
let canvasContainer = null;
let timeouts = [];
let blueWave; //class component
let home; // class component
let song = null; // song element

// sound properties
let amplitude;
let fft; //p5 property that allows me to use the full range of frequencies.
let freqOsc; //attempt to get current frequency

document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("modal-container");
  const continueBtn = document.getElementById("continue-button");

  [modalContainer, continueBtn].forEach(element => {
    element.addEventListener("click", (e) => {
      blueWave.waveSpeedChange()
      modalContainer.classList.add('fade');
      let timer = setTimeout(() => {
        modalContainer.remove();
        home = new Home();
        blueWave.fadeOut();
      }, 100);
    })
  })
  
});

let mouseTimer;
let sidebar;

document.onmousemove = function() {
  if (song && song.isPlaying()) {
    sidebar = document.getElementById("side-bar");
    sidebar.className = "";
    clearTimeout(mouseTimer);
    
    mouseTimer = setTimeout(() => {
      sidebar.classList.add("fade");
      // console.log("fade sidebar out");
    }, 3000);
  } else if(sidebar){
    sidebar.className = "";
  }
};


function setup() {
  canvasContainer = createCanvas(windowWidth, windowHeight);
  // song = loadSound("./assets/lost-sky-dreams-pt-ii-feat-sara-skinner-ncs-release.mp3", isLoaded)
  song = loadSound("./assets/lost-sky-dreams-pt-ii.mp3", isLoaded)
  canvasContainer.id("canvas-ele");
  canvasContainer.parent('main-container');
  blueWave = new IntroWave(TWO_PI, width, height);
  amplitude = new p5.Amplitude();
  visualizer = new AudioVisualizer();
  fft = new p5.FFT(0.7, 128);
  freqOsc = new p5.Oscillator();

  if(!welcomeScreen){
    angleMode(DEGREES);
  }
}

function isLoaded() {
  song.setVolume(0.5);
}

function draw() {
  let spectrum = fft.analyze();
  background(10);
  if(welcomeScreen){
    blueWave.calculateWave();
    blueWave.render();
  } else {
    blueWave.fadeIn();
    if(song.isPlaying()){
      visualizer.ampRender(amplitude, spectrum);
    } else {
      visualizer.preSet();
    }
  }
}

function windowResized(){
  if(canvasContainer){
    resizeCanvas(windowWidth, windowHeight);
  }
}
