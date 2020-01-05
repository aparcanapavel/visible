class AudioVisualizer {
  constructor(){
    console.log("visualizer ready");
    this.canvasEle = document.getElementById("canvas-ele");
    this.width = width / 128;
  }
  
  preSet(){
    fill(color(79, 244, 255));

    ellipse(width / 2, height / 2, 100, 100);
  }

  // ampRender(amplitude){
  //   let volume = amplitude.getLevel();

  //   let mappedVol = map(volume, 0, 0.5, 100, 300);

  //   ellipse(width / 2, height / 2, mappedVol, mappedVol);
  // }

  ampRender(amplitude, spectrum) {
    // let volume = amplitude.getLevel();

    // let mappedVol = map(volume, 0, 0.5, 100, 300);

    // ellipse(width / 2, height / 2, mappedVol, mappedVol);
    // console.log(spectrum);
    noStroke();
    translate(width / 2, height / 2);

    // stroke(255);
    // beginShape();
    for(let i = 0; i < spectrum.length; i++){
      let amp = spectrum[i];
      let angle = map(i, 0, spectrum.length, 0 , 360);
      let radius = map(amp, 0, 256, 100, 250);
      // let yVal = map(amp, 0, 256, height, 0);
      // if(amp > 200){
      //   ellipse(width / 2, height / 2, mappedVol, mappedVol);
      // }
      let x = radius * cos(angle);
      let y = radius * sin(angle);
      // line(i * this.width, height, i * this.width, yVal);
      // vertex(x, y)
      stroke(i, 255, 255);
      line(0, 0, x, y);
    }

    // endShape();
    // stroke(256);
    // noFill();
  }
}