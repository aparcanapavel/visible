class BassThump {
  constructor(){
    this.diam = 200;
    this.fade = 175;
  }

  expand() {
    if (this.diam < 600) {
      this.diam += 5;
      this.fade -= 3;
    } else {
      this.diam = 200;
    }
  }

  renderThump() {
    fill(20, 61, 64, this.fade);
    noStroke();
    ellipse(0, 0, this.diam);
  }
}