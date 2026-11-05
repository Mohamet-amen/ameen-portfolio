
// Ameen Portfolio

console.log("Ameen Portfolio is running successfully!");

// =========================
// AMEEN PORTFOLIO CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {

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


    // Your real email address goes here
    const recipient = "YOUR_EMAIL@example.com";


    if (recipient === "YOUR_EMAIL@example.com") {

        formStatus.textContent =
            "Please configure your email address in script.js first.";

        return;
    }


    // Prepare email content
    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    // Open visitor's email application
    const mailtoLink =
        `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    formStatus.textContent =
        "Your email application is opening. Please send your message there.";

});

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
