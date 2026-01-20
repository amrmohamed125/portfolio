const words = ["Web Developer", "React Developer", "Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const deleteSpeed = 50;
const delayAfterWord = 300;


const element = document.getElementById("typewriter");

function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.charAt(charIndex);

    if (isDeleting) {
        element.textContent = currentWord.substring(0, charIndex);
    } else {
        element.textContent = currentWord.substring(0, charIndex + 1);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(function () {
            isDeleting = true;
            type();
        }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
        wordIndex = (wordIndex + 1) % words.length;
        isDeleting = false;
        setTimeout(function () {
            type();
        }, delayAfterWord);
    } else {
        charIndex += isDeleting ? -1 : 1;
        setTimeout(type, speed);
    }
}

type();

// CIRCLE
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
let percent = circle.getAttribute("data-percent");
let degree = (percent / 100) * 360;

circle.style.background = `conic-gradient(
    #38bdf8 ${degree}deg,
    #020617 ${degree}deg
)`;
});

AOS.init({
duration: 800,
once: false,
});

// SMOOTH SCROLL
function smoothScrollTo(targetId, offset = 120) {
  const target = document.getElementById(targetId);
  const start = window.pageYOffset;
  const end = target.offsetTop - offset;
  const duration = 700;

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = currentTime - startTime;
    const percent = Math.min(progress / duration, 1);
    const ease = percent * (2 - percent);

    window.scrollTo(0, start + (end - start) * ease);

    if (percent < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.getElementById("skillsLink").addEventListener("click", (e) => {
  e.preventDefault();
  smoothScrollTo("skill");
});

document.getElementById("projectsLink").addEventListener("click", (e) => {
  e.preventDefault();
  smoothScrollTo("project");
});

document.getElementById("footerHomeLink").addEventListener("click", (e) => {
  e.preventDefault();
  smoothScrollTo("homepage");
});