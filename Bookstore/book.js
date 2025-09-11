// Get all book items
const bookItems = document.querySelectorAll('.book-item');

// Get banner elements
const bannerTitle = document.getElementById('banner-title');
const bannerDescription = document.getElementById('banner-description');
const mainBanner = document.querySelector('.main-banner');

// Add event listener to each book item
bookItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get book details from data attributes
        const bookTitle = item.getAttribute('data-title');
        const bookDescription = item.getAttribute('data-description');
        const bookImage = item.getAttribute('data-image');

        // Update banner with selected book info
        bannerTitle.textContent = bookTitle;
        bannerDescription.textContent = bookDescription;
        mainBanner.style.backgroundImage = `url(${bookImage})`;

        // Smooth scroll to the banner
        mainBanner.scrollIntoView({
            behavior: 'smooth' // Ensures smooth scrolling
        });
    });
});
// JavaScript to handle Sign In/Sign Up click actions
// document.querySelector('.sign-in').addEventListener('click', () => {
//     alert('Sign In functionality coming soon!');
// });

// document.querySelector('.sign-up').addEventListener('click', () => {
//     alert('Sign Up functionality coming soon!');
// });


// Get modal elements
const modal = document.getElementById('authModal');
const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');

// Buttons and Links
const signInBtn = document.getElementById('sign-in-btn');
const closeBtn = document.querySelector('.close-btn');
const showSignUpLink = document.getElementById('show-signup');
const showSignInLink = document.getElementById('show-signin');

// Open Modal on Sign In button click
signInBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Switch to Sign Up Form
showSignUpLink.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

// Switch to Sign In Form
showSignInLink.addEventListener('click', () => {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
});

// Handle form submissions (Sign In)
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Perform sign-in validation (mock validation)
    alert('Login Successful');
    modal.style.display = 'none';
});

// Handle form submissions (Sign Up)
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Perform sign-up validation (mock validation)
    alert('Successfully account created');
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
