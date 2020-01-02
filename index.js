let welcomeScreen = true;
let canvasContainer = null;
let timeouts = [];

let xspacing = 10;
let w;
let theta = 0.0;
let amplitude = 30.0; // wave height
let period = 1800.0; //repeat cycle
let dx; 
let yvalues;

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const modalContainer = document.getElementById("modal-container");
  const continueBtn = document.getElementById("continue-button");

  [modalContainer, continueBtn].forEach(element => {
    element.addEventListener("click", (e) => {
      waveSpeedChange(0.04, 100.0, 1000.0)
      
      timeouts.push(setTimeout(() => {
        modalContainer.remove();
      }), 300);
    })
  })

});


function setup() {
  canvasContainer = createCanvas(windowWidth, windowHeight);
  canvasContainer.parent('main-container');
  w = width;
  dx = (TWO_PI / period) * xspacing; //deltaX
  yvalues = new Array(floor(w / xspacing));  
}

function draw() {
  background(10);
  calcWave();
  renderWave();
}

function windowResized(){
  if(canvasContainer){
    resizeCanvas(windowWidth, windowHeight);
  }
}

function calcWave() {
  // 'angular velocity'
  theta += 0.02;

  // console.log("dx", dx)
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(color(79, 244, 255));

  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 8);
  }
}

function waveSpeedChange(angVel, amp, period) {
  for(let i = amplitude; i <= amp; i++){
    timeouts.push(setTimeout(() => {
      amplitude += 1;
    }, 1000));
    console.log(amplitude);
    // draw();
  }
  // amplitude = amp;
}