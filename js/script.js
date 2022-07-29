const text = ['Selamat datang!    ', 'Apakabar?    '];
let count = 0;
let index = 0;
let currenttext = '';
let words = '';

(function typing() {
  if (count == text.length) {
    count = 0;
  }

  currenttext = text[count];
  words = currenttext.slice(0, ++index);
  document.querySelector('.typing').textContent = words;

  if (words.length == currenttext.length) {
    count++;
    index = 0;
  }

  setTimeout(typing, 200);
})();
