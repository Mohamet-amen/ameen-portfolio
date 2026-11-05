
// Ameen Portfolio

console.log("Ameen Portfolio is running successfully!");
// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("ameen-theme") || "dark";

if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
}

// Toggle theme
themeToggle.addEventListener("click", function () {

    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {

        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("ameen-theme", "dark");

        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light mode");

    } else {

        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("ameen-theme", "light");

        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");

    }

});
// =========================
// =========================
// AMEEN PORTFOLIO CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        // Prevent default form submission
        event.preventDefault();

        // Get user input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            formStatus.textContent = "Please fill in all fields.";
            return;
        }

        // Get submit button
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        // Prepare form data
        const formData = new FormData(contactForm);

        // Set email reply address and subject
        formData.set("_replyto", email);
        formData.set("_subject", subject);

        try {

            // Show sending message
            formStatus.textContent = "Sending your message...";
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            // Send message through Formspree
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formStatus.textContent =
                    "Message sent successfully! Thank you for contacting me.";

                // Clear form fields
                contactForm.reset();

            } else {

                formStatus.textContent =
                    "Sorry, something went wrong. Please try again.";

            }

        } catch (error) {

            formStatus.textContent =
                "Network error. Please check your internet connection and try again.";

            console.error("Contact form error:", error);

        } finally {

            // Restore button
            submitButton.disabled = false;
            submitButton.textContent = "Send Message ↗";

        }

    });

}

// =========================
// 1. AUTOMATIC COPYRIGHT YEAR
// =========================

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// 2. BACK TO TOP BUTTON
// =========================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// 3. SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".about-image, .about-content, .skill-card, " +
    ".project-card, .service-card, .contact-info, " +
    ".contact-form, .skills-heading, .projects-heading, " +
    ".services-heading, .contact-heading"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function(element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function(element) {
        element.classList.add("active");
    });

}


// =========================
// 4. ACTIVE NAVIGATION
// =========================

const pageSections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-links a"
);

if ("IntersectionObserver" in window) {

    const navObserver = new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    navLinks.forEach(function(link) {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-25% 0px -65% 0px"
        }
    );

    pageSections.forEach(function(section) {
        navObserver.observe(section);
    });

}
