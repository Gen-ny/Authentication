// Access register btn
const registerBtn = document.getElementById('register-btn');
// Access register form from the DOM
const registerForm = document.getElementById('register-form');
// Attach submit event listener to register form
registerForm.addEventListener('submit', function (event) {
    // Show loading indicator
    registerBtn.classList.add('animate-pulse');
    event.preventDefault(); // Prevent default form submission
    // Prevent default submit behavior
    event.preventDefault
    // Collect user inputs
    const data = new FormData(registerForm);
    // Post inputs to backend API
    fetch(' https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        body: JSON.stringify({
            "email": data.get('email'),
            "name": data.get('name'),
            "password": data.get('password'),
            "role": data.get('role'),
            "avatar": data.get('avatar')
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok){
            return location.replace('./login.html');
            } 
            return response.json();
        })
        .then(data => alert(data.message))
        .catch(error => console.log(error))
        .finally(() => {
            // Hide loading indicator
            registerBtn.classList.remove('animate-spin');
        });
            
            
});