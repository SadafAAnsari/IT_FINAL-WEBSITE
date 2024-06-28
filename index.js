document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.querySelector('.form');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const loginButton = form.querySelector('.btnn a');

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Replace with actual login functionality
            alert('Login Successful');
        }
    });

    function validateForm() {
        let valid = true;
        if (!validateEmail(emailInput.value)) {
            valid = false;
            emailInput.classList.add('invalid');
            alert('Please enter a valid email address.');
        } else {
            emailInput.classList.remove('invalid');
        }

        if (passwordInput.value.length < 6) {
            valid = false;
            passwordInput.classList.add('invalid');
            alert('Password must be at least 6 characters long.');
        } else {
            passwordInput.classList.remove('invalid');
        }

        return valid;
    }

    function validateEmail(email) {
        // Simple email regex validation
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Scroll-to-Top Button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = '↑';
    scrollTopButton.classList.add('scroll-top-button');
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });
});
