import './favicon.ico';
import './og.jpg';
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

function toggleMode() {
  document.querySelector('body').classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dark-mode').onclick = toggleMode;
  document.getElementById('light-mode').onclick = toggleMode;
  emojiFun();
});
