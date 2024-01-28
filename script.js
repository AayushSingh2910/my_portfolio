// parallax Animation
const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});

// parallax animation ended

const words = ["Penetration Testing", "Bounty Hunting", "Frontend Development"];
// main Timeline
let mainTimeline = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
  let textTimeline = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 4,
  });
  textTimeline.to("#typewriter", {
    text: word,
    duration: 1,
  });
  mainTimeline.add(textTimeline);
});

// right-left animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("rshow");
    } else {
      entry.target.classList.remove("rshow");
    }
  });
});

const rhiddenElements = document.querySelectorAll(".rhidden");
rhiddenElements.forEach((el) => observer.observe(el));

const lobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("lshow");
    } else {
      entry.target.classList.remove("lshow");
    }
  });
});

const lhiddenElements = document.querySelectorAll(".lhidden");
lhiddenElements.forEach((el) => lobserver.observe(el));
