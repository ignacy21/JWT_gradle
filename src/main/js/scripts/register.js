document.getElementById("GoToMainPage").addEventListener("click", function () {
    window.location.href = "home.html";
});

function sendData() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
        role: 'ADMIN',
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    };

    fetch('http://localhost:9090/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            localStorage.setItem('token', data.token);

            // direct user to viewPage
            window.location.href = 'viewPage.html';
        })
        .catch((error) => {
            console.error('Error occurred during register:', error);
        });
}

