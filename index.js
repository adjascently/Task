const timerText = document.getElementById('timer-text');
const progressBar = document.querySelector('.progress-bar');
const add10SecsBtn = document.getElementById('add-10-secs');
const resetTimerBtn = document.getElementById('reset-timer');
const intialtimmer=30;
let remainingSeconds = intialtimmer; 
const circumference = 565.48; // Circumference of the circle (2 * π * r)

function updateTimerText() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerText.textContent = formattedTime;
}

function updateProgressBar() {
  const progress = 100 - (remainingSeconds / intialtimmer) * 100;
  const offset = (circumference * progress) / 100;
  progressBar.style.strokeDashoffset = circumference - offset;
}

function updateTimer() {
  if (remainingSeconds > 0) {
    remainingSeconds--;
    updateTimerText();
    updateProgressBar();
  }
}

function add10Secs() {
  remainingSeconds += 10;
  updateTimerText();
  updateProgressBar();
}

function resetTimer() {
  remainingSeconds = intialtimmer; 
  updateTimerText();
  updateProgressBar();
}

setInterval(updateTimer, 1000);
add10SecsBtn.addEventListener('click', add10Secs);
resetTimerBtn.addEventListener('click', resetTimer);
