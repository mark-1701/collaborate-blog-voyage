import { generateUniqueKey } from '../../../utils/GenerateUniqueKey.js';

export function UpdatePostForm() {
  const $form = document.createElement('form');
  $form.method = 'POST';
  $form.classList.add('update-post-form');
  const postData = JSON.parse(localStorage.getItem('postData')) || [];
  $form.innerHTML = `
    <h1>Actualizar post</h1>
    <div class="form-group">
      <label for="post-select">Seleccionar Post</label>
      <select id="post-select" name="post-select" class="input">
        <option value="" selected disabled>Selecciona un post</option>
        ${postData.map(post => `<option value="${post.id}">${post.title}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label for="post-title">Título</label>
      <input type="text" id="post-title" name="title" class="input" required>
    </div>
    <div class="form-group">
      <label for="update-post-content">Contenido</label>
      <textarea id="update-post-content"></textarea>
    </div>
    <div class="form-group">
      <label for="update-short-message">Mensaje Corto</label>
      <textarea id="update-short-message"></textarea>
    </div>
    <div class="form-group">
      <label for="post-author">Autor</label>
      <input type="text" id="post-author" name="author" class="input" required>
    </div>
    <div class="form-group">
      <label for="post-image">Image URI</label>
      <input type="text" id="post-image" name="image_uri" class="input" required>
    </div> 
    <div class="form-group">
      <button type="submit" class="submit">Actualizar</button>
    </div> 
    <button type="button" id="delete-post" class="submit submit-delete">Eliminar</button>
  `;
  const $postSelect = $form.querySelector('#post-select');
  const $titleInput = $form.querySelector('#post-title');
  const $contentInput = $form.querySelector('#update-post-content');
  const $shortMessageInput = $form.querySelector('#update-short-message');
  const $authorInput = $form.querySelector('#post-author');
  const $imageInput = $form.querySelector('#post-image');

  // actualizar inputs con id seleccionado
  $postSelect.addEventListener('change', e => {
    const selectedPost = postData.find(post => post.id === e.target.value);
    if (selectedPost) {
      $titleInput.value = selectedPost.title;
      tinymce.get('update-post-content').setContent(selectedPost.content);
      tinymce.get('update-short-message').setContent(selectedPost.shortMessage);
      $authorInput.value = selectedPost.author;
      $imageInput.value = selectedPost.image_uri;
    }
  });

  // enviar actualizacion
  $form.addEventListener('submit', e => {
    e.preventDefault();
    const selectedPostId = $postSelect.value;
    const updatedPostContent = tinymce.get('update-post-content').getContent();
    const updatedShortMessageContent = tinymce.get('update-short-message').getContent();
    const updatedPost = {
      id: selectedPostId,
      title: e.target.title.value.trim(),
      content: updatedPostContent.trim(),
      author: e.target.author.value.trim(),
      shortMessage: updatedShortMessageContent.trim(),
      image_uri: e.target.image_uri.value.trim()
    };
    const updatedPostData = postData.map(post => (post.id === selectedPostId ? updatedPost : post));
    localStorage.setItem('postData', JSON.stringify(updatedPostData));
    location.reload();
  });

  // eliminar post
  const $deletePostButton = $form.querySelector('#delete-post');
  $deletePostButton.addEventListener('click', () => {
    if (confirm('¿Esta seguro de eliminar el post?')) {
      const selectedPostId = $postSelect.value;
      const updatedPostData = postData.filter(post => post.id !== selectedPostId);
      localStorage.setItem('postData', JSON.stringify(updatedPostData));
      location.reload();
    }
  });

  return $form;
}
