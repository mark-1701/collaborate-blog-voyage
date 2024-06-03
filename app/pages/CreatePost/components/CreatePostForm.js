import { generateUniqueKey } from '../../../utils/GenerateUniqueKey.js';

export function CreatePostForm() {
  const $form = document.createElement('form');
  $form.method = 'POST';
  $form.classList.add('create-post-form');
  $form.innerHTML = `
    <h1>Crear un nuevo post</h1>
    <div class="form-group">
      <label for="post-title">Título</label>
      <input type="text" id="post-title" name="title" class="input" required>
    </div>
    <div class="form-group">
      <label for="post-content">Contenido</label>
      <textarea id="post-content" class="tinymce"></textarea>
    </div>
    <div class="form-group">
      <label for="short-message">Mensaje Corto</label>
      <textarea id="short-message" class="tinymce"></textarea>
    </div>
    <div class="form-group">
      <label for="post-author">Autor</label>
      <input type="text" id="post-author" name="author" class="input" required>
    </div>
    <div class="form-group">
      <label for="post-image">Image URI</label>
      <input type="text" id="post-image" name="image_uri" class="input" required>
    </div>  
    <button type="submit" class="submit">Publicar</button>
  `;
  $form.addEventListener('submit', e => {
    e.preventDefault();
    const uniqueKey = generateUniqueKey();
    const postContent = tinymce.get('post-content').getContent();
    const shortMessageContent = tinymce.get('short-message').getContent();

    const post = {
      id: uniqueKey,
      title: e.target.title.value.trim(),
      content: postContent.trim(),
      author: e.target.author.value.trim(),
      shortMessage: shortMessageContent.trim(),
      image_uri: e.target.image_uri.value.trim()
    };
    console.log(post);
    if (!localStorage.getItem('postData')) {
      localStorage.setItem('postData', JSON.stringify([post]));
    } else {
      const postData = JSON.parse(localStorage.getItem('postData'));
      const newPostData = [...postData, post];
      localStorage.setItem('postData', JSON.stringify(newPostData));
    }
    location.reload();
  });
  return $form;
}
