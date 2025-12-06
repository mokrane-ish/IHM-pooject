/* ===== 1. Particles.js Initialization (More Lines) - Updated Color ===== */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120, 
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#0000ff" 
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#0000ff", 
            "opacity": 0.6, 
            "width": 1.5 
        },
        "move": {
            "enable": true,
            "speed": 2, 
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


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