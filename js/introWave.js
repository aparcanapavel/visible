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
  }

  presetup(){
    this.w = this.width;
    this.dx = (this.TWO_PI / this.period) * this.xspacing; //deltaX
    this.yvalues = new Array(floor(this.w / this.xspacing));  
  }

  calculateWave(){
    this.theta += 0.02;

    // console.log("dx", dx)
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }

  render(){
    noStroke();
    fill(color(79, 244, 255));

    for (let x = 0; x < this.yvalues.length; x++) {
      ellipse(x * this.xspacing, this.height / 2 + this.yvalues[x], 16, 8);
    }
  }

  waveSpeedChange(angVel, amp, period) {
    for (let i = this.amplitude; i <= amp; i++) {
      this.timer = setTimeout(() => {
        this.amplitude += 1;
      }, 1000);
      console.log(this.amplitude);
      // draw();
    }
    // amplitude = amp;
  }
}

// module.exports