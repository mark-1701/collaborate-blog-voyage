export function PostCard({ id, title, image_uri, shortMessage }) {
  const image_not_found = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
  const $postCard = document.createElement('div');
  $postCard.classList.add('post-card');
  $postCard.innerHTML = `
  <a href="#/article/${id}">
    <img src="${image_not_found}" alt="sin imagen..." class="post-card-image">
    <h2>${title}</h2>
    <p>${shortMessage}</p>
  </a>
  `;
  const $postCardImage = $postCard.querySelector('.post-card-image');
  $postCardImage.src = image_uri;
  $postCardImage.addEventListener('error', () => ($postCardImage.src = image_not_found));
  return $postCard;
}