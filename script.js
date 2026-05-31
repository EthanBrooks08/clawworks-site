const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = "ClawWorks workflow audit";
    const body = `Name: ${name}
Email: ${email}

Admin workflow:
${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Ethanbrooks0333%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const fallback = `mailto:Ethanbrooks0333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const note = document.querySelector("#form-note");

    if (note) {
      note.innerHTML = `Opening a prepared Gmail draft. If nothing opens, <a href="${fallback}">click here to use your email app</a> or email <a href="mailto:Ethanbrooks0333@gmail.com">Ethanbrooks0333@gmail.com</a> directly.`;
    }

    window.open(gmailUrl, "_blank", "noopener");
  });
}
