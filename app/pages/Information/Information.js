export function Information() {
  const $information = document.createElement('div');
  $information.innerHTML = `
    <h1>Tabla de Información</h1>
    <p>Blog desarrollado en vanilla js, la página esta desarrollada a través de una spa, las cuales están gestinadas a través de rutas hash. Se usó local storage para el almacenamiento de todos los datos. Para las gestión de las imágenes se ha hecho uso de la utilización de urls las cuales cargan los recursos al html de la página. Estos fueron alguns aspectos importantes en el desarrollo de la página de blog voyage</p><br>
    <h2>Integrantes:</h2><br>
    <ul>
      <li>Jorge Eduardo Palencia Catalán</li>
      <li>Guillermo Alberto Rivas Coronado</li>
      <li>José Cupertino Orozco Barrera</li>
      <li>Edgar Armando Zapeta Mendoza</li>
      <li>Marco Vinicio Muralles Vásquez</li>
      <li>Gustavo Adolfo Quim</li>
    </ul>
  `;
  return $information;
}
