class Home{
  constructor(){
    this.render();
    this.isPlaying = false;
    this.scroll = 0;
    this.artist = null;
    this.songName = null;
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

  setSongData(song){
    const name = song.name;
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    songTitle.innerHTML = "";
    songArtist.innerHTML = "";
    songTitle.innerHTML = name;
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
    gitHub.setAttribute("target", "_blank");
    gitHub.setAttribute("rel", "noopener noreferrer");
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
    songTitle.innerHTML = this.songName || "Dreams pt.II (feat. Sarah Skinner)[NCS Release]";
    
    const songArtist = document.createElement("p");
    songArtist.setAttribute("id", "song-artist");
    songArtist.innerHTML = this.artist || "Lost Sky";
    songInfo.append(songTitle);
    songInfo.append(songArtist);
    // play pause buttons
    const playButton = document.createElement("i");
    playButton.setAttribute("class", "far fa-play-circle");
    playButton.setAttribute("id", 'play-pause-buttons');
    songInfo.append(playButton);

    //import logic
    const songUpload = document.createElement("input");
    songUpload.setAttribute("type", "file");
    songUpload.setAttribute("id", "song-upload-input");
    //import button
    const importButton = document.createElement("label");
    importButton.setAttribute("class", "fas fa-upload");
    importButton.setAttribute("id", "import-button");
    importButton.setAttribute("for", "song-upload-input");
    importButton.setAttribute("title", "upload a song");
    
    songInfo.append(songUpload);
    songInfo.append(importButton);
    songUpload.addEventListener("change", (event) => {

      const importedSong = event.currentTarget.files[0];

      if(importedSong.type.split("/")[0] !== "audio"){
        alert("please only upload mp3 files");
        return;
      }
      this.setSongData(importedSong);
  
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        song = loadSound(fileReader.result, isLoaded);
      }

      if(importedSong) {
        fileReader.readAsDataURL(importedSong);
      }
    })

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