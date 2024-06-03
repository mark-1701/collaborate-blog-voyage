import { CloseBtn } from './components/CloseBtn.js';
import { UpdatePostForm } from './components/UpdatePostForm.js';

export function UpdatePost() {
  const $div = document.createElement('div');
  $div.id = 'update-post-modal';
  $div.classList.add('modal');
  $div.classList.add('hidden-element');
  $div.appendChild(UpdatePostForm());
  $div.appendChild(CloseBtn());
  $div.addEventListener('click', e => {
    if (e.target == $div) {
      const $modal = document.querySelector('#update-post-modal');
      $modal.classList.toggle('hidden-element');
    }
  });
  return $div;
}