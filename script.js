// Set total time: 45 minutes (in seconds)
let timeLeft = 45 * 60;

const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownEl.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    window.location.href = "session-complete.html";
  }
}, 1000);

function goToSessionComplete() {
  window.location.href = "session-complete.html";
}

// === Conditional question logic ===
function handleQ14(answer) {
  if (answer === 'yes') {
    document.getElementById('q15').style.display = 'block';
  } else {
    goToSessionComplete();
  }
}

function showQ16() {
  document.getElementById('q16').style.display = 'block';
}

function showQ17() {
  document.getElementById('q17').style.display = 'block';
}

