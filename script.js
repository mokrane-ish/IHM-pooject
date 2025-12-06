/* ===== 2. Form Toggle Logic ===== */
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

function showLogin() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    loginForm.style.opacity = 0;
    setTimeout(() => { loginForm.style.opacity = 1; }, 10);
}

function showSignup() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    signupForm.style.opacity = 0;
    setTimeout(() => { signupForm.style.opacity = 1; }, 10);
}

// Optional: Add a simple submit handler to prevent page reload
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login attempted! (Functionality not implemented)');
});
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign Up attempted! (Functionality not implemented)');
});