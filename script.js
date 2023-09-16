// NAVBAR
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

// CHANGE ACTIVE COLOR WHEN SCROLL
let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.textContent.toLowerCase() === currentSection) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});


// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add a click event listener to each navigation link
navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', (event) => {
        // Prevent the default link behavior (e.g., following a URL)
        event.preventDefault();

        // Get the target section's ID based on the link's text content
        const targetSectionId = event.target.textContent.toLowerCase();

        // Scroll to the target section
        scrollToSection(targetSectionId);
    });
});

