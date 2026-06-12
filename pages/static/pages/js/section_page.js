document.documentElement.dataset.page = 'section';

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.left = `${e.clientX - rect.left - 5}px`;
    ripple.style.top = `${e.clientY - rect.top - 5}px`;
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
