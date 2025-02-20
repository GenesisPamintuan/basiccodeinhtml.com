const validUsername = "user123";
const validPassword = "pass123";

function login(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedEmail = localStorage.getItem("email");

    if (username === storedUsername && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "http://127.0.0.1:5500/Homepage/homepage.html";
    } else {
        errorMessage.textContent = "Invalid Username, Password, or Gmail Address!";
    }
}

function register(event) {
    event.preventDefault();

    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;
    const errorMessage = document.getElementById("register-error");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid Gmail address!";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Registration Successful! You can now login.");
        switchToLoginForm();
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(email);
}

function switchToRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
}

function switchToLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('reset-password-form').style.display = 'none';
}

function forgotPassword(event) {
    event.preventDefault();

    const username = document.getElementById("fp-username").value;
    const email = document.getElementById("fp-email").value;
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    if (username === storedUsername && email === storedEmail) {
        document.getElementById('forgot-password-form').style.display = 'none';
        document.getElementById('reset-password-form').style.display = 'block';
    } else {
        document.getElementById('forgot-password-error').textContent = "Username and email do not match!";
    }
}

function resetPassword(event) {
    event.preventDefault();

    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-new-password").value;

    if (newPassword !== confirmPassword) {
        document.getElementById('reset-password-error').textContent = "Passwords do not match!";
    } else {
      
        localStorage.setItem("password", newPassword);
        alert("Password reset successful! You can now login with your new password.");
        switchToLoginForm(); 
    }
}

function showForgotPasswordForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
}