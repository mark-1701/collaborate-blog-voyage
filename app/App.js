import { Router } from './components/Router.js';
import { Header } from './components/Header.js';
import { SideBarMain } from './components/SideBarMain.js';
import { CreatePost } from './pages/CreatePost/CreatePost.js';
// import { UpdatePost } from './pages/UpdatePost/UpdatePost.js';
import { initializeTinyMCE } from './utils/tinymce.js'

export function App() {
  const $root = document.getElementById('root');
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(SideBarMain());
  $root.appendChild(CreatePost()); 
  // $root.appendChild(UpdatePost());
  initializeTinyMCE(); 
  Router();
}
