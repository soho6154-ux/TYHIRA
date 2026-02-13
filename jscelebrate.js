function celebrate() {
  const confettiContainer = document.getElementById('confetti');
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '12px';
    confetti.style.height = '12px';
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 60%)`;
    confetti.style.top = '-15px';
    confetti.style.left = `${Math.random()*window.innerWidth}px`;
    confetti.style.borderRadius = '50%';
    confetti.style.opacity = Math.random();
    confettiContainer.appendChild(confetti);

    const fallDuration = Math.random()*3000 + 2000;
    confetti.animate([
      { transform: `translateY(0) rotate(0deg)` },
      { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random()*720}deg)` }
    ], { duration: fallDuration, iterations: 1, easing: 'linear' });

    setTimeout(() => confetti.remove(), fallDuration);
  }

  alert("🌹 You are amazing! 🌹"); // Optional fun message
}
