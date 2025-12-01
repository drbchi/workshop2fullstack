const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    navLinks.classList.toggle("open");

    const expanded = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", expanded);
    menuButton.innerHTML = expanded ? "✕" : "☰";
}

menuButton.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            toggleMenu();
        }
    });
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form-id");
const messageDiv = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            messageDiv.textContent = "Please fill out all required fields.";
            messageDiv.style.color = "red";
            return;
        }

        messageDiv.textContent = "Thank you for your message! I will be in touch shortly.";
        messageDiv.style.color = "lightgreen";

        contactForm.reset();
    });
}
