// function to add comments
async function addComment(event) {
  event.preventDefault();
  const comment_text = document.querySelector('textarea[name="comment-textarea"]').value.trim();
  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];


  if (comment_text) {
      const response = await fetch('/api/comments', {
          method: 'post',
          body: JSON.stringify({
              post_id,
              comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      
      if (response.ok) {
          document.location.reload();
      } else {
          alert.apply(response.statusText);
      }
  }
}
//add event listener shelia
document.querySelector('#comment-form').addEventListener('submit', addComment);