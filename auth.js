// SIGNUP FUNCTION
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (!name || !email || !pass) {
        alert("Please fill all fields");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: pass
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully!");
    window.location.href = "login.html";
}


// LOGIN FUNCTION
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No account found! Please sign up.");
        return;
    }

    if (email === user.email && pass === user.password) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";  // Go to e-commerce home page
    } else {
        alert("Incorrect email or password!");
    }
}


// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

