// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation checks
    if (!name || !email || !subject || !message) {
        alert('Vul alle velden in voordat je het formulier verstuurt.');
        event.preventDefault(); // Stop form submission
    }
    else if (!validateEmail(email)) {
        alert('Voer een geldig e-mailadres in.');
        event.preventDefault(); // Stop form submission
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
