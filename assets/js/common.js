$(document).ready(() => {
  const EMOJIS = ['✨', '✌︎', '🌚', '♕', '⚡️', '☹', '💻'];
  let ind = 1;
  setInterval(() => {
    $('#emoji').html(EMOJIS[ind]);
    ind = (ind + 1) % EMOJIS.length;
  }, 250);
});
