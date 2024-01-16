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
    const asideWidth = songTitle.clientWidth;

    this.titleInterval = setInterval(() => {
      
      if (this.scroll < (1.35 * (titleWidth - asideWidth))) {
        this.scroll++;
        songTitle.scrollTo(songTitle.scrollLeft + 1, 0);
      } else {
        songTitle.classList.add('fade-out');
        clearInterval(this.titleInterval);
        
        setTimeout(() => {
          this.scroll = 0;
          this.resetScroll();

          songTitle.classList.remove('fade-out');
        }, 300);
      }
    }, 50);
  }

  setSongData(song){
    const name = song.name;
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    songTitle.innerHTML = "";
    songArtist.innerHTML = "";
    songTitle.innerHTML = name;
  }

  pauseSong() {
    song.pause();
    this.isPlaying = false;
    this.musicToggleSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>`;
  }

  playSong() {
    song.play();
    this.isPlaying = true;
    this.musicToggleSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    `;
  }

  render(){
    const mainEl = document.getElementById("main-container"); // main
    const sectionContainer = document.createElement("section"); // inner section
    sectionContainer.setAttribute("id", "section-container")
    const asideEl = document.createElement("aside");
    asideEl.setAttribute("id", "side-bar");

    // QUICK LINKS
    const contactList = document.createElement("ul");
    contactList.setAttribute("id", "contact-links");
    //Linkedin
    const linkedLi = document.createElement("li");
    const linkedIn = document.createElement("a");
    const toolTip1 = document.createElement("span");
    linkedIn.setAttribute("class", "hero-icon");
    linkedIn.setAttribute("href", "https://www.linkedin.com/in/pavel-aparcana/");
    linkedIn.setAttribute("target", "_blank");
    linkedIn.setAttribute("rel", "noopener noreferrer");
    linkedIn.innerHTML = `<svg fill="#ffffff" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path> </g></svg>`
    toolTip1.innerHTML = "LinkedIn"
    linkedLi.append(linkedIn);
    linkedLi.append(toolTip1);
    contactList.append(linkedLi);
    //Git
    const gitHubLi = document.createElement("li");
    const gitHub = document.createElement("a");
    const toolTip2 = document.createElement("span");
    gitHub.setAttribute("class", "hero-icon");
    gitHub.setAttribute("href", "https://github.com/aparcanapavel");
    gitHub.setAttribute("target", "_blank");
    gitHub.setAttribute("rel", "noopener noreferrer");
    gitHub.innerHTML = `<svg viewBox="-5.5 -5.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g></svg>`;
    toolTip2.innerHTML = "GitHub";
    gitHubLi.append(gitHub);
    gitHubLi.append(toolTip2);
    contactList.append(gitHubLi);
    //personal website
    const websiteLi = document.createElement("li");
    const website = document.createElement("a");
    const toolTip3 = document.createElement("span");
    website.setAttribute("class", "hero-icon");
    website.setAttribute("href", "https://pavelaparcana.com/");
    website.setAttribute("target", "_blank");
    website.setAttribute("rel", "noopener noreferrer");
    website.innerHTML = `<svg fill="#ffffff" viewBox="-5.5 -5.5 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path></g></svg>`
    toolTip3.innerHTML = "Portfolio";
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
    this.playButton = document.createElement("label");
    this.playButton.setAttribute("class", "hero-icon");
    this.playButton.setAttribute("for", "play-pause-toggle");
    this.playButton.setAttribute("id", 'play-pause-buttons');
    this.playButton.setAttribute("aria-label", "Play / Pause");
    this.playButton.setAttribute("role", "button");
    this.playButton.setAttribute("tabindex", "0");
    // svg
    this.musicToggleSVG = document.createElement("span");
    this.musicToggleSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.musicToggleSVG.setAttribute("fill", "none");
    this.musicToggleSVG.setAttribute("viewBox", "0 0 24 24");
    this.musicToggleSVG.setAttribute("stroke-width", "1.5");
    this.musicToggleSVG.setAttribute("stroke", "currentColor");
    this.musicToggleSVG.setAttribute("class", "w-6 h-6");
    this.musicToggleSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>`;
    const playBtnCheckbox = document.createElement("input");
    playBtnCheckbox.setAttribute("type", "checkbox");
    playBtnCheckbox.setAttribute("id", "play-pause-toggle");
    this.playButton.appendChild(this.musicToggleSVG)
    songInfo.appendChild(playBtnCheckbox)
    songInfo.append(this.playButton);

    //import logic
    const songUpload = document.createElement("input");
    songUpload.setAttribute("type", "file");
    songUpload.setAttribute("id", "song-upload-input");
    //import button
    const importButton = document.createElement("label");
    importButton.setAttribute("class", "hero-icon");
    importButton.setAttribute("id", "import-button");
    importButton.setAttribute("for", "song-upload-input");
    importButton.setAttribute("title", "upload a song");
    importButton.setAttribute("onkeypress", "handleSongUpload(event)");
    this.playButton.setAttribute("aria-label", "upload a song");
    this.playButton.setAttribute("role", "button");
    importButton.setAttribute("tabindex", "0");
    importButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 35" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
    `;
    
    songInfo.append(songUpload);
    songInfo.append(importButton);
    songUpload.addEventListener("change", (event) => {

      const importedSong = event.currentTarget.files[0];

      if(importedSong.type.split("/")[0] !== "audio"){
        alert("please only upload mp3 files");
        return;
      }
      // song.stop();
      this.pauseSong();
      this.setSongData(importedSong);
  
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        song = loadSound(fileReader.result, isLoaded);
      }

      if(importedSong) {
        fileReader.readAsDataURL(importedSong);
      }
    })

    this.playButton.addEventListener("click", () => {
      if(this.isPlaying){
        this.pauseSong();
      } else {
        this.playSong();
      }
    })
    
    //putting it all together for render;
    asideEl.append(songInfo);
    asideEl.append(contactList);
    sectionContainer.append(asideEl);
    mainEl.append(sectionContainer);
    
    setTimeout(() => {
      sectionContainer.classList.add("fade-in");
      this.titleScroll();
    }, 1500);

  }
}