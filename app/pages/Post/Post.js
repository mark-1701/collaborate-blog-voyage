export function Post({ id, title, content, author, image_uri }) {
  const $main = document.getElementById('main');
  const $post = document.createElement('div');
  $main.innerHTML = `
    <h1>${title}</h1>
    ${content}<br><br>
    <img src="${image_uri}" alt="" class="image-post"><br><br>
    <p><strong>Autor: </strong>${author}</p>
  `;
  return $post;
}
