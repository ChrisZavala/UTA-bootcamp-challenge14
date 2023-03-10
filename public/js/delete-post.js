async function deletePost(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
      method: 'delete'
  });
  if (response.ok) {
      document.location.replace('/dashboard/');
  } else {
      alert(response.statusText);
  }
}
//event listener
document.querySelector('#delete-post-btn').addEventListener('click', deletePost);