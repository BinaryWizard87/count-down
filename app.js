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

/* real time */
// function updateTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
//     seconds < 10 ? "0" + seconds : seconds
//   }`;
//   document.getElementById("time").textContent = timeString;
// }
// updateTime();
// setInterval(updateTime, 1000); // Update every second

/* all date and time */
function updateDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.getDate();
  const month = now.getMonth() + 1; // January is 0 in JavaScript
  const year = now.getFullYear();

  const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
  const dateString = `${day}/${month}/${year}`;

  document.getElementById(
    "datetime"
  ).innerHTML = `<p>Time: ${timeString}</p><p>Date: ${dateString}</p>`;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
