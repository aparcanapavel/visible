## VISIBLE ##

Visible is an audio visualizer that takes properties from audio files, and renders shapes based on the audio properties.

[live page](https://pavelaparcana.com/visible/)

### Technologies and Libraries ###
- JavaScript
- HTML5
- CSS3
- p5.js

### Features ###
- Audio Visualizer
- Users are able to upload a song from their files
- Full Screen

#### Challenges ####
- Selecting the right audio properties in order to receive the right data to render on the canvas element
- Becoming familiar with Canvas and all of the element's properties.
- Learning the basics of p5.js library.
- Reviewing trigonometry to render the correct shapes.

### Wireframes ###
![Welcome-Screen](https://github.com/aparcanapavel/visible/blob/master/assets/welcome.png?raw=true)
- Upon Visiting the page, users will be greeted with a welcome modal containing instructions as to how to get to the second page.
- Visitors can look at the source code
- Visitors can view my portfolio site.

![Visualizer-Screen](https://github.com/aparcanapavel/visible/blob/master/assets/visualizer.png?raw=true)
- At the second page, visitors can then:
  * click play to listen to *Dreams pt. II (feat. Sarah Skinner)[NoCopyrightSounds Release]* by ***Lost Sky***.
  * Upload their own music file through the file upload button bellow the play icon.
  * Visit my LinkedIn page
  * View the source code
  * Visit my portfolio page.

![Visualizer-Screen-2](https://github.com/aparcanapavel/visible/blob/master/assets/visualizer2.png?raw=true)
* Once the user clicks play, The visualizer will begin analyzing the sound and render different line heights.


#### Page Transition ####
In order to acheive the transition from one page to the next, I had to work with asynchronous timeouts and render methods within class constructors. 

- I had to set event listeners to the two elements that I wanted to cause the trigger between pages, the modal background and the continue button:
  ```js
  // #index.js
  [modalContainer, continueBtn].forEach(element => {
      element.addEventListener("click", (e) => {
        blueWave.waveSpeedChange()
        modalContainer.classList.add('fade');
        let timer = setTimeout(() => {
          modalContainer.remove();
          home = new Home();
          blueWave.fadeOut();
        }, 100);
      })
    })
  ```
- In the Home class, I had to create elements in order to render the correct HTML:
  ```js
  // #js/home.js
  class Home{
    constructor(){
      this.render();
      //...
    }

    render(){
      const mainEl = document.getElementById("main-container"); // main
      const sectionContainer = document.createElement("section"); // inner section
      sectionContainer.setAttribute("id", "section-container")
      const asideEl = document.createElement("aside");
      asideEl.setAttribute("id", "side-bar");

      //...

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
  ```

- What a bout the blue wave? P5.js has a `draw()` that runs continuously. Within the `draw()` method, I used a conditional to continuously run a different render function from different classes. 
  ```js
  if(welcomeScreen){
    blueWave.calculateWave();
    blueWave.render();
  } else {
    blueWave.fadeIn();
    visualizer.ampRender(amplitude, spectrum);
  }
  ```