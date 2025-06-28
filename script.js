// ===== Scroll Reveal Animations =====
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===== Typewriter Effect =====
const headline = document.querySelector(".typewriter");
const text = "I'm a Web Developer";
let index = 0;

function type() {
  if (index < text.length) {
    headline.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

if (headline) {
  type();
}
