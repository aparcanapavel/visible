// function setup() {
//   createCanvas(640, 480);
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const modalContainer = document.getElementById("modal-container");
  const continueBtn = document.getElementById("continue-button");

  [modalContainer, continueBtn].forEach(element => {
    element.addEventListener("click", (e) => {
      modalContainer.remove();
    })
  })

  
})