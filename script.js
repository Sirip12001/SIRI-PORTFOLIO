// Typewriter effect
const phrases = [
  "Aspiring Web Developer",
  "AI Enthusiast",
  "Problem Solver"
];
let typewriter = document.querySelector('.typewriter');
let phraseIndex = 0, charIndex = 0;
function typeWriterLoop() {
  if (!typewriter) return;
  typewriter.textContent = phrases[phraseIndex].slice(0, charIndex) + "|";
  charIndex++;
  if (charIndex > phrases[phraseIndex].length) {
    setTimeout(() => {
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeWriterLoop();
    }, 1200);
    return;
  }
  setTimeout(typeWriterLoop, 90);
}
typeWriterLoop();

// Scroll to Top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Simple contact form feedback (does not send emails in static sites)
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formMsg').innerHTML = "<span style='color:green;'>Thank you, message sent!</span>";
  setTimeout(() => {
    document.getElementById('formMsg').innerHTML = "";
    document.getElementById('contactForm').reset();
  }, 2000);
};
