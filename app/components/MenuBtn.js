export function MenuBtn() {
  const $menuBtn = document.createElement('button');
  $menuBtn.classList.add('icon-btn');
  $menuBtn.classList.add('btn');
  $menuBtn.innerHTML = `<span class="material-symbols-outlined">menu</span>`;
  $menuBtn.addEventListener('click', e => {
    const $sidebar = document.querySelector('.sidebar');
    $sidebar.classList.toggle('sidebar-disabled');
  });
  return $menuBtn;
}
