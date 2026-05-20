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

    const center = windowHeight / 2;
    const sectionCenter = rect.top + rect.height / 2;

    const distance = Math.abs(center - sectionCenter);

    let opacity = 1 - distance / 400;

    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    section.style.opacity = opacity;
    section.style.transform = `scale(${0.95 + opacity * 0.05})`;
  });
});

// ✅ MOVE THIS OUTSIDE
function openFurniture() {
  window.open(
    "https://kurumi-13.github.io/?fbclid=IwY2xjawR6jMNleHRuA2FlbQIxMABicmlkETFrV2poZkFMOUlVdkprRUNjc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHirn4N5viByPY",
    "_blank"
  );
}
function openGraphic() {
  window.open(
    "https://drive.google.com/file/d/1_Jdu_9xu_m4dh7ZAOibnP85GPRd_ryrA/view?usp=sharing"
  );
}

function openLibrary() {
  window.open(
    "https://github.com/aaeyngel/LIBRARY-BOOK-BORROWING-SYSTEM"
  );
}