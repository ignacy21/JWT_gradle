
document.getElementById("GoToMainPage").addEventListener("click", function () {
    window.location.href = "home.html";
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = {
        email: email,
        password: password
    };

    fetch('http://localhost:9090/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token);

            // direct user to viewPage
            window.location.href = 'viewPage.html';
        })
        .catch(error => {
            console.error('Error occurred during login:', error);
        });
});