// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const defaultP = "Mradul@123";
    const defaultU = "Mradul1997@gmail.com";
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    // Validate username/email
    const username = document.getElementById('username').value;
    if (!username || !(username === defaultU)) {
        document.getElementById('usernameError').textContent = 'Username/Email is required or cannot be the default username';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
        document.getElementById('usernameError').textContent = 'Invalid email format';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (!password || !(password === defaultP)) {
        document.getElementById('passwordError').textContent = 'Password is required or cannot be the default password';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Show loading spinner
        document.getElementById('loadingSpinner').style.display = 'block';

        // Make API call
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            
            })
        })
        .then(response => response.json())
        
        .then(data => {
            document.getElementById('loadingSpinner').style.display = 'none';
            alert('Login successful!');
        })
        .catch(error => {
            document.getElementById('loadingSpinner').style.display = 'none';
            alert('Login failed!');
        });
    }
});

// Show/hide password functionality
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
