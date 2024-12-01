// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Mobile Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add "visible" class on scroll to reveal sections dynamically
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
});

// Google Sign-In Callback (for user login with Google)
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("Logged in as: " + profile.getName());
    window.location.href = "#home";
}

// Quiz Button Logic (Optional: You can add your quiz functionality here)
function startQuiz() {
    alert("The quiz functionality will be implemented soon!");
}
// Feedback Form Validation
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    if (name === "" || message === "") {
        alert("Please fill in both fields.");
        event.preventDefault();
    }
});
// Show/Hide Password Functionality
document.getElementById('show-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
// Sticky Navbar
const navbar = document.querySelector('header');
const navbarOffset = navbar.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > navbarOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑";
backToTopButton.id = 'back-to-top';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
// Tooltip Functionality
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.tooltip-target').forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        tooltip.textContent = this.getAttribute('data-tooltip');
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });
    
    element.addEventListener('mousemove', function(e) {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });
    
    element.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
});
// Fetch Events from API (Example: Loading Events Dynamically)
fetch('https://api.example.com/events')
    .then(response => response.json())
    .then(data => {
        const eventsList = document.getElementById('events-list');
        data.events.forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = `${event.name} - ${event.date}`;
            eventsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading events:', error));
// Function to handle the dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Show/Hide Password Functionality
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.getElementById('show-password');
    passwordField.type = passwordField.type === "password" ? "text" : "password";
    passwordToggle.classList.toggle('active');
}

// Form Validation for Feedback Form
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Sticky Navbar on Scroll
function handleStickyNavbar() {
    const navbar = document.querySelector('header');
    const navbarOffset = navbar.offsetTop;
    
    if (window.pageYOffset > navbarOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Smooth Scroll for Anchor Links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Back to Top Button
function backToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
}

// Toggle Tooltip Visibility
function handleTooltipVisibility() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.tooltip-target').forEach(element => {
        element.addEventListener('mouseenter', function (e) {
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        element.addEventListener('mousemove', function (e) {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        element.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });
}

// Initialize Google Sign-In
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Logged in as: " + profile.getName());
    // Redirect to the main page after login
    window.location.href = "#home";
}

// Event Listener for Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const isValid = validateForm('loginForm');
    if (isValid) {
        // Proceed with form submission
        alert("Login Successful");
        // Example: Use AJAX to submit the form without page reload
    } else {
        alert("Please fill in all required fields.");
    }
});

// Event Listener for Feedback Form Submission
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const isValid = validateForm('feedback-form');
    if (isValid) {
        // Proceed with form submission
        alert("Feedback Submitted Successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});

// Event Listener for Show/Hide Password Toggle
document.getElementById('show-password').addEventListener('click', togglePasswordVisibility);

// Initialize Features on Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize smooth scroll
    smoothScroll();

    // Handle sticky navbar
    window.addEventListener('scroll', handleStickyNavbar);

    // Handle back-to-top button visibility and functionality
    backToTopButton();

    // Initialize tooltips
    handleTooltipVisibility();
});
// Function to handle the dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Show/Hide Password Functionality
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.getElementById('show-password');
    passwordField.type = passwordField.type === "password" ? "text" : "password";
    passwordToggle.classList.toggle('active');
}

// Form Validation for Feedback Form
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Sticky Navbar on Scroll
function handleStickyNavbar() {
    const navbar = document.querySelector('header');
    const navbarOffset = navbar.offsetTop;
    
    if (window.pageYOffset > navbarOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Smooth Scroll for Anchor Links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Back to Top Button
function backToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
}

// Event Listener for Google Sign-In
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Logged in as: " + profile.getName());
    window.location.href = "#home"; // Redirect to home after sign-in
}

// Event Listener for Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const isValid = validateForm('loginForm');
    if (isValid) {
        alert("Login Successful");
    } else {
        alert("Please fill in all required fields.");
    }
});

// Event Listener for Feedback Form Submission
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const isValid = validateForm('feedback-form');
    if (isValid) {
        alert("Feedback Submitted Successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});

// Event Listener for Show/Hide Password Toggle
document.getElementById('show-password').addEventListener('change', togglePasswordVisibility);

// Add scroll functionality for sections
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
});

// Initialize Google Sign-In
function initGoogleSignIn() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID',
        });
    });
}

// Initialize features on page load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize smooth scroll
    smoothScroll();
    
    // Handle sticky navbar
    window.addEventListener('scroll', handleStickyNavbar);
    
    // Handle back-to-top button visibility and functionality
    backToTopButton();
    
    // Initialize Google Sign-In
    initGoogleSignIn();
});
