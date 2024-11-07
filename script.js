let count = 0;

document.getElementById("button-clicker").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerHTML = count;

  // Effet visuel pour le bouton lors du clic
  const button = document.getElementById("button-clicker");
  button.style.transform = "scale(1.1)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 100);
});