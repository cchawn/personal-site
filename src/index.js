import './index.scss';

function emojiFun() {
  const EMOJIS = ['✨', '✌︎', '🌚', '♕', '⚡️', '☹', '💻'];
  let ind = 1;
  const target = document.querySelector('#emoji');
  if (target != null) {
    setInterval(() => {
      target.innerHTML = EMOJIS[ind];
      ind = (ind + 1) % EMOJIS.length;
    }, 250);
  }
}

function toggleMode() {
  document.querySelector('body').classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-mode');
  if (button != null) { button.onclick = toggleMode; }
  document.querySelector('body').classList.add('loaded');
  emojiFun();
});
