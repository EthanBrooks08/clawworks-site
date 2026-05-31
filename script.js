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
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const note = document.querySelector("#form-note");
    const submitBtn = contactForm.querySelector("button[type=submit]");
    const originalLabel = submitBtn ? submitBtn.textContent : "";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    try {
      const data = new FormData(contactForm);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (!response.ok) throw new Error("submit failed");

      contactForm.reset();
      if (note) {
        note.innerHTML = "Thanks — your message is in. I will reply within one business day.";
      }
      if (submitBtn) {
        submitBtn.textContent = "Sent ✓";
      }
    } catch (err) {
      if (note) {
        note.innerHTML = `Something went wrong sending that. Email <a href="mailto:Ethanbrooks0333@gmail.com">Ethanbrooks0333@gmail.com</a> directly.`;
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel || "Send Message";
      }
    }
  });
}
