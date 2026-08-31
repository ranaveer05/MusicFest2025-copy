const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Toggle function
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the mode
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});