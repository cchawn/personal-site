import './favicon.ico';
import './index.html';
import './index.scss';

function emojiFun() {
  const EMOJIS = ['✨', '✌︎', '🌚', '♕', '⚡️', '☹', '💻'];
  let ind = 1;
  const target = document.querySelector('#emoji');
  setInterval(() => {
    target.innerHTML = EMOJIS[ind];
    ind = (ind + 1) % EMOJIS.length;
  }, 250);
}

document.addEventListener('DOMContentLoaded', emojiFun);
