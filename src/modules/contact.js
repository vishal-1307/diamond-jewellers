
export function initContactForm() {
    const forms = document.querySelectorAll('[data-enquiry-form]');
    if (forms.length === 0) return;

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = form.querySelector('[name="name"]');
            const phoneInput = form.querySelector('[name="phone"]');
            const messageInput = form.querySelector('[name="message"]');
            const formType = form.getAttribute('data-enquiry-form') || 'enquiry';

            const name = nameInput?.value.trim() || '';
            const phone = phoneInput?.value.trim() || '';
            const message = messageInput?.value.trim() || '';

            const errors = [];
            if (!name) errors.push('Please enter your name.');
            if (!phone || !isValidPhone(phone)) errors.push('Please enter a valid phone or WhatsApp number.');
            if (!message) errors.push('Please enter your message.');

            if (errors.length > 0) {
                alert(errors.join('\n'));
                return;
            }

            const enquiryTitle = formType === 'custom' ? 'Custom Design Request' : 'General Enquiry';
            const whatsappMessage = [
                'Hi Diamond Jewellers,',
                '',
                `*${enquiryTitle}*`,
                `Name: ${name}`,
                `Phone: ${phone}`,
                '',
                `Message: ${message}`,
                '',
                `Page: ${window.location.href}`
            ].join('\n');

            const whatsappUrl = `https://wa.me/919931454704?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank', 'noopener');
            form.reset();
        });
    });
}

function isValidPhone(value) {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15;
}
