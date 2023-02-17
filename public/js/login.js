//loginFormHandler()
async function signup(event) {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/', {
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
}

// function for login form
async function login(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      // check response status, if ok, redirect to homepage
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
}

function switchToSignUp(event) {
  event.preventDefault();

  document.getElementById('login-form').classList.add('d-none');
  document.getElementById('signup-form').classList.remove('d-none');
}

function switchToLogin(event) {
  event.preventDefault();

  document.getElementById('signup-form').classList.add('d-none');
  document.getElementById('login-form').classList.remove('d-none');
}
//event listener shelia
document.querySelector('#signup-form').addEventListener('submit', signup);
document.querySelector('#login-form').addEventListener('submit', login);
document.querySelector('#signup-link').addEventListener('click', switchToSignUp);
document.querySelector('#login-link').addEventListener('click', switchToLogin);

