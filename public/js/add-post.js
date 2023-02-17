// function to add post
async function addPost(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();
  
    const response = await fetch(`/api/posts`, {
        method: 'post',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
  }
  // function to display post form
  function displayPostForm(event) {
    event.preventDefault();
  
    document.getElementById('post-form').classList.remove('d-none');
    document.querySelector('.new-post-btn').classList.add('d-none');
    document.querySelector('.cancel-post-btn').classList.remove('d-none');
  }
  
  // function to hide post form
  function hidePostForm(event) {
    event.preventDefault();
  
    document.getElementById('post-form').classList.add('d-none');
    document.querySelector('.new-post-btn').classList.remove('d-none');
    document.querySelector('.cancel-post-btn').classList.add('d-none');
  }
  //added event listener
  document.querySelector('#post-form').addEventListener('submit', addPost);
  document.querySelector('.new-post-btn').addEventListener('click', displayPostForm);
  document.querySelector('.cancel-post-btn').addEventListener('click', hidePostForm);
  