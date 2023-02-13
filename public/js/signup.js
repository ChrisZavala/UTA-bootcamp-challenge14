//signup()
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username: name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Account created! Logging you in now.');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

//Event Listener
document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);
