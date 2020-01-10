class AudioVisualizer {
  constructor(){
    this.canvasEle = document.getElementById("canvas-ele");
    this.width = width / 128;
    this.diam = 200;
    this.bassThumps = [];
  }
  
  preSet(){
    fill(color(79, 244, 255));

    ellipse(width / 2, height / 2, 200, 200);
  }

  circleThump(){
    this.timer = setTimeout(() => {
      this.diam = 200;
    }, 1);
    this.diam = 213;
  }

  ampRender(amplitude, spectrum) {
    noStroke();
    translate(width / 2, height / 2);
    
    for(let j = 0; j < this.bassThumps.length; j++){
      let bassThump = this.bassThumps[j];
      bassThump.expand();
      bassThump.renderThump();
      if (bassThump.fade <= 0){
        this.bassThumps.splice(j, 1);
      }
    }
    
    for(let i = 0; i < spectrum.length; i++){
      let amp = spectrum[i];
      let angle = map(i, 0, spectrum.length, 0 , 360);
      let radius = map(amp, 0, 256, 100, 250);
      
      if (amp > 253) {
        this.bassThumps.push(new BassThump());
        // this.circleThump();
      } else {
        let x = radius * cos(angle);
        let y = radius * sin(angle);

        stroke(i, 255, 255);
        line(0, 0, x, y);
      }
    }
    fill(79, 244, 255);
    ellipse(0, 0, this.diam);
  }
}