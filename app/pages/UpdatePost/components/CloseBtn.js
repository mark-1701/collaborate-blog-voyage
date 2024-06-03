export function CloseBtn() {
  const $modal = document.querySelector('#update-post-modal');
  const $btn = document.createElement('button');
  $btn.classList.add('close-btn-modal');
  $btn.textContent = 'x';
  $btn.addEventListener('click', e => {
    const $modal = document.querySelector('#update-post-modal');
    $modal.classList.toggle('hidden-element');
  });
  return $btn;
}
