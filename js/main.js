const elDarkModeButton = document.querySelector('.site-mode-button');

elDarkModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
