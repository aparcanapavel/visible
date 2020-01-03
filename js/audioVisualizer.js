class AudioVisualizer {
  constructor(){
    console.log("visualizer ready");
    this.canvasEle = document.getElementById("canvas-ele");
  }
  
  preSet(){
    fill(color(79, 244, 255));

    ellipse(width / 2, height / 2, 100, 100);
  }

  ampRender(amplitude){
    let volume = amplitude.getLevel();

    let mappedVol = map(volume, 0, 0.5, 100, 300);

    ellipse(width / 2, height / 2, mappedVol, mappedVol);
  }
}