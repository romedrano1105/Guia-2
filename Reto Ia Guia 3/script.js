const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get("name");

    formMessage.textContent =
      `Gracias, ${name}. Tu mensaje quedó preparado correctamente.`;

    contactForm.reset();
  });
}
