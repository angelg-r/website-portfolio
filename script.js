const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // distance from center of screen
    const center = windowHeight / 2;
    const sectionCenter = rect.top + rect.height / 2;

    const distance = Math.abs(center - sectionCenter);

    // fade formula
    let opacity = 1 - distance / 400;

    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    section.style.opacity = opacity;
    section.style.transform = `scale(${0.95 + opacity * 0.05})`;
  });
});