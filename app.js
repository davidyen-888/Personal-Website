const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  " solve problems.",
  " face challenges.",
  " bridge connections.",
];
const typingDelay = 150;
const erasingDelay = 80;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

// for intro page
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// for top button
let topbtn = document.getElementById("to-top-button");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    topbtn.classList.add("show");
  } else {
    topbtn.classList.remove("show");
  }
});

document.getElementById("to-top-button").addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// document.addEventListener("mousemove", (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   const anchor = document.getElementById("anchor");
//   const rekt = anchor.getBoundingClientRect();
//   const anchorX = rekt.left + rekt.width / 2;
//   const anchorY = rekt.top + rekt.height / 2;

//   const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

//   anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
// });

// function angle(cx, cy, ex, ey) {
//   const dy = ey - cy;
//   const dx = ex - cx;
//   const rad = Math.atan2(dy, dx); // range (-PI, PI]
//   const deg = (rad * 180) / Math.PI; // rads to degs, range (-180, 180]
//   return deg;
// }
