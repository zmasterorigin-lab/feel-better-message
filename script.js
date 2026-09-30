const floatingHearts = document.getElementById('floatingHearts');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

for (let i = 0; i < 18; i++) {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['💖', '💗', '💕', '💞', '✨'][i % 5];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${10 + Math.random() * 10}s`;
  heart.style.animationDelay = `${Math.random() * 4}s`;
  heart.style.fontSize = `${0.9 + Math.random() * 1.5}rem`;
  floatingHearts.appendChild(heart);
}

surpriseBtn.addEventListener('click', () => {
  surpriseMessage.classList.toggle('hidden');
  surpriseBtn.textContent = surpriseMessage.classList.contains('hidden')
    ? 'Open your surprise hug'
    : 'Hide the surprise hug';
});
