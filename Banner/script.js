window.onload = function () {
  let countdownElement = document.getElementById("countdown");
  let countdownTime = 5400;

  function updateTimer() {
    let hours = Math.floor(countdownTime / 3600);
    let minutes = Math.floor((countdownTime % 3600) / 60);
    let seconds = countdownTime % 60;

    countdownElement.textContent = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (countdownTime > 0) {
      countdownTime--;
    } else {
      countdownTime = 5400;
    }
  }

  setInterval(updateTimer, 1000);
  updateTimer();
};
