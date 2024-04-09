const helloUser = document.getElementById("welcome_user")
const bearerToken = 'Bearer ' + localStorage.getItem('token')
console.log(bearerToken)
fetch('http://localhost:9090/demo/get1', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': bearerToken
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log('jabadabadu')
        helloUser.textContent = `Hello ${data.firstname}`
    })
    .catch(error => {
        console.error('Error occurred during login:', error);
    });