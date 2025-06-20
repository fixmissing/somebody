const compliments = [
  "Hi, Aena.",
  "Happy 22nd Birthday 🎂",
  "You’ve always been so warm and bright...",
  "Even when the world forgets to notice your pain.",
  "This is a little corner of the world that understands you.",
  "You don’t always need to smile.",
  "You don’t always need to be strong.",
  "Today, just be you.",
  "Hold yourself gently. Breathe. Exist.",
  "And know that I love you — quietly, truly, endlessly. 💖",
  "Happy birthday, my Aena. From Bebekk."
];

let i = 0;
function showCompliments() {
  if (i < compliments.length) {
    const p = document.createElement('p');
    p.textContent = compliments[i++];
    p.style.opacity = 0;
    p.style.transition = 'opacity 1s ease';
    document.getElementById('complimentsContainer').appendChild(p);
    setTimeout(() => { p.style.opacity = 1 }, 100);
    setTimeout(showCompliments, 2800);
  } else {
    // show the letter section
    document.getElementById('wishSection').classList.remove('hidden');
  }
}

document.getElementById('showBtn').addEventListener('click', () => {
  document.getElementById('showBtn').style.display = 'none';
  showCompliments();
});
