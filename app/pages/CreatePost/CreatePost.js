import { CloseBtn } from './components/CloseBtn.js';
import { CreatePostForm } from './components/CreatePostForm.js';

export function CreatePost() {
  const $div = document.createElement('div');
  $div.id = 'create-post-modal';
  $div.classList.add('modal');
  $div.classList.add('hidden-element');
  $div.appendChild(CreatePostForm());
  $div.appendChild(CloseBtn());
  $div.addEventListener('click', e => {
    if (e.target == $div) {
      const $modal = document.querySelector('#create-post-modal');
      $modal.classList.toggle('hidden-element');
    }
  });
  return $div;
}
