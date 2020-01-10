class Home{
  constructor(){
    this.render();
    this.isPlaying = false;
    this.scroll = 0;
  }
  resetScroll(){
    const songTitle = document.getElementById("song-title");
    songTitle.scrollTo(0, 0);
    setTimeout(() => {
      this.titleScroll();
    }, 1500);
  }

  titleScroll(){
    const songTitle = document.getElementById("song-title");
    const titleWidth = songTitle.scrollWidth;
    this.titleInterval = setInterval(() => {
      if (this.scroll < titleWidth) {
        this.scroll++;
        songTitle.scrollTo(songTitle.scrollLeft + 1, 0);
      } else {
        this.scroll = 0;
        this.resetScroll();
        clearInterval(this.titleInterval);
      }
    }, 40);
  }

  render(){
    const mainEl = document.getElementById("main-container"); // main
    const sectionContainer = document.createElement("section"); // inner section
    sectionContainer.setAttribute("id", "section-container")
    const asideEl = document.createElement("aside");
    asideEl.setAttribute("id", "side-bar");

    // quick links
    const contactList = document.createElement("ul");
    contactList.setAttribute("id", "contact-links");
    //Linkedin
    target = "_blank"
    rel = "noopener noreferrer"
    const linkedLi = document.createElement("li");
    const linkedIn = document.createElement("a");
    const toolTip1 = document.createElement("span");
    linkedIn.setAttribute("class", "fab fa-linkedin");
    linkedIn.setAttribute("href", "https://www.linkedin.com/in/pavel-aparcana/");
    linkedIn.setAttribute("target", "_blank");
    linkedIn.setAttribute("rel", "noopener noreferrer");
    toolTip1.innerHTML = "LinkedIn"
    linkedLi.append(linkedIn);
    linkedLi.append(toolTip1);
    contactList.append(linkedLi);
    //Git
    const gitHubLi = document.createElement("li");
    const gitHub = document.createElement("a");
    const toolTip2 = document.createElement("span");
    gitHub.setAttribute("class", "fab fa-github-square");
    gitHub.setAttribute("href", "https://github.com/aparcanapavel");
    github.setAttribute("target", "_blank");
    github.setAttribute("rel", "noopener noreferrer");
    toolTip2.innerHTML = "GitHub"
    gitHubLi.append(gitHub);
    gitHubLi.append(toolTip2);
    contactList.append(gitHubLi);
    //personal website
    const websiteLi = document.createElement("li");
    const website = document.createElement("a");
    const toolTip3 = document.createElement("span");
    website.setAttribute("class", "fas  fa-address-card");
    website.setAttribute("href", "https://pavelaparcana.com/");
    website.setAttribute("target", "_blank");
    website.setAttribute("rel", "noopener noreferrer");
    toolTip3.innerHTML = "Website"
    websiteLi.append(website);
    websiteLi.append(toolTip3);
    contactList.append(websiteLi);


    // MUSIC PLAYER
    const songInfo = document.createElement("div");
    songInfo.setAttribute("id", "song-info");
    const songTitle = document.createElement("h4");
    songTitle.setAttribute("id", "song-title");
    songTitle.innerHTML = "Dreams pt.II (feat. Sarah Skinner)[NCS Release]";
    
    const songArtist = document.createElement("p");
    songArtist.innerHTML = "Lost Sky";
    songInfo.append(songTitle);
    songInfo.append(songArtist);
    // play pause buttons
    const playButton = document.createElement("i");
    playButton.setAttribute("class", "far fa-play-circle");
    playButton.setAttribute("id", 'play-pause-buttons');
    songInfo.append(playButton);

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
    asideEl.append(contactList);
    asideEl.append(songInfo);
    sectionContainer.append(asideEl);
    mainEl.append(sectionContainer);
    
    setTimeout(() => {
      sectionContainer.classList.add("fade-in");
      this.titleScroll();
    }, 1500);

  }
}