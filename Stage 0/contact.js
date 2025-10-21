 document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('success-message');

if(!form || !successMsg) return;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    successMsg.style.display = 'none';

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const errors = {
        name: document.getElementById('error-name'),
        email: document.getElementById('error-email'),
        subject: document.getElementById('error-subject'),
        message: document.getElementById('error-message'),
    };

    Object.values(errors).forEach(err => (err.textContent = ''));

    if (!name.value.trim()) {
        errors.name.textContent = "Full name is required";
        valid = false;
    }

        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/ .test(email.value)) {
        errors.email.textContent = "Please enter a valid email address";
        valid = false;
    }

        if (!subject.value.trim()) {
        errors.subject.textContent = "Subject is required";
        valid = false;
    }

        if (message.value.trim().length < 10) {
        errors.message.textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) {
        successMsg.textContent = "Message sent successfully!";
        successMsg.style.display = 'block';
        form.reset();
    }
});
});