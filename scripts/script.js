const sidebar = document.getElementById("sidebar");
const main = document.getElementById("homepage");
const mainContent = document.querySelector("main");
const homepage = document.getElementById("homepage");
const viewBtn = document.querySelector(".view_button");
const contactBtn = document.querySelector(".contact_button");
const bar = document.getElementById("bar");

bar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  homepage.classList.toggle("shift");
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const page = card.dataset.page;
    const section = document.getElementById(page);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

viewBtn.addEventListener("click", () => {
  const projectsSection = document.getElementById("project");
  if(projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
});

contactBtn.addEventListener("click", () => {
  const contactSection = document.getElementById("contact");
  if(contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});