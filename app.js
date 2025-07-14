const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");
const audio = document.getElementById("spinSound"); // 🔊 Audio element

const segments = ["100", "200", "300", "400", "500", "600", "700", "800"];
const degPerSegment = 360 / segments.length;

let isSpinning = false;
let currentRotation = 0;

// 🔸 1. Segmentlarni DOMga yaratish
segments.forEach((value, index) => {
  const segment = document.createElement("div");
  segment.className = "segment";
  segment.style.setProperty('--i', index);
  segment.textContent = value;
  wheel.appendChild(segment);
});

// 🔸 2. Aylanish logikasi
spinButton.addEventListener("click", () => {
  if (isSpinning) return;

  isSpinning = true;
  result.textContent = "";

  const randomIndex = Math.floor(Math.random() * segments.length);
  const extraRotation = 360 * 5 + randomIndex * degPerSegment + degPerSegment / 2;

  currentRotation += extraRotation;
  wheel.style.transform = `rotate(-${currentRotation}deg)`;

  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    result.textContent = `🎊 Siz yutdingiz: ${segments[randomIndex]}!`;
    isSpinning = false;
  }, 5000);
});
