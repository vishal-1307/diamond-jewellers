
export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        let isValid = true;
        let errorMessage = '';

        if (!nameInput.value.trim()) {
            isValid = false;
            errorMessage += 'Please enter your name.\n';
        }
        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            isValid = false;
            errorMessage += 'Please enter a valid email.\n';
        }
        if (!messageInput.value.trim()) {
            isValid = false;
            errorMessage += 'Please enter a message.\n';
        }

        if (isValid) {
            alert('Thank you, ' + nameInput.value + '! Your message has been sent.');
            contactForm.reset();
        } else {
            alert(errorMessage);
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
    }
}
