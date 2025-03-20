// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
        } else {
            body.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
        }
    });

    // Send Message Functionality
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.innerHTML = `
                <p>${message}</p>
                <small>${new Date().toLocaleTimeString()}</small>
            `;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
        }
    });

    // Allow pressing "Enter" to send messages
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});

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
