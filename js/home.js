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
    sideBarParagraph.innerHTML = "- Click play to start the visuals!";

    // quick links
    const sideBarContact = document.createElement("div");
    sideBarContact.setAttribute("id", "contact-links");
    const contactList = document.createElement("ul");
    //Linkedin
    const linkedLi = document.createElement("li");
    const linkedIn = document.createElement("a");
    linkedIn.setAttribute("class", "fab fa-linkedin");
    linkedIn.setAttribute("href", "https://www.linkedin.com/in/pavel-aparcana/");
    const linkedInText = document.createElement("i");
    linkedInText.innerHTML = "pavel-aparcana";
    linkedLi.append(linkedIn);
    linkedLi.append(linkedInText);
    contactList.append(linkedLi);
    //Git
    const gitHubLi = document.createElement("li");
    const gitHub = document.createElement("a");
    gitHub.setAttribute("class", "fab fa-github-square");
    gitHub.setAttribute("href", "https://github.com/aparcanapavel");
    gitHub.innerHTML = "aparcanapavel";
    sideBarContact.append(gitHub);
    //personal website
    const website = document.createElement("a");
    website.setAttribute("class", "fas  fa-address-card");
    website.setAttribute("href", "https://pavelaparcana.com/");
    website.innerHTML = "Personal Website";
    sideBarContact.append(website);


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
    asideEl.append(sideBarContact);
    asideEl.append(playButton);
    sectionContainer.append(asideEl);
    mainEl.append(sectionContainer);
    
    // setTimeout(() => {
    //   sectionContainer.classList.add("fade-in");
    // }, 100);
  }
}