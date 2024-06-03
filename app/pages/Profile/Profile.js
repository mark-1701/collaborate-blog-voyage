export function Profile() {
  const image_not_found = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
  const $profile = document.createElement('div');
  const $form = document.createElement('form');
  $form.method = 'POST';
  $form.innerHTML = `
    <img src="${image_not_found}" alt="sin imagen..." class="user-image-profile" >
    <div class="user-form">
      <div class=''>
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" class="input" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" class="input" required>
        </div>
        <div class="form-group">
          <label for="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" class="input" required>
        </div>  
      </div>
      <div>
        <div class="form-group">
          <label for="occupation">Ocupación</label>
          <input type="text" id="occupation" name="occupation" class="input" required>
        </div>  
        <div class="form-group">
          <label for="image_uri">Image URI</label>
          <input type="text" id="image_uri" name="image_uri" class="input" required>
        </div>
        <div class="form-group">
          <label for="">modifica...</label>
          <button type="submit" class="submit">Actualizar</button>
        </div>
      </div>
    </div>
    `;

  const $name = $form.querySelector('#name');
  const $email = $form.querySelector('#email');
  const $direccion = $form.querySelector('#direccion');
  const $occupation = $form.querySelector('#occupation');
  const $imageUri = $form.querySelector('#image_uri');
  const $imageProfile = $form.querySelector('.user-image-profile');
  $imageProfile.addEventListener('error', () => ($imageProfile.src = image_not_found));

  const saveUserData = () => {
    const userData = {
      name: $name.value,
      email: $email.value,
      direccion: $direccion.value,
      occupation: $occupation.value,
      imageUri: $imageUri.value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    $name.value = userData.name;
    $email.value = userData.email;
    $direccion.value = userData.direccion;
    $occupation.value = userData.occupation;
    $imageUri.value = userData.imageUri;
    $imageProfile.src = userData.imageUri;
  }

  $form.addEventListener('submit', event => {
    event.preventDefault();
    saveUserData();
    alert('Datos actualizados correctamente.');
    location.reload();
  });

  $profile.appendChild($form);
  return $profile;
}
