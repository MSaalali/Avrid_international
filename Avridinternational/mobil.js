// scripts.js
document.addEventListener("DOMContentLoaded", function () {
 const boxes = document.querySelectorAll('.box');
 let currentIndex = 0;

 function showNextBox() {
     const currentBox = boxes[currentIndex];
     currentBox.classList.add('show');
     
     setTimeout(() => {
         currentBox.classList.add('slide-out');

         currentIndex = (currentIndex + 1) % boxes.length;
         const nextBox = boxes[currentIndex];
         nextBox.classList.remove('slide-out');
         nextBox.classList.add('show');

         setTimeout(() => {
             currentBox.classList.remove('show');
         }, 1000); // Match the duration of the slide-out transition
     }, 5000); // Duration the box is shown before sliding out
 }

 showNextBox();
 setInterval(showNextBox, 6000); // Time between slides, slightly longer than the display duration
});
