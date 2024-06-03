export function SideBarLink({ icon, title, link, funct }) {
  const $sidebarLink = document.createElement('div');
  $sidebarLink.classList.add('sidebar-link');
  $sidebarLink.innerHTML = `<a href="${link}"><div class="icon-btn"><span class="material-symbols-outlined">${icon}</span></div><p>${title}</p></a>`;
  funct && $sidebarLink.addEventListener('click', e => funct(e));
  return $sidebarLink;
}
