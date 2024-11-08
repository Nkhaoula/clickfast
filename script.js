let count = 0;

function setupClicker() {
  const button = document.getElementById("button-clicker");
  const counterDisplay = document.getElementById("counter");

  if (button && counterDisplay) {
    button.addEventListener("click", () => {
      count++;
      counterDisplay.innerHTML = count;

      // Effet visuel pour le bouton lors du clic
      button.style.transform = "scale(1.1)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);
    });
  }
}

function resetCounter() {
  count = 0;
  const counterDisplay = document.getElementById("counter");
  if (counterDisplay) {
    counterDisplay.innerHTML = count;
  }
}

setupClicker();

module.exports = { resetCounter, setupClicker };