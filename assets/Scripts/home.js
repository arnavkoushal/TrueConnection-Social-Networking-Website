// Function to navigate to a specific page
function navigateTo(page) {
    window.location.href = page;
  }
  
  // Add event listeners to navigation links
  document.getElementById('Home-link').addEventListener('click', () => {
    navigateTo('home.html');
  });
  
  document.getElementById('MyProfile-link').addEventListener('click', () => {
    navigateTo('Myprofile.html');
  });
  
  document.getElementById('Chat-link').addEventListener('click', () => {
    navigateTo('chat.html');
  });

  document.getElementById('Logout-link').addEventListener('click', () => {
    navigateTo('login.html');
  });
  // Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeBtn.innerHTML = '<i class="uil uil-sun"></i>'; // Sun icon for light mode
    }
}

// Toggle Theme
themeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="uil uil-moon"></i>'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="uil uil-sun"></i>'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark');
    }
});