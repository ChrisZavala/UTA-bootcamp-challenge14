async function updatePost(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('textarea[name="post-content"]').value.trim();
  const response = await fetch(`/api/posts/${id}`, {
      method: 'put',
      body: JSON.stringify({
          title,
          content
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  if (response.ok) {
      document.location.replace('/dashboard/');
  } else {
      alert(response.statusText);
  }
}
//add event listener 
document.querySelector('#edit-post-form').addEventListener('submit', updatePost);