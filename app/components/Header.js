import { Title } from './Title.js';
import { MenuBtn } from './MenuBtn.js';

export function Header() {
  const $header = document.createElement('header');
  $header.classList.add('header');
  $header.appendChild(MenuBtn());
  $header.appendChild(Title());
  return $header;
}
