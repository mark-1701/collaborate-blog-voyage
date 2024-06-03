import { ajax } from '../helpers/ajax.js';
import { Post } from '../pages/Post/Post.js';
import { Posts } from './Posts.js';
// import { Information } from '../pages/Information/Information.js';
// import { Profile } from '../pages/Profile/Profile.js';

export async function Router() {
  const $main = document.getElementById('main');
  let { hash } = location;

  if (!hash || hash === '#/') {
    $main.appendChild(Posts());
  } else if (hash.includes('#/article')) {
    let words = hash.split('/');
    let id = words[words.length - 1];
    const postData = JSON.parse(localStorage.getItem('postData'));
    const postfound = postData.find(el => el.id === id);
    Post(postfound);
  } else if (hash.includes('#/posts')) {
    $main.appendChild(Posts());
  } else if (hash.includes('#/profile')) {
    // $main.appendChild(Profile());
  } else if (hash.includes('#/information')) {
    // $main.appendChild(Information());
  } else {
    $main.innerHTML = `<p class="error-message">Not Found</p>`;
  }
}

// ajax({
//   url: `app/assets/md/${word}.md`,
//   cbSuccess: res => {
//     $main.innerHTML = marked.parse(res.data);
//     Prism.highlightAll();
//   },
//   cbError: err => {
//     let message = err.statusText || 'Ocurrió un error';
//     // $main.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
//     $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
//   }
// });
