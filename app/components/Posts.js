import { PostCard } from './PostCard.js';

export function Posts() {
  const postData = JSON.parse(localStorage.getItem('postData'));
  const $posts = document.createElement('div');
  $posts.classList.add('posts');
  (postData) 
    ? postData.map(el => $posts.appendChild(PostCard(el)))
    : $posts.innerHTML = `<p>Sin posts disponibles</p>`;
  return $posts;
}
