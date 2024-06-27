// Function to update the countdown timer
function updateTimer() {
  const targetDate = new Date(document.getElementById("target-date").value);
  const currentDate = new Date();
  const totalSeconds = (targetDate - currentDate) / 1000;

  if (totalSeconds > 0) {
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById(
      "timer"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("timer").innerHTML = "Target Date Reached!";
  }
}

// Update timer every second
setInterval(updateTimer, 1000);
