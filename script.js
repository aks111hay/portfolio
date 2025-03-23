/* -------------------------------------- */
/* Mobile Navigation Toggle Functionality */
/* -------------------------------------- */

/**
 * Toggles the visibility of the mobile navigation menu.
 * When the toggle button is clicked, the "active" class is added or removed.
 */
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Attach the toggle function to the toggle button's click event.
document.querySelector('.toggle-button').addEventListener('click', toggleNavbar);
