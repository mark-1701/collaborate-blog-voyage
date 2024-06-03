import { SideBarLink } from './SideBarLink.js';

export function OpenCreatePostModal(e) {
  e.preventDefault();
  const $modal = document.querySelector('#create-post-modal');
  $modal.classList.toggle('hidden-element');
}

export function OpenUpdatePostModal(e) {
  e.preventDefault();
  const $modal = document.querySelector('#update-post-modal');
  $modal.classList.toggle('hidden-element');
}

export function SideBar() {
  const $sidebar = document.createElement('div');
  $sidebar.classList.add('sidebar');
  $sidebar.appendChild(SideBarLink({ icon: 'add_circle', title: 'Crear', funct: OpenCreatePostModal }));
  $sidebar.appendChild(SideBarLink({ icon: 'edit', title: 'Actualizar', funct: OpenUpdatePostModal }));
  $sidebar.appendChild(SideBarLink({ icon: 'post', title: 'Todos los post', link: '#/posts' }));
  $sidebar.appendChild(SideBarLink({ icon: 'account_circle', title: 'Perfil', link: '#/profile' }));
  $sidebar.appendChild(SideBarLink({ icon: 'info', title: 'Information', link: '#/information' }));
  return $sidebar;
}
