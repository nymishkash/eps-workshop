// Get the button
const darkModeBtn = document.getElementById("darkModeBtn");

// Add click event
darkModeBtn.addEventListener("click", function () {
  // Toggle dark mode class on body
  document.body.classList.toggle("dark-mode");

  // Change button text
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode";
  } else {
    darkModeBtn.textContent = "Dark Mode";
  }
});
