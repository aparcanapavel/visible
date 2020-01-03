class IntroWave {
  constructor(TWO_PI, width, height) {
    this.width = width;
    this.height = height;
    this.TWO_PI = TWO_PI;
    this.xspacing = 10;
    this.w;
    this.theta = 0.0;
    this.amplitude = 30.0; // wave height
    this.period = 1800.0; //repeat cycle
    this.dx;
    this.yvalues;
    this.presetup();
    this.interval = 0;
    this.canvasEle = document.getElementById("canvas-ele");
  }

  presetup() {
    this.w = this.width;
    this.dx = (this.TWO_PI / this.period) * this.xspacing; //deltaX
    this.yvalues = new Array(floor(this.w / this.xspacing));
  }

  calculateWave() {
    this.theta += 0.02;

    // console.log("dx", dx)
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }

  render() {
    noStroke();
    fill(color(79, 244, 255));

    for (let x = 0; x < this.yvalues.length; x++) {
      ellipse(x * this.xspacing, this.height / 2 + this.yvalues[x], 16, 8);
    }
  }

  waveSpeedChange() {
    this.timer = setInterval(() => {
      if (this.interval < 60.0) {
        this.amplitude += 0.15;
        this.period -= 95.0;
        this.theta += 0.020;
        this.interval += 0.15;
        console.log(this.interval);
      } else {
        welcomeScreen = false;
        clearInterval(this.timer);
      }
    }, 0.0000001);
  }

  fadeOut(){
    this.canvasEle.classList.add("fade-out");
  }

  fadeIn() {
    this.canvasEle.classList.remove("fade-out");
  }
}