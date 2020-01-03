class Home{
  constructor(){
    this.render();
    this.isPlaying = false;
  }

  render(){
    const mainEl = document.getElementById("main-container"); // main
    const sectionContainer = document.createElement("section"); // inner section
    sectionContainer.setAttribute("id", "section-container")
    const asideEl = document.createElement("aside");
    asideEl.setAttribute("id", "side-bar");

    const sideBarTitle1 = document.createElement("h3");
    const sideBarTitle2 = document.createElement("h4");

    sideBarTitle1.innerHTML = "Getting Started";
    sideBarTitle2.innerHTML = "Settings";

    const sideBarParagraph = document.createElement("p");
    sideBarParagraph.innerHTML = "- Click play or import a song!";

    // play pause buttons
    const playButton = document.createElement("i");
    playButton.setAttribute("class", "far fa-play-circle");
    playButton.setAttribute("id", 'play-pause-buttons');

    playButton.addEventListener("click", () => {
      if(this.isPlaying){
        song.pause();
        this.isPlaying = false;
        playButton.className = "";
        playButton.setAttribute("class", "far fa-play-circle");
      } else {
        song.play();
        this.isPlaying = true;
        playButton.className = "";
        playButton.setAttribute("class", "far fa-pause-circle");
      }
    })
    
    //putting it all together for render;
    asideEl.append(sideBarTitle1);
    asideEl.append(sideBarParagraph);
    asideEl.append(playButton);
    sectionContainer.append(asideEl);
    mainEl.append(sectionContainer);
    
    setTimeout(() => {
      sectionContainer.classList.add("fade-in");
    }, 100);
  }
}