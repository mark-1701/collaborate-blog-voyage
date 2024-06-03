import { SideBar } from "./SideBar.js";
import { Main } from "./Main.js";

export function SideBarMain() {
  const $div = document.createElement("div");
  $div.classList.add("sidebarmain");
  $div.appendChild(SideBar());
  $div.appendChild(Main());
  return $div;
}