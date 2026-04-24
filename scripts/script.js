const sidebar = document.getElementById("sidebar");
const main = document.getElementById("homepage");
const mainContent = document.querySelector("main");
const homepage = document.getElementById("homepage");

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