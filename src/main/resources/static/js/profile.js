// Select elements
const editBtn = document.querySelector('.edit-profile-btn');
const saveBtn = document.querySelector('.save-profile-btn');
const nameElem = document.getElementById('name');
const bioElem = document.getElementById('bio');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');

function enableEditing() {
    // Replace name and bio text with inputs prefilled
    nameElem.innerHTML = `<input type="text" id="edit-name" value="${nameElem.textContent.trim()}" />`;
    bioElem.innerHTML = `<input type="text" id="edit-bio" value="${bioElem.textContent.replace(/"/g, '').trim()}" />`;

    // Enable info inputs
    emailInput.disabled = false;
    phoneInput.disabled = false;
    locationInput.disabled = false;

    // Toggle buttons
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
}

function saveChanges() {
    // Get edited values
    const newName = document.getElementById('edit-name').value.trim();
    const newBio = document.getElementById('edit-bio').value.trim();

    // Update fields with new values, formatting bio with quotes
    nameElem.textContent = newName || "User";
    bioElem.textContent = `"${newBio || ''}"`;

    // Disable inputs again
    emailInput.disabled = true;
    phoneInput.disabled = true;
    locationInput.disabled = true;

    // Toggle buttons
    saveBtn.style.display = 'none';
    editBtn.style.display = 'inline-block';

    // Optionally: send updated data to backend via fetch/AJAX here
}
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